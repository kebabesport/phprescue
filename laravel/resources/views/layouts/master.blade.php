<!DOCTYPE html>
<html>
  @include('includes.head')

  <body onload="init()">
    @include('includes.navbar')
    @yield('content')
    @include('includes.footer')
  </body>
</html>
