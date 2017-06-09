var YAML = require('yamljs');
var inquirer = require('inquirer');
var questions = require('./questions').questions;
var fs = require('fs-utils');

/** @type {json} [main configuration file for Ansible] */
var conf = YAML.load('modules/assets/baseconfig.yaml');

module.exports.run = runSetup;

function runSetup(state) {
    inquirer.prompt(questions).then(function processAnswers(answers) {
	    // conf.vm = answers;
	    conf.vm.ip = answers.ip;
	    conf.vm.hostname = answers.hostname;
	    conf.vm.domain = answers.domain;
	    conf.vm.ram = answers.ram;
	    conf.vm.cpu = answers.cpu;
	    conf.vm.http_port = 80;
	    conf.shopware.version = answers.shopwareVersion;
	    writeConfig("deploy/vars/all.yml", conf);
	    return state = 2;
	});
}

function writeConfig(destination, configString) {
	fs.writeYAML(destination, conf, function(err) {
        if (err) {
            return console.log(err);
        }
	    console.log('\nVM Configuration saved!');
	    return true;
    });
}
