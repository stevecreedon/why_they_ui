import React from 'react';
import logo from './logo.svg';
import './App.css';

import awsconfig from './aws-exports';

import Amplify, { Analytics, Storage } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';

Amplify.configure(awsconfig);

/*
 * This is nothing to do with AWS permissions !!!
 * if the level was 'public' then all files would be stored on a /public subfolder on s3.
 * private stores files in private/eu-west-1:1b168ac7-de16-4924-890b-f8196ccad9e3
 * where the eu-west-1:1b168ac7-de16-4924-890b-f8196ccad9e3 is the federated cognito identity of the user.
 *
 * NOTE: the s3Album element below also lists level="private" which will be where the album looks to download files.
 *
 */
Storage.configure({ level: 'private' });

class App extends React.Component {

  uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  // amplify analytics
  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }
  
  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <S3Album level="private" path='' />
      </div>
    )
   }
}

export default withAuthenticator(App, true);
