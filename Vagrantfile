require 'yaml'

current_dir    = File.dirname(File.expand_path(__FILE__))

# load configuration variables
configs        = YAML.load_file("#{current_dir}/deploy/vars/all.yml")
vagrant_config = configs['vm']

Vagrant.configure("2") do |config|

    config.vm.box = "bento/ubuntu-16.04"

    config.hostmanager.enabled = true
    config.hostmanager.manage_host = true
    config.hostmanager.ignore_private_ip = false
    config.hostmanager.include_offline = true
    config.hostmanager.ip_resolver = proc do |machine|
        result = ""
        machine.communicate.execute("ifconfig enp0s8") do |type, data|
            result << data if type == :stdout
        end
        (ip = /inet addr:(\d+\.\d+\.\d+\.\d+)/.match(result)) && ip[1]
    end

    config.vm.define vagrant_config['hostname'] do |node|
        node.vm.hostname = vagrant_config['hostname']
        node.vm.network :public_network, ip:  vagrant_config['ip']
        url = vagrant_config['domain']
        database = "db."+vagrant_config['domain']
        dashboard = "dashboard."+vagrant_config['domain']
        mail = "mail."+vagrant_config['domain']
        shopware = "shopware."+vagrant_config['domain']
        node.hostmanager.aliases = [url, database, dashboard, mail, shopware]
    end

    # VirtualBox Cpu settings
    # Use all CPU cores and 1/4 system memory
    config.vm.provider "virtualbox" do |v|
        host = RbConfig::CONFIG['host_os']

        # Give VM 1/8 system memory & access to all cpu cores on the host
        if host =~ /darwin/
            cpus = `sysctl -n hw.ncpu`.to_i
            # sysctl returns Bytes and we need to convert to MB
            mem = `sysctl -n hw.memsize`.to_i / 1024 / 1024 / 8
        elsif host =~ /linux/
            cpus = `nproc`.to_i
            # meminfo shows KB and we need to convert to MB
            mem = `grep 'MemTotal' /proc/meminfo | sed -e 's/MemTotal://' -e 's/ kB//'`.to_i / 1024 / 8
        else # sorry Windows folks, I can't help you
            cpus = 2
            mem = vagrant_config['vm.ram']
        end

        v.customize ["modifyvm", :id, "--memory", mem]
        v.customize ["modifyvm", :id, "--cpus", cpus]
    end
    
    #Portforwarding to use NPM Browsersync from Inside VM
    config.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true
    config.vm.network :forwarded_port, guest: 3001, host: 3001, auto_correct: true

    config.vm.synced_folder "./www", "/var/www", create: true

    #"Stdin is not a TTY" - Fix
    config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"
    
    # Run Ansible from the Vagrant VM
    config.vm.provision "ansible_local" do |ansible|
        ansible.playbook = "deploy/vagrant.yml"
    end

    config.vm.provision "shell", privileged: false, inline: <<-EOF
      echo "Vagrant Box provisioned!"
      echo "Local server address is http://#{$hostname}"
      echo "Local server address is http://#{$ip}"
    EOF

end
