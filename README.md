# MeteorReactBoilerplate

![Meteor version](https://img.shields.io/badge/Meteor%20Version-1.5.2.2-green.svg)
![React version](https://img.shields.io/badge/React%20Version-16.0.0-green.svg)

A simple boilerplate for using React within Meteor. All fundamental packages and dependencies are added in the packages file of .meteor and in the package.json file for npm. You can make your React components reactive with `meteor-react-data`. For further reading about this please visit the [Meteor Guide](https://guide.meteor.com/react.html#using-createContainer) Also a settings-file for storing constants like API-Keys is available. **But keep in mind to not commit your settings.json file into any version control system. For git just add `settings.json` to your _.gitignore_ file.**

React Router is used for routing between components and containers. This is done in a very rudimental way, if you want to read more about routing with React Router visit [their website](https://reacttraining.com/react-router/).


## Dependencies

```
"dependencies": {
    "babel-runtime": "^6.23.0",
    "bcrypt": "^1.0.2",
    "meteor-node-stubs": "^0.2.11",
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-helmet": "^5.2.0",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2"
  }
```

## Meteor packages

```
meteor-base@1.1.0               # Packages every Meteor app needs to have
mobile-experience@1.0.5         # Packages for a great mobile UX
mongo@1.2.2                    # The database Meteor supports right now
reactive-var@1.0.11             # Reactive variable for tracker
jquery@1.11.10                  # Helpful client-side library
tracker@1.1.3                   # Meteor's client-side reactive programming library
static-html                     # Used to get some static html content parsed, especially the meta tags


standard-minifier-css@1.3.5     # CSS minifier run for production mode
standard-minifier-js@2.1.2      # JS minifier run for production mode
es5-shim@4.6.15                 # ECMAScript 5 compatibility for older browsers.
ecmascript@0.8.3                # Enable ECMAScript2015+ syntax in app code

# CSS Preprocessors
fourseven:scss

# All things about users,password and roles
useraccounts:unstyled
accounts-password@1.4.0
alanning:roles

# React
react-meteor-data

# New stuff
dynamic-import@0.1.3

#bundle-visualizer             # Uncomment this and use meteor --production to simulate production minification and see how big your bundle will be.                


```

## Naming conventions
I am using `*/components/*.component.jsx` for specifying pure React components and `*/container/*.container.jsx` for specifying container components. You can either adopt this naming scheme or use your own one.

## Inspired by

This boilerplate was inspired by the tutorials and base template by [Scott Tolinski](https://github.com/stolinski/level-up-meteor-react-base)


## How to use ?

Clone repository and install dependencies
```
git clone https://github.com/alexanderwe/MeteorReactBoilerplate  #Clone repository
cd MeteorReactBoilerplate
meteor yarn install                                         # Install dependencies with yarn
(meteor npm install                                         # If you do not want to use yarn, remove 'yarn.lock')
meteor                                                      # Start meteor
meteor  --settings settings-development.json                # Start meteor with development settings
meteor  --settings settings-production.json                 # Start meteor with production settings
```


## Issues ?

If you have any issues with this boilerplate let me know that in the issues section !
