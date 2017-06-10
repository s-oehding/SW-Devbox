module.exports.questions  = [{
    type: 'input',
    name: 'ip',
    message: 'Enter your VMs IP Address: ',
    validate: function(value) {
        var pass = value.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
        if (pass) {
            return true;
        }
        return 'Please enter a IPv4 Address like 192.168.0.100';
    }
}, {
    type: 'input',
    name: 'hostname',
    message: 'Enter your VMs hostname (0-9,Aa-Zz, -,_): ',
    validate: function(value) {
        var pass = value.match(/^[a-zA-Z0-9_\-]+$/);
        if (pass) {
            return true;
        }
        return 'The hostname may only consist of alphabetical, number, hyphen and underscore';
    }
}, {
    type: 'input',
    name: 'domain',
    message: 'Enter your VMs domian (my-domain.dev): ',
    validate: function(value) {
        var pass = value.match(/^[a-zA-Z0-9.\-]+$/);
        if (pass) {
            return true;
        }

        return 'The domian may only consist of alphabetical, number and hyphen';
    }
}, {
    type: 'list',
    name: 'ram',
    message: 'Set VMs amount of ram: ',
    choices: ['512', '1024', '2048', '4096'],
    filter: function(val) {
        return val.toLowerCase();
    }
}, {
    type: 'list',
    name: 'cpu',
    message: 'Set number of used cpu cores: ',
    choices: ['1', '2', '4', '6', '8', '12'],
    filter: function(val) {
        return val.toLowerCase();
    }
}];
