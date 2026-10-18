// ==UserScript==
// @name         Repuls.io Precise Crosshair
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Ultra-precise crosshair for Repuls.io
// @author       master
// @match        https://repuls.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a high-precision micro-dot
    const crosshair = document.createElement('div');
    crosshair.style.position = 'fixed';
    crosshair.style.top = '50%';
    crosshair.style.left = '50%';
    crosshair.style.width = '3px';                  // Ultra-thin micro-dot
    crosshair.style.height = '3px';
    crosshair.style.backgroundColor = '#00FF00';    // Neon green
    crosshair.style.border = '1px solid #000000';   // Black border for visibility
    crosshair.style.borderRadius = '50%';
    crosshair.style.transform = 'translate(-50%, -50%)';
    crosshair.style.pointerEvents = 'none';
    crosshair.style.zIndex = '9999';

    document.body.appendChild(crosshair);
})();