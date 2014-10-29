/**
 *
 *  Usage:
 *
 *
 *  @author Howard.Zuo
 *  @date Oct 29, 2014
 *
 **/
(function(global, factory) {
    'use strict';

    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        global.Loading = factory();
    }

}(window, function() {
    'use strict';

    var removeLoadingMask = function() {
        if ($loadingMaskDiv) {
            $body.removeChild($loadingMaskDiv);
        }
    };

    var createDoubleBounce = function() {
        var $bounce1Div = document.createElement('div');
        $bounce1Div.setAttribute('class', 'double-bounce1');
        var $bounce2Div = document.createElement('div');
        $bounce2Div.setAttribute('class', 'double-bounce2');

        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');
        $spinnerDiv.appendChild($bounce1Div);
        $spinnerDiv.appendChild($bounce2Div);

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask double-bounce');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createRotatingPlane = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask rotating-plane');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createWave = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');
        for (var i = 1; i <= 5; i++) {
            var $rect = document.createElement('div');
            $rect.setAttribute('class', 'rect' + i);
            $spinnerDiv.appendChild($rect);
        }

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask wave');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createWanderingCubes = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask wandering-cubes');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createPulse = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask pulse');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createChasingDots = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        for (var i = 1; i <= 2; i++) {
            var $dot = document.createElement('div');
            $dot.setAttribute('class', 'dot' + i);
            $spinnerDiv.appendChild($dot);
        }

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask chasing-dots');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createThreeBounce = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        for (var i = 1; i <= 3; i++) {
            var $bounce = document.createElement('div');
            $bounce.setAttribute('class', 'bounce' + i);
            $spinnerDiv.appendChild($bounce);
        }

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask three-bounce');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createCircle = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        for (var i = 1; i <= 12; i++) {
            var $circle = document.createElement('div');
            $circle.setAttribute('class', 'circle' + i + ' circle');
            $spinnerDiv.appendChild($circle);
        }

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask circle-wrapper');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createCubeGrid = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        for (var i = 1; i <= 9; i++) {
            var $cube = document.createElement('div');
            $cube.setAttribute('class', 'cube');
            $spinnerDiv.appendChild($cube);
        }

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask cube-wrapper');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var createWordPress = function() {
        var $spinnerDiv = document.createElement('div');
        $spinnerDiv.setAttribute('class', 'spinner');

        var $innerCircle = document.createElement('div');
        $innerCircle.setAttribute('class', 'inner-circle');
        $spinnerDiv.appendChild($innerCircle);

        $loadingMaskDiv = document.createElement('div');
        $loadingMaskDiv.setAttribute('class', 'loading-mask wordpress');
        $loadingMaskDiv.appendChild($spinnerDiv);

        $body.appendChild($loadingMaskDiv);
    };

    var _THEMES = {
        'double-bounce': createDoubleBounce,
        'rotating-plane': createRotatingPlane,
        'wave': createWave,
        'wandering-cubes': createWanderingCubes,
        'pulse': createPulse,
        'chasing-dots': createChasingDots,
        'three-bounce': createThreeBounce,
        'circle': createCircle,
        'cube-grid': createCubeGrid,
        'wordpress': createWordPress
    };

    var $html = document.getElementsByTagName('html')[0];
    var $body = document.body;
    var $loadingMaskDiv;
    var lastOverflow;

    var wheel = function(e) {
        var ex = e || window.event;
        if (ex.preventDefault) {
            ex.preventDefault();
        }
        ex.returnValue = false;
    };

    var disableScrollbar = function() {
        lastOverflow = $body.style.overflow;
        $body.style.overflow = 'hidden';
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = wheel;
    };

    var recoverScrollbar = function() {
        $body.style.overflow = lastOverflow;
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = null;
    };

    var _isRunning = false;

    var Loading = {};
    Loading.version = '1.0.0';

    Loading.enable = function(theme, timeout) {
        var _this = this;
        var the = 'double-bounce';
        if (_THEMES[theme]) {
            the = theme;
        }

        if (_isRunning) {
            console.warn('loading mask already running');
            return;
        }
        _isRunning = true;

        _THEMES[the]();
        disableScrollbar();

        if (timeout) {
            setTimeout(function() {
                _this.destroy();
            }, timeout);
        }
    };

    Loading.destroy = function() {
        _isRunning = false;
        removeLoadingMask();
        recoverScrollbar();
    };

    return Loading;
}));
