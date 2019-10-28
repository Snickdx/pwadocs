# PWADocs
A PWA wrapper for Mkdocs Material. 
This project combines:
* Workbox-cli for building the service worker.
* MkDocs: Static site doc site geneator
* Material for MkDocs: A Material theme for mkdocs


## Requirements
* Python 2 or 3
* Node. npm

## Installation
Install python dependencies
```
$ pip install -r requirements.txt
```

Install npm packages
```
$ npm install -g workbox-cli
```

## Configuration

### Configuring the site
To set the app's name, description google analytics and title edit the folling directives in the mkdocs.yml file.

```yaml
# Project information
site_name: 'Material for MkDocs'
site_description: 'A Material Design theme for MkDocs'
site_author: 'Martin Donath'
site_url: 'https://squidfunk.github.io/mkdocs-material/'
```

View [mkdcos site](https://www.mkdocs.org/#mkdocs) for more configuration options, customization and adding pages.

### Updating App Icons

You can override the apps default icons by placing images into the following files:

* ./docs/img/favicon.ico
* ./docs/assets/icons/logo-36.png
* ./docs/assets/icons/logo-192.png
* ./docs/assets/icons/logo-512.png

### Configuring The Web Manifiest

Configure additonal logos, set the name of the pwa, theme colors orientation etc by editing the manifest.json file located in ./docs/manifest.json refer to [Google Developer Docs](https://developers.google.com/web/fundamentals/web-app-manifest) for configuration options.

```json
{
    "name": "Site Name",
    "short_name": "Site name",
    "start_url": "index.html",
    "display": "fullscreen",
    "scope": ".",
    "orientation":"portrait",
    "icons": [
    //...
}
```
## Live Reload Server
Use mkdocs live reload server to view changes during development. The service worker is not used inorder to see site changes.

```
$ mkdocs serve
```


## Build site
Once mkdocs and workbox is installed simply build the site with the following command.

```bash
$ npm run build
```
The complete PWA should be built and located in ./site/


## External Resouces for Customization

1. [Mkdocs Configuration](https://www.mkdocs.org/user-guide/configuration/)
2. [Mkdoc Materil Customization](https://squidfunk.github.io/mkdocs-material/customization/)
3. [Mkdocs Material Extensions](https://squidfunk.github.io/mkdocs-material/extensions/admonition/)
4. [Workbox Manifest Guide](https://developers.google.com/web/tools/workbox/guides/get-started)