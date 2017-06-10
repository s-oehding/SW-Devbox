/** 
 * Initial Setup for your Vagrant environment
 */

'use strict';
let ascii = require('./modules/ascii');
let clear = require('clear');
let setup = require('./modules/setup');

let state = 0

clear();
ascii.render('VM-Setup', 'larry3d', 'green');
setTimeout(function(){ setup.run(state) }, 100);