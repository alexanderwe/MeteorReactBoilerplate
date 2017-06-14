# MeteorReactBoilerplate

![Meteor version](https://img.shields.io/badge/Meteor%20Version-1.5-green.svg)
![React version](https://img.shields.io/badge/React%20Version-1.5.6-green.svg)

A simple boilerplate for using React within Meteor. All fundamental packages and dependencies are added in the packages file of .meteor and in the package.json file for npm. You can make your React components reactive with `meteor-react-data`. For further reading about this please visit the [Meteor Guide](https://guide.meteor.com/react.html#using-createContainer) Also a settings-file for storing constants like API-Keys is available. But keep in mind to not commit your settings.json file into any version control system. For git just add `settings.json` to your _.gitignore_ file.

React Router is used for routing between components and containers. This is done in a very rudimental way, if you want to read more about routing with React Router visit [their website](https://reacttraining.com/react-router/).


## Dependencies for npm

```
""dependencies": {
    "babel-runtime": "^6.23.0",
    "bcrypt": "^1.0.2",
    "meteor-node-stubs": "^0.2.11",
    "react": "^15.6.0",
    "react-dom": "^15.6.0",
    "react-router": "^4.1.1",
    "react-router-dom": "^4.1.1"
  }
```

## Meteor packages

```
meteor-base@1.1.0               # Packages every Meteor app needs to have
mobile-experience@1.0.4         # Packages for a great mobile UX
mongo@1.1.18                    # The database Meteor supports right now
reactive-var@1.0.11             # Reactive variable for tracker
jquery@1.11.10                  # Helpful client-side library
tracker@1.1.3                   # Meteor's client-side reactive programming library
static-html                     # Used to get some static html content parsed, especially the meta tags


standard-minifier-css@1.3.4     # CSS minifier run for production mode
standard-minifier-js@2.1.0      # JS minifier run for production mode
es5-shim@4.6.15                 # ECMAScript 5 compatibility for older browsers.
ecmascript@0.8.0                # Enable ECMAScript2015+ syntax in app code

meteortoys:allthings            # Development tool for Meteor and Mongo

# CSS Preprocessors
fourseven:scss

# All things about users,password and roles
useraccounts:unstyled
accounts-password@1.3.6
alanning:roles

# React
react-meteor-data

# New stuff
dynamic-import

#bundle-visualizer             # Uncomment this and use meteor --production to simulate production minification and see how big your bundle will be.                

```

## Naming conventions
I am using `*/components/*.component.jsx` for specifying pure React components and `*/container/*.container.jsx` for specifying container components. You can either adop this naming scheme or use your own one.

## Inspired by

This boilerplate was inspired by the tutorials and base template by [Scott Tolinski](https://github.com/stolinski/level-up-meteor-react-base)


## How to use ?

Clone repository and install dependencies
```
git clone https://github.com/alexanderwe/MeteorReactBoilerplate  #Clone repository
cd MeteorReactBoilerplate
meteor npm install                                          #Install dependencies
meteor                                                      #Start meteor
meteor  --settings settings.json                            #Start meteor with settings
```


## Issues ?

If you have any issues with this boilerplate let me know that in the issues section !
