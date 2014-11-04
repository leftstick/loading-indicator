(function($, global) {
    'use strict';

    $('#double-bounce').on('click', function() {
        global.Loading.enable('double-bounce', 3000);
    });

    $('#rotating-plane').on('click', function() {
        global.Loading.enable('rotating-plane', 3000);
    });

    $('#wave').on('click', function() {
        global.Loading.enable('wave', 3000);
    });

    $('#wandering-cubes').on('click', function() {
        global.Loading.enable('wandering-cubes', 3000);
    });

    $('#pulse').on('click', function() {
        global.Loading.enable('pulse', 3000);
    });

    $('#chasing-dots').on('click', function() {
        global.Loading.enable('chasing-dots', 3000);
    });

    $('#three-bounce').on('click', function() {
        global.Loading.enable('three-bounce', 3000);
    });

    $('#circle').on('click', function() {
        global.Loading.enable('circle', 3000);
    });

    $('#cube-grid').on('click', function() {
        global.Loading.enable('cube-grid', 3000);
    });

    $('#wordpress').on('click', function() {
        global.Loading.enable('wordpress', 3000);
    });

    $('#audio-wave').on('click', function() {
        global.Loading.enable('audio-wave', 3000);
    });

    $('#spinning-disc').on('click', function() {
        global.Loading.enable('spinning-disc', 30000);
    });

    $('#circular-square').on('click', function() {
        Loading.enable('circular-square', 30000);
    });

}($, window));
