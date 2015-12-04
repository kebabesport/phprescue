var u_lon;
var u_lat;
var accepted = false;

// Returns user's LONGITUDE
function getLongitude () {
	if (accepted)
		return u_lon;
	else
		getLocation();
		return u_lon;
}

// Returns user's LATITUDE
function getLatitude () {
	if (accepted)
		return u_lat;
	else
		getLocation();
		return u_lat;
}

// Ask user's location (NOTE: better to use at "document loaded time")
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        //Function to save localisation data
        function(position){
    		u_lat = position.coords.latitude;
    		u_lon = position.coords.longitude;    
    		accepted = true;	
        }, 
        //Function to print error in case it doesn't work
        function(error) {
			    switch(error.code) {
			        case error.PERMISSION_DENIED:
			            alert("User denied the request for Geolocation.");
			            break;
			        case error.POSITION_UNAVAILABLE:
			            alert("Location information is unavailable.");
			            break;
			        case error.TIMEOUT:
			            alert("The request to get user location timed out.");
			            break;
			        case error.UNKNOWN_ERROR:
			            alert("An unknown error occurred.");
			            break;
			    }
			}
		);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }

}


//DELETE THIS WHEN USING FOR REAL!
function toDeleteTest(){
	var display = document.getElementById("loc");
	display.innerHTML = "Longitude="+getLongitude()+"</br>"+"Latitude="+getLatitude();
}
getLocation();
//END DELETE