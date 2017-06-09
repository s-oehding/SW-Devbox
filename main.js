/** 
 * Initial Setup for your Vagrant environment
 */

'use strict';
var vagrant = require('vagrant');
var clear = require('clear');

clear();

vagrant.up(function(code) {
    console.log(code);
});