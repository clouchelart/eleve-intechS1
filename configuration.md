### Installation system
* installer les headers linux (linux-headers-.....)
* VBOX GUEST ADDITION

### Installation
* apt-get -y install vim
* apt-get -y install mate-tweak (suppression icone fond ecran)
* apt-get -y install tree
* apt-get -y install curl
* apt-get -y install git
* apt-get -y install build-essential
* apt-get -y install zerofree (VBoxManage modifyvm ... --compact)
* installation node :
    * installation interpréteur (à partir du site)
    * npm install kbd / remedial / moment / formidable / uuid
    * npm install -g jshint
* apt-get -y install php7.0
* apt-get -y install php-xml

### Ménage
* suppression fichier Bureau/Images/Téléchargement ...

### Paramétrage
* sudo : ajout compte eleve dans le groupe sudo
* apt : configuration des dépots (français)
* vim : .vimrc
* jshint : .jshintrc
* MATE terminal : (profil "projection")
* MATE panneau haut : Applications/Firefox/MATE Terminal/Son/Réseau/Arrêt
* firefox :
    * demander répertoire au téléchargement
    * home-page : itinet.fr/thire
    * ajouter barre de menu
    * ajouter barre perso (avec itinet.fr/thire)
    * ajout module uBlock Origin
* System :
    * /etc/passwd :
        * compte root (mdp: secret)
        * compte eleve (mdp: secret)
    * /etc/hostname : intech
* git :
    * ~/.gitignore
    * git config --global core.excludesfile ~/.gitignore
    * git config --global core.editor vim
    * git mail ... est configuré avec upload
    * git user ... est configuré avec upload
	* git config --global core.editor vim

* ssh :
	* .ssh/id_rsa.pub   .ssh/id_rsa

### Personnalisation
* ajout commande upload et upload.pl dans /usr/local/bin/

### Remarques
* mysql n'est pas installé
* VirtualBox : penser à configurer le presse-papier partagé
* pour les possesseurs de Mac, on peut reconfigurer le clavier :
    * Aller dans System/Préférence/Matériel/Clavier ...
    * ... puis Agencement et changer modèle de clavier
