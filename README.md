# Why They UI

## 1. Create the React App

    npx create-react-app why_they_ui
    
```
npx: installed 91 in 7.73s

Creating a new React app in /Users/stephencreedon/devel/why_they/why_they_ui.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> fsevents@1.2.9 install /Users/stephencreedon/devel/why_they/why_they_ui/node_modules/chokidar/node_modules/fsevents
> node install

[fsevents] Success: "/Users/stephencreedon/devel/why_they/why_they_ui/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v72-darwin-x64/fse.node" is installed via remote

> fsevents@1.2.9 install /Users/stephencreedon/devel/why_they/why_they_ui/node_modules/jest-haste-map/node_modules/fsevents
> node install

[fsevents] Success: "/Users/stephencreedon/devel/why_they/why_they_ui/node_modules/jest-haste-map/node_modules/fsevents/lib/binding/Release/node-v72-darwin-x64/fse.node" is installed via remote

> core-js@2.6.9 postinstall /Users/stephencreedon/devel/why_they/why_they_ui/node_modules/babel-runtime/node_modules/core-js
> node scripts/postinstall || echo "ignore"


> core-js@3.2.1 postinstall /Users/stephencreedon/devel/why_they/why_they_ui/node_modules/core-js
> node scripts/postinstall || echo "ignore"

+ react@16.9.0
+ react-scripts@3.1.2
+ react-dom@16.9.0
added 1577 packages from 706 contributors and audited 904866 packages in 79.645s
found 0 vulnerabilities


Initialized a git repository.

Success! Created why_they_ui at /Users/stephencreedon/devel/why_they/why_they_ui
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd why_they_ui
  npm start

Happy hacking!
```

This gives us:

```
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    node_modules
    ├──
    ├──
    ├──
 #  too many node modules to list

```

This installs a fresh react app

## 2. Add AWS Amplify

In the root pf the project folder created by react

    amplify init

Asks some project questions including AWS profiles and javascript frameworks. generally defaults are accepted.

```    
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project why_they_ui
? Enter a name for the environment production
? Choose your default editor: Vim (via Terminal, Mac OS only)
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use why_they
⠋ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket                    AWS::S3::Bucket            Fri Sep 27 2019 21:18:27 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UnauthRole                          AWS::IAM::Role             Fri Sep 27 2019 21:18:26 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                            AWS::IAM::Role             Fri Sep 27 2019 21:18:26 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS DeploymentBucket                    AWS::S3::Bucket            Fri Sep 27 2019 21:18:26 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS AuthRole                            AWS::IAM::Role             Fri Sep 27 2019 21:18:26 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UnauthRole                          AWS::IAM::Role             Fri Sep 27 2019 21:18:26 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 21:18:23 GMT+0100 (British Summer Time) User Initiated
⠇ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Fri Sep 27 2019 21:18:47 GMT+0100 (British Summer Time)
CREATE_COMPLETE UnauthRole       AWS::IAM::Role  Fri Sep 27 2019 21:18:44 GMT+0100 (British Summer Time)
CREATE_COMPLETE AuthRole         AWS::IAM::Role  Fri Sep 27 2019 21:18:44 GMT+0100 (British Summer Time)
⠧ Initializing project in the cloud...

CREATE_COMPLETE whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 21:18:49 GMT+0100 (British Summer Time)
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

### 2.1 Creates on AWS
1. Creates an __S3 bucket__ for deployment of react code: __whytheyui-production-20190927211816-deployment__
1. Creates __IAM role__ for when the user is not authorised: __whytheyui-production-20190927211816-unauthRole__
1. Creates __IAM role__ for when the user is authorised: __whytheyui-production-20190927211816-authRole__
1. Creates __AWS Cloud Formation ROOT STACK__: __whytheyui-production-20190927211816__. Note: a stack can hold multiple cloud formations as more compoenents are added to this amplify app.

### 2.1 Creates in the code

amplify project configuration files and a gitignore:

```
modified:   .gitignore
new file:   amplify/.config/project-config.json
new file:   amplify/backend/backend-config.json
new file:   amplify/team-provider-info.json
```


