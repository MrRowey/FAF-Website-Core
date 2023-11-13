[![GitHub license](https://img.shields.io/github/license/FAForever/website)](https://github.com/FAForever/website)

## About the FAForever Website

The FAF Website has got to the point where it is too much technical Debt to maintain it.

So My new approach to this is that the main pages of the website move towards being static and using GHPages which would allow for easier updating of links ect and moving parts of the website we have now into Smaller Self-contained models using the webserver we already have as the microservices require a dynamic style and need to be deployed by the server team when ready this way we can have a static site that is not requiring of the FAF servers and then when thier are issued the static site remains but all the modules go offline.

So the new Goal is as follows:

Core - Core is all the static pages that would be a part of the GHPages version of the site (Updated Generated on Merge)
Modules - these are the different parts of the website that need to be used or pulled from the API and have access the the Dynamic context. (Required Server admins to update)

The will contain the following structure:
_Anything that is not Static will have (Module) at the end of them_

[Static Layout](https://github.com/MrRowey/FAF4.0/wiki/Github-Pages-Layout)

This New approach to the website will allow us to cover the 2 purposes of the website that were decided by the association.
1. To Focus on Acquiring and On-boarding new Player into FAForever (Registration of players, Documentation & Support)
2. Promote The Community (Clans, Maps, Mods, Tournaments etc.)


## Updating and Features for the website
This will be updated accordingly on how to update the static site and how to go about creating new functionality for the site.


# Rules going forward
1. Simple and Easy to update the Core site
2. Reduce Technical Debt
3. Document either incode or via wiki page on the repository
4. The module should be self-contained


# Software
## Core
- HTML
- CSS
- JS

## Modules
- React
- Webpack
- webgpu?
- chart.js
- react hook form

I'm sure the models will use more tools as development starts.
