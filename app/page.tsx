'use client'
import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import Link from 'next/link';
Amplify.configure(config, {
  ssr: true // required when using Amplify with Next.js
});

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <div>
        <Link href="/serverside">go serverside</Link>
      </div>
    </>
  );
}

export default withAuthenticator(App);