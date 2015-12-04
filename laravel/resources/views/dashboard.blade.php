@extends('layouts.master')

@section('title', 'Home')

@section('content')
<div class="container">

<!-- Content Row -->
    <div class="row">
        <!-- MAP Container -->
        <div class="col-lg-12">
            <div class="well text-center">
                <h2>Carte</h2>

                <!-- Map -->
                <div id="map" ></div>
                <!-- End of Map -->

            </div>
        </div>
        <!-- End of MAP Container-->
    </div>
    <!-- End of content Row -->

    <hr>
    <!-- Under-map Row -->
    <div class="row">
        <div class="col-md-8">
            <img class="img-responsive img-rounded" src="http://placehold.it/900x350" alt="TEMPLATE">
        </div>

        <!-- TODO TEMPLATE Title+Text+Button -->
        <div class="col-md-4">
            <h1>Title of explanation</h1>
            <p>Explication text is to be written here</p>
            <a class="btn btn-primary btn-lg" href="#">Template Button!</a>
        </div>
        <!-- TODO End of Title+Text+Button -->

    </div>
@stop
