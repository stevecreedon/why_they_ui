# Why They UI

This is a varied & detailed breakdown of the example [react/amplify app](https://aws-amplify.github.io/docs/js/react) used as the basis

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
1. Creates an __S3 bucket__ for configuration: __whytheyui-production-20190927211816-deployment__. Initially has the file __#current-cloud-backend.zip__
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

## 3. Publishing The Web App

    amplify add hosting

```
? Select the environment setup: PROD (S3 with CloudFront using HTTPS)
? hosting bucket name whytheyui-20190927213556-hostingbucket
? index doc for the website index.html
? error doc for the website index.html

You can now publish your app using the following command:
Command: amplify publish
```

This creates some local configurations. Note the cloudfront parameters have been added because I chose the option `PROD (S3 with CloudFront using HTTPS)` above.

```
git st

modified:   amplify/backend/backend-config.json
new file:   amplify/backend/hosting/S3AndCloudFront/parameters.json
new file:   amplify/backend/hosting/S3AndCloudFront/template.json
```

Now we can push these amplify configurations onto AWS:

    amplify publish

```
Current Environment: production

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Hosting  | S3AndCloudFront | Create    | awscloudformation |
? Are you sure you want to continue? Yes
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 21:41:58 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 21:41:57 GMT+0100 (British Summer Time)
UPDATE_IN_PROGRESS whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 21:41:54 GMT+0100 (British Summer Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS whytheyui-production-20190927211816-hostingS3AndCloudFront-1PYV2LC8U31PA AWS::CloudFormation::Stack Fri Sep 27 2019 21:41:58 GMT+0100 (British Summer Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    OriginAccessIdentity AWS::CloudFront::CloudFrontOriginAccessIdentity Fri Sep 27 2019 21:42:03 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS OriginAccessIdentity AWS::CloudFront::CloudFrontOriginAccessIdentity Fri Sep 27 2019 21:42:03 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3Bucket             AWS::S3::Bucket                                 Fri Sep 27 2019 21:42:03 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3Bucket             AWS::S3::Bucket                                 Fri Sep 27 2019 21:42:01 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS OriginAccessIdentity AWS::CloudFront::CloudFrontOriginAccessIdentity Fri Sep 27 2019 21:42:01 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3Bucket AWS::S3::Bucket Fri Sep 27 2019 21:42:24 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CloudFrontDistribution AWS::CloudFront::Distribution Fri Sep 27 2019 21:42:28 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_COMPLETE    PrivateBucketPolicy    AWS::S3::BucketPolicy         Fri Sep 27 2019 21:42:27 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS PrivateBucketPolicy    AWS::S3::BucketPolicy         Fri Sep 27 2019 21:42:27 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS PrivateBucketPolicy    AWS::S3::BucketPolicy         Fri Sep 27 2019 21:42:26 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS CloudFrontDistribution AWS::CloudFront::Distribution Fri Sep 27 2019 21:42:26 GMT+0100 (British Summer Time)
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CloudFrontDistribution AWS::CloudFront::Distribution Fri Sep 27 2019 21:52:48 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE whytheyui-production-20190927211816-hostingS3AndCloudFront-1PYV2LC8U31PA AWS::CloudFormation::Stack Fri Sep 27 2019 21:52:50 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 21:53:50 GMT+0100 (British Summer Time)
CREATE_COMPLETE                     hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 21:53:47 GMT+0100 (British Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 21:53:50 GMT+0100 (British Summer Time)
✔ All resources are updated in the cloud

Hosting endpoint: https://d3fgsvmqcoyxsy.cloudfront.net


> why_they_ui@0.1.0 build /Users/stephencreedon/devel/why_they/why_they_ui
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  38.58 KB  build/static/js/2.7328d626.chunk.js
  776 B     build/static/js/runtime-main.036a161d.js
  613 B     build/static/js/main.876322eb.chunk.js
  417 B     build/static/css/main.b100e6da.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://bit.ly/CRA-deploy

frontend build command exited with code 0
✔ Uploaded files successfully.
Your app is published successfully.
https://d3fgsvmqcoyxsy.cloudfront.net
```

### 3.1 On AWS

1. Create Cloudfront __OriginAccessIdentity__ - a user that can access the s3 bucket
1. Create s3 bucket __whytheyui-20190927213556-hostingbucket-production__ for hosting the remote static files.
1. Create __PrivateBucketPolicy__ an s3 bucket policy that allows the __OriginAccessIdentity__ user created above to get objects from the bucket.
1. Create __Cloudfront Distribution__ with the s3 bucket for hosting created above as the origin.
1. Create the __Cloudformation Stack Item__: __whytheyui-production-20190927211816-hostingS3AndCloudFront-1PYV2LC8U31PA__
1. Updated the root stack (created in `amplify init`) to include the __hostingS3AndCloudFront__ stack above.

We now have a cloudfront hosting endpoint for the application:

    https://d3fgsvmqcoyxsy.cloudfront.net



### 3.2 Locally

Amplify configuration files added and updated.


```
modified:   amplify/backend/backend-config.json
new file:   amplify/backend/hosting/S3AndCloudFront/parameters.json
new file:   amplify/backend/hosting/S3AndCloudFront/template.json
```

### 4 Add Authorisation

Configure amplify to use auth

    amplify add auth

Then we create the resources on AWS

    amplify push
    

```
Current Environment: production

| Category | Resource name     | Operation | Provider plugin   |
| -------- | ----------------- | --------- | ----------------- |
| Auth     | whytheyui49b2e0e6 | Create    | awscloudformation |
| Hosting  | S3AndCloudFront   | No Change | awscloudformation |
? Are you sure you want to continue? Yes
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authwhytheyui49b2e0e6               AWS::CloudFormation::Stack Fri Sep 27 2019 22:52:31 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole      AWS::IAM::Role             Fri Sep 27 2019 22:52:31 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS authwhytheyui49b2e0e6               AWS::CloudFormation::Stack Fri Sep 27 2019 22:52:31 GMT+0100 (British Summer Time)
UPDATE_COMPLETE    hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 22:52:31 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole      AWS::IAM::Role             Fri Sep 27 2019 22:52:31 GMT+0100 (British Summer Time)
UPDATE_IN_PROGRESS hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 22:52:30 GMT+0100 (British Summer Time)
UPDATE_IN_PROGRESS whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 22:52:27 GMT+0100 (British Summer Time) User Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS whytheyui-production-20190927211816-authwhytheyui49b2e0e6-HV1C5OBTXTP0 AWS::CloudFormation::Stack Fri Sep 27 2019 22:52:31 GMT+0100 (British Summer Time) User Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Fri Sep 27 2019 22:52:36 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Fri Sep 27 2019 22:52:35 GMT+0100 (British Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Fri Sep 27 2019 22:52:50 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Fri Sep 27 2019 22:52:55 GMT+0100 (British Summer Time)
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Fri Sep 27 2019 22:52:58 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Fri Sep 27 2019 22:53:00 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Fri Sep 27 2019 22:53:00 GMT+0100 (British Summer Time) Resource creation Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClient AWS::Cognito::UserPoolClient Fri Sep 27 2019 22:53:03 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role               Fri Sep 27 2019 22:53:07 GMT+0100 (British Summer Time)
CREATE_COMPLETE    UserPoolClientWeb  AWS::Cognito::UserPoolClient Fri Sep 27 2019 22:53:05 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UserPoolClientWeb  AWS::Cognito::UserPoolClient Fri Sep 27 2019 22:53:05 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClient     AWS::Cognito::UserPoolClient Fri Sep 27 2019 22:53:04 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UserPoolClient     AWS::Cognito::UserPoolClient Fri Sep 27 2019 22:53:04 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientWeb  AWS::Cognito::UserPoolClient Fri Sep 27 2019 22:53:03 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Fri Sep 27 2019 22:53:08 GMT+0100 (British Summer Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientRole AWS::IAM::Role Fri Sep 27 2019 22:53:26 GMT+0100 (British Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy      Fri Sep 27 2019 22:53:32 GMT+0100 (British Summer Time)
CREATE_COMPLETE    UserPoolClientLambda       AWS::Lambda::Function Fri Sep 27 2019 22:53:29 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UserPoolClientLambda       AWS::Lambda::Function Fri Sep 27 2019 22:53:29 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLambda       AWS::Lambda::Function Fri Sep 27 2019 22:53:29 GMT+0100 (British Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Fri Sep 27 2019 22:53:33 GMT+0100 (British Summer Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Fri Sep 27 2019 22:53:41 GMT+0100 (British Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Fri Sep 27 2019 22:53:45 GMT+0100 (British Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Fri Sep 27 2019 22:53:44 GMT+0100 (British Summer Time)
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs    Custom::LambdaCallout Fri Sep 27 2019 22:53:56 GMT+0100 (British Summer Time)
CREATE_COMPLETE    UserPoolClientLogPolicy AWS::IAM::Policy      Fri Sep 27 2019 22:53:53 GMT+0100 (British Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool         AWS::Cognito::IdentityPool Fri Sep 27 2019 22:54:03 GMT+0100 (British Summer Time)
CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout      Fri Sep 27 2019 22:54:00 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout      Fri Sep 27 2019 22:54:00 GMT+0100 (British Summer Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Fri Sep 27 2019 22:54:07 GMT+0100 (British Summer Time)
CREATE_COMPLETE    IdentityPool        AWS::Cognito::IdentityPool               Fri Sep 27 2019 22:54:05 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS IdentityPool        AWS::Cognito::IdentityPool               Fri Sep 27 2019 22:54:04 GMT+0100 (British Summer Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    whytheyui-production-20190927211816-authwhytheyui49b2e0e6-HV1C5OBTXTP0 AWS::CloudFormation::Stack               Fri Sep 27 2019 22:54:11 GMT+0100 (British Summer Time)
CREATE_COMPLETE    IdentityPoolRoleMap                                                    AWS::Cognito::IdentityPoolRoleAttachment Fri Sep 27 2019 22:54:09 GMT+0100 (British Summer Time)
CREATE_IN_PROGRESS IdentityPoolRoleMap                                                    AWS::Cognito::IdentityPoolRoleAttachment Fri Sep 27 2019 22:54:09 GMT+0100 (British Summer Time) Resource creation Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function      Fri Sep 27 2019 22:54:27 GMT+0100 (British Summer Time)
CREATE_COMPLETE    authwhytheyui49b2e0e6      AWS::CloudFormation::Stack Fri Sep 27 2019 22:54:25 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Fri Sep 27 2019 22:54:28 GMT+0100 (British Summer Time) Resource creation Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Fri Sep 27 2019 22:54:29 GMT+0100 (British Summer Time)
CREATE_COMPLETE    UpdateRolesWithIDPFunction        AWS::Lambda::Function Fri Sep 27 2019 22:54:28 GMT+0100 (British Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Fri Sep 27 2019 22:54:33 GMT+0100 (British Summer Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 22:54:37 GMT+0100 (British Summer Time)
UPDATE_COMPLETE                     hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 22:54:36 GMT+0100 (British Summer Time)
UPDATE_IN_PROGRESS                  hostingS3AndCloudFront              AWS::CloudFormation::Stack Fri Sep 27 2019 22:54:36 GMT+0100 (British Summer Time)
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS whytheyui-production-20190927211816 AWS::CloudFormation::Stack Fri Sep 27 2019 22:54:35 GMT+0100 (British Summer Time)
CREATE_COMPLETE                     UpdateRolesWithIDPFunctionOutputs   Custom::LambdaCallout      Fri Sep 27 2019 22:54:33 GMT+0100 (British Summer Time)
✔ All resources are updated in the cloud

```

Then add the amplify react components

    npm add aws-amplify aws-amplify-react
    
    
```
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ aws-amplify-react@2.4.4
+ aws-amplify@1.1.40
added 44 packages from 90 contributors and audited 905270 packages in 29.619s
found 0 vulnerabilities
```

package files were modified along with node modules which are ignored by git.

```
modified:   package-lock.json
modified:   package.json
```

Now modify `src/App.js` to:


1. include Amplify modules
1. change it to use React HOC (`class App extends React.Component`) rather than function App
1. Wrap the return `App` object in `withAuthenticator(App, true)`. This adds the amplify authentication react html around the render html.

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
   }
}

export default withAuthenticator(App, true);
```

Now push this live

    amplify publish
    
```
Current Environment: production

| Category | Resource name     | Operation | Provider plugin   |
| -------- | ----------------- | --------- | ----------------- |
| Hosting  | S3AndCloudFront   | No Change | awscloudformation |
| Auth     | whytheyui49b2e0e6 | No Change | awscloudformation |

No changes detected

> why_they_ui@0.1.0 build /Users/stephencreedon/devel/why_they/why_they_ui
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  546.88 KB        build/static/js/2.0b0d5854.chunk.js
  3.63 KB          build/static/css/2.e25306ee.chunk.css
  1012 B (+113 B)  build/static/js/main.f8bb0876.chunk.js
  776 B            build/static/js/runtime-main.036a161d.js
  417 B            build/static/css/main.b100e6da.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://bit.ly/CRA-deploy

frontend build command exited with code 0
✔ Uploaded files successfully.
Your app is published successfully.
https://d3fgsvmqcoyxsy.cloudfront.net
```

### On AWS

1. The authenticated role has the Trust Relationship updated so that it trusts cognito when particular conditions are met.
1. The unauthenticated role has the Trust Relationship updated so that it trusts cognito when particular conditions are met.
1. __SNS Role__: whythe49b2e0e6_sns-role-production__ that can publish to SNS (for sending verification emails)
1. __Cognito User Pool__ : __whytheyui49b2e0e6_userpool_49b2e0e6-production__
1. __UserPoolClientWeb User Pool Client__ : __whythe49b2e0e6\_app\_clientWeb__ user pool id authentication
1. __UserPoolClient User Pool Client__ : __whythe49b2e0e6\_app\_client__ user pool id authentication
1. __UserPoolClientRole__ : __whythe49b2e0e6_userpoolclient_lambda_role-production__ allowing access to cognito and logs
1. Create __UserPoolClientLambda__ : __whytheyui-production-20190927-UserPoolClientLambda-TLK7DR8JM86B__ that manages delete, update create of users in cognito.
1. Create __UserPoolClientInputs__ :
1. Create __IdentityPool__ : __whytheyui49b2e0e6\_identitypool\_49b2e0e6\_\_production__
1. Create __Cloud Formation Stack__ : __whytheyui-production-20190927211816-authwhytheyui49b2e0e6-HV1C5OBTXTP0__
1. Create __IdentityPoolRoleMap__
1. Create Cloud Formation Stack__ : 
1. Create __Lamda Function__ : __whytheyui-production-2019-UpdateRolesWithIDPFuncti-MRNZO0UIY3MH__
	
Browse to the end point in "Your app is published successfully" above where this should now work.

### Locally

updates and creates some local configuration files

```
new file:   amplify/backend/auth/whytheyui49b2e0e6/parameters.json
new file:   amplify/backend/auth/whytheyui49b2e0e6/whytheyui49b2e0e6-cloudformation-template.yml
modified:   amplify/backend/backend-config.json
modified:   amplify/team-provider-info.json
```

