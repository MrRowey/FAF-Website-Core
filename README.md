[![GitHub license](https://img.shields.io/github/license/FAForever/website)](https://github.com/FAForever/website)

## About the FAForever Website

The FAForever website has accumulated significant technical debt, making it increasingly challenging to maintain. 

To address this, I propose a new approach: transitioning the main pages of the website to a static format using GitHub Pages (GHPages). This shift will facilitate easier updates to links and enable the migration of existing website components into smaller, self-contained modules. These modules will utilize our current web server, as the microservices require a dynamic architecture and need to be deployed by the server team when ready. By adopting a static site model, we can ensure that the main website remains operational even if issues arise with the dynamic modules.

### New Goals

- **Core**: This will encompass all static pages that form part of the GHPages version of the site, which will be updated automatically upon merging.
- **Modules**: These are the various components of the website that require API integration and access to dynamic content. Updates to these modules will require action from server administrators.

#### Structure
- Any non-static components will be designated with "(Module)" at the end of their names.

For more information, please refer to the [Static Layout](https://github.com/MrRowey/FAF4.0/wiki).

### Purpose of the Website
This new approach will help us achieve two primary objectives established by the association:
1. **Player Acquisition and Onboarding**: Focus on registering players, providing documentation, and offering support.
2. **Community Promotion**: Highlight clans, maps, mods, tournaments, and other community-driven initiatives.

## Updates and Features for the Website
This section will be updated with guidelines on how to maintain the static site and create new functionalities.

## Rules Going Forward
1. Ensure the core site is simple and easy to update.
2. Reduce technical debt.
3. Document all changes either in code comments or through a wiki page in the repository.
4. Ensure that each module is self-contained.

## Software Stack
### Core
- HTML
- CSS
- JavaScript

### Modules
- React
- Webpack
- WebGPU (tentative)
- Chart.js
- React Hook Form

As development progresses, the modules may incorporate additional tools and technologies.
