$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    $('#collapsedamir').on('shown.bs.collapse', function () {
        $('#damirless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsemehdi').on('shown.bs.collapse', function () {
        $('#mehdiless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsedamir').on('hide.bs.collapse', function () {
        $('#damirless').html('<h6>Read More <i class="fas fa-angle-down"></i></h6>');
    });

    $('#collapsehaniye').on('shown.bs.collapse', function () {
        $('#haniyeless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsehaniye').on('hide.bs.collapse', function () {
        $('#haniyeless').html('<h6>Read More <i class="fas fa-angle-down"></i></h6>');
    });

    $('#collapsejesse').on('shown.bs.collapse', function () {
        $('#jesseless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsejesse').on('hide.bs.collapse', function () {
        $('#jesseless').html('<h6>Read More <i class="fas fa-angle-down"></i></h6>');
    });

    $('#collapsekrishna').on('shown.bs.collapse', function () {
        $('#krishnaless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsekrishna').on('hide.bs.collapse', function () {
        $('#krishnaless').html('<h6>Read More <i class="fas fa-angle-down"></i></h6>');
    });

    $('#collapsesourin').on('shown.bs.collapse', function () {
        $('#sourinless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsesourin').on('hide.bs.collapse', function () {
        $('#sourinless').html('<h6>Read More <i class="fas fa-angle-down"></i></h6>');
    });

    $('#collapsethomas').on('shown.bs.collapse', function () {
        $('#thomasless').html('<h6>Read Less <i class="fas fa-angle-up"></i></h6>');
    });
    $('#collapsethomas').on('hide.bs.collapse', function () {
        $('#thomasless').html('<h6>Read More <i class="fas fa-angle-down"></i></h6>');
    });

});