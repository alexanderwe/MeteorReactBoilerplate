# MeteorReactBoilerplate

A simple boilerplate for using React within Meteor. All fundamental packages and dependencies are added in the packages file of .meteor and in the package.json file for npm. Also React is made reactive with [tracker-react](https://github.com/ultimatejs/tracker-react) included by default. Also a settings file for storing constants like API-Keys is available. But keep in mind to not commit your settings.json file into any version control system. For git just add `settings.json` to your _.gitignore_ file.

## Dependencies for npm

```
""dependencies": {
    "babel-runtime": "^6.23.0",
    "bcrypt": "^1.0.2",
    "meteor-node-stubs": "^0.2.5",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-mounter": "^1.2.0"
  }
```

## Meteor packages

```
meteor-base@1.0.4             # Packages every Meteor app needs to have
mobile-experience@1.0.4       # Packages for a great mobile UX
mongo@1.1.17                   # The database Meteor supports right now
reactive-var@1.0.11            # Reactive variable for tracker
jquery@1.11.10                  # Helpful client-side library
tracker@1.1.3                 # Meteor's client-side reactive programming library

standard-minifier-css@1.3.4   # CSS minifier run for production mode
standard-minifier-js@2.0.0    # JS minifier run for production mode
es5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers.
ecmascript@0.7.3              # Enable ECMAScript2015+ syntax in app code

autopublish@1.0.7             # Publish all data to the clients (for prototyping)
insecure@1.0.7                # Allow all DB writes from clients (for prototyping)

kadira:flow-router      # Router used for different routings in app
meteortoys:allthings    # Development tool for Meteor and Mongo
ultimatejs:tracker-react# Make React reactive with Meteor

# All things about users,password and roles
useraccounts:unstyled
accounts-password@1.3.6
raix:handlebar-helpers
alanning:roles
shell-server@0.2.3
fourseven:scss

```

This boilerplate also uses the **blaze-html-templates package**, for eventually using Blaze inside a wrapper component in React.


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
