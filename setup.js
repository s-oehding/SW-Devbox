/** 
 * Initial Setup for your Vagrant environment
 */

'use strict';
var ascii = require('./modules/ascii');
var clear = require('clear');
var setup = require('./modules/setup');

let state = 0

clear();
ascii.render('monolabs', 'banner', 'green');
setTimeout(function(){ setup.run(state) }, 100);