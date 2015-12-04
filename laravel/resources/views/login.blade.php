@extends('layouts.master')

@section('title', 'KebabRescue - Login')

@section('css')
<!-- Bootstrap Social CSS -->
<link href="/assets/css/bootstrap-social.css" rel="stylesheet">
<!-- Bootstrap Social CSS -->
<link href="/assets/css/font-awesome.min.css" rel="stylesheet">
@stop

@section('content')
<div class="container">

<!-- Content Row -->
    <div class="row">


        <!-- Twitter Button -->
        <div class="row">

            <div class="col-lg-6 connectbutton">
                <a class="btn btn-block btn-social btn-twitter">
                    <span class="fa fa-twitter"></span> Sign in with Twitter
                </a>
            </div>

        </div>
        <!-- End of Twitter Button -->

        <!-- Google Button -->
        <div class="row">

            <div class="col-lg-6 connectbutton">
                <a class="btn btn-block btn-social btn-google">
                    <span class="fa fa-google"></span> Sign in with Google+
                </a>
            </div>

        </div>
        <!-- End of Google Button -->

        <!-- Facebook Button -->
        <div class="row">

            <div class="col-lg-6 connectbutton">
                <a href="/login/facebook" class="btn btn-block btn-social btn-facebook">
                    <span class="fa fa-facebook"></span> Sign in with Facebook
                </a>
            </div>

        </div>
        <!-- End of Facebook Button -->

    </div>
@stop
