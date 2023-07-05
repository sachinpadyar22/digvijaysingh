import $ from 'jquery';
$(document).ready(function () {
    $('.navbar-nav>li>.nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  } );