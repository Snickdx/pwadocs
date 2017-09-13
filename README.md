# PWA Docs

## REQUIREMENTS
* npm and gulp
* python 2.7
* pip http://www.saltycrane.com/blog/2010/02/how-install-pip-ubuntu/


## INSTALLATION
``` sh
sudo pip install mkdocs
sudo pip install mkdocs-material
npm install
```

## Configuration
Customize the project's name, theme, images etc. by editing the config.json file.
Images can be replaced in the assets/images/ directory.

## Development
Go to root of project and run
``` sh
mkdocs serve
```
This will setup a live reload server to show your edits in the browser.
Edit the corresponding markdown files for the chapter you wish to contribute to.


## Building
Go to root of project and run.
``` sh
gulp build-site
```
gulp build site would compile the mkdocs site and inject the required PWA files into the folder site
