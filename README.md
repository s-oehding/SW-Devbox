# Vagrant Dev Environment

## Prerequisites
In order to run this Machine you need Virtualbox and Vagrant (min. Version 1.8) on your local machine. This Vagrantbox is configured with a public ip so that it can be accessed from the local network. The vagrant host manager plugin is used to manage the host entries on the local machine.

 - [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
 - [Vagrant](https://www.vagrantup.com/downloads.html)
 - [Vagrant Hostmanager](https://github.com/devopsgroup-io/vagrant-hostmanager)

### How to use: 

#### First time setup: 
Clone the repository to your local machine.

    $ git clone git@github.com:s-oehding/SW-Devbox.git <your-project-name>
    $ cd <your-project-name>

Install Dependencies 
	`$ npm install`

Run setup script and follow the instructions 
	`$ npm run setup`

If everything is set up, just run: 
	`$ npm start`


The first boot process takes a little. First the disk image of the Linux distribution is downloaded, afterwards all necessary packages are installed and configured via Ansible. 
Your machine can then be reached via the domain specified during the setup process and / or the specified IP. For example: [http://your-project-name.dev] / [192.168.0.100]

#### SSH
To SSH into the created VM:

    `$ vagrant ssh`

### Services

#### Mysql management
- Adminer (DB-Administration): [http://db.your-project-name.dev]
- MySQL root user: `root`, password: `root`
- MySQL user: `shopware`, password: `password`

#### PHP Version
The following PHP Versions are installed by default:

 - PHP 5.6
 - PHP 7.0
 - PHP 7.1

( The following points are shamelesly borrowed from the official sw-labs Dev Machine so Thx ;)
Call one of the following commands to change the PHP Version:
 
    `$ setphp_5.6` 
    `$ setphp_7.0` 
    `$ setphp_7.1` 

#### Composer
Composer is installed globally and available via:

	`$ composer`

#### SW-Cli-Tools
SW-Cli-Tools are installed globally and available via:

	`$ sw`