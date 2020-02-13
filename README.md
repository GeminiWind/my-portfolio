# My Portfolio (https://haidv.me)

[![Netlify Status](https://api.netlify.com/api/v1/badges/cc1cd3af-e109-4e47-b348-5eef1442ef65/deploy-status)](https://app.netlify.com/sites/eager-ride-7e8483/deploys)
![Node.js CI](https://github.com/GeminiWind/my-portfolio/workflows/Node.js%20CI/badge.svg?branch=master)

## Theme
The origin theme comes from [Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
