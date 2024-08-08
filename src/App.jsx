import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, Heading, TextField, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import './AuthStyles.css';

Amplify.configure(awsExports);

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    password: {
      order: 2,
    },
    confirm_password: {
      order: 3,
    },
  },
};

const components = {
  SignUp: {
    Header() {
      return (
        <Heading level={3} padding={`1rem`}>
          Create an Account
        </Heading>
      );
    },
    Footer() {
      return (
        <View textAlign="center" padding={`1rem`}>
          <Button type="submit" variation="primary">
            Sign Up
          </Button>
        </View>
      );
    },
  },
};

export default function App() {
  return (
    <View className="App">
      <Authenticator
        formFields={formFields}
        components={components}
        signUpAttributes={['email']}
      >
        {({ signOut }) => (
          <View padding="1rem" backgroundColor="#f0f0f0" borderRadius="8px">
            <Heading level={4}>Welcome! You're signed in.</Heading>
            <Button onClick={signOut} variation="link">
              Sign Out
            </Button>
          </View>
        )}
      </Authenticator>
    </View>
  );
}