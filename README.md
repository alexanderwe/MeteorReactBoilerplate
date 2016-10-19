# MeteorReactBoilerplate

A simple boilerplate for using React within Meteor. All fundamental packages and dependencies are added in the packages file of .meteor and in the package.json file for npm.

## Dependencies for npm

```
"meteor-node-stubs": "~0.2.0",
"moment": "^2.14.1",
"react": "^15.2.1",
"react-addons-css-transition-group": "^15.2.1",
"react-dom": "^15.2.1",
"react-mounter": "^1.2.0"
```

## Meteor packages

```
meteor-base             # Packages every Meteor app needs to have
mobile-experience       # Packages for a great mobile UX
mongo                   # The database Meteor supports right now
blaze-html-templates    # Compile .html files into Meteor Blaze views
reactive-var            # Reactive variable for tracker
jquery                  # Helpful client-side library
tracker                 # Meteor's client-side reactive programming library

standard-minifier-css   # CSS minifier run for production mode
standard-minifier-js    # JS minifier run for production mode
es5-shim                # ECMAScript 5 compatibility for older browsers.
ecmascript              # Enable ECMAScript2015+ syntax in app code

autopublish             # Publish all data to the clients (for prototyping)
insecure                # Allow all DB writes from clients (for prototyping)

kadira:flow-router      # Router used for different routings in app
meteortoys:allthings    # Development tool for Meteor and Mongo
ultimatejs:tracker-react# Make React reactive with Meteor

stolinski:stylus-multi  # Additional packages for stylus and PostCSS

# All things about users,password and roles
useraccounts:unstyled
accounts-password
raix:handlebar-helpers
alanning:roles
```

This boilerplate also uses the **blaze-html-templates package**, for eventually using Blaze inside a wrapper component in React.


## Inspired by

This boilerplate was inspired by the tutorials and base template by [Scott Tolinski](https://github.com/stolinski/level-up-meteor-react-base)


## How to use ?

Clone repository and install dependencies
```
git clone https://github.com/gr4h4n/MeteorReactBoilerplate  #Clone repository
cd MeteorReactBoilerplate
meteor npm install                                          #Install dependencies
meteor                                                      #Start meteor

```


## Issues ?

If you have any issues with this boilerplate let me know that in the issues section !
