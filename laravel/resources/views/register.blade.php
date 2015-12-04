@extends('layouts.master')

@section('title', 'KebabRescue - Login')


@section('content')
<div class="container">
  <div class="row">
    <form class="form-horizontal" action='' method="POST">
  <fieldset>
    <div id="legend">
      <legend class="">Register</legend>
    </div>
    <div class="control-group">
      <!-- Username -->
      <label class="control-label"  for="first-name">First name</label>
      <div class="controls">
        <input type="text" id="first-name" value="{{ $user['first_name'] }}" name="first_name" placeholder="" class="input-xlarge" disabled>
      </div>
    </div>

    <div class="control-group">
      <!-- Username -->
      <label class="control-label"  for="last-name">Last name</label>
      <div class="controls">
        <input type="text" id="last-name" value="{{ $user['last_name'] }}" name="last_name" placeholder="" class="input-xlarge" disabled>
      </div>
    </div>

    <div class="control-group">
      <!-- E-mail -->
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" id="email" value="{{ $user['email'] }}" name="email" placeholder="" class="input-xlarge" disabled>
      </div>
    </div>

    <div class="control-group">
      <!-- E-mail -->
      <label class="control-label" for="gender">Gender</label>
      <div class="controls">
        <input type="text" id="gender" value="{{ ucfirst($user['gender']) }}" name="gender" placeholder="" class="input-xlarge" disabled>
      </div>
    </div>

    <div class="control-group">
      <!-- Password -->
      <label class="control-label"  for="phone">Phone number</label>
      <div class="controls">
        <input type="text" id="phone" name="phone" placeholder="" class="input-xlarge">
        <p class="help-block">Please enter your phone (Ex: +33659979513)</p>
      </div>
    </div>


    <div class="control-group">
      <!-- Password-->
      <label class="control-label" for="password">Password</label>
      <div class="controls">
        <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
        <p class="help-block">Password should be at least 4 characters</p>
      </div>
    </div>

    <div class="control-group">
      <!-- Password -->
      <label class="control-label"  for="password_confirm">Password (Confirm)</label>
      <div class="controls">
        <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge">
        <p class="help-block">Please confirm password</p>
      </div>
    </div>



    <div class="control-group">
      <!-- Button -->
      <div class="controls">
        <button class="btn btn-success">Register</button>
      </div>
    </div>
  </fieldset>
</form>
  </div>
</div>
@stop
