/** 
 * Initial Setup for your Vagrant environment
 */

'use strict';
const ascii = require('./modules/ascii');
const clear = require('clear');
const fs = require('fs');
const setup = require('./modules/setup');
const vagrant = require('vagrant');

const state = 0

clear();

fs.access('deploy/vars/all.yml', (err) => {
  if (!err) {
    vagrant.up(function(code) {
	    console.log(code);
	});
  } else {
  	ascii.render('VM-Setup', 'larry3d', 'green');
	setTimeout(function(){ setup.run(state) }, 100);
  }
});