var opened = false;
var ws;
var onMessageCallback = function() {};
var onConnexionOpened = function() {};
var onUnreachableServer = function() {};
var onInterruptedSocket = function() {};
var onClose = function() {};
var callbacks = {};
var knownVictim = {};
var declareEvents = function(ws) {

    window.addEventListener("beforeunload", function(event) {
        ws.close();
        ws = null;
    });


    ws.onopen = function() {
        opened = true;
        onConnexionOpened();
        ws.send('type','rescue');
        ws.send('type','getvictim');
    };

    ws.onclose = function() {
        if (!opened)
            onUnreachableServer();
        else
            onInterruptedSocket();

        opened = false;
        onClose();
    };

    ws.onmessage = function(e) {
        var msg = JSON.parse(e.data);
        var getType = e.data.split("$")[0];
        var getValue = e.data.split("$")[1];

        var args = '';
        if (msg.data !== undefined)
            args = msg.data;

        if (getType.split(":")[1] == "loc") {
            geolocation = getValue.split(",")[0];
            victim = getValue.split(",")[1];
            if(knownVictim.indexOf(victim) == -1) {
                addUser([parseInt(geolocation.split(';')[0]),parseInt(geolocation.split(';')[1])],victim);
                knownVictim.push(victim);
            }
            else {
                addPointForUser([parseInt(geolocation.split(';')[0]),parseInt(geolocation.split(';')[1])],victim);
            }
        }
    };
};

var events = {
    open: function(host, port) {
        var socket = new WebSocket("ws://"+host+":"+port);
        declareEvents(socket);
        ws = socket;
    },
    setOnMessageCallback: function(callback) {
        onMessageCallback = callback;
    },
    setOnConnexionOpened: function(callback) {
        onConnexionOpened = callback;
    },
    setOnUnreachableServer: function(callback) {
        onUnreachableServer = callback;
    },
    setOnInterruptedSocket: function(callback) {
        onInterruptedSocket = callback;
    },
    setOnClose: function(callback) {
        onClose = callback;
    },
    // For global purpose
    on: function(eventName, callback) {
        callbacks[eventName] = callback;
    },
    emit: function(eventName, data) {
        var transmission = {};
        transmission.type = eventName;
        if (data !== undefined) {
            transmission.data = data;
        }
        ws.send(JSON.stringify(transmission));
    },
    close: function() {
        ws.close();
    }
};