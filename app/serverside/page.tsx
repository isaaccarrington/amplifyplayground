import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import { cookies } from 'next/headers';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth/server';

// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function Page() {
    try {
        console.log("Serverside rendered page")
        const currentUser = await runWithAmplifyServerContext({
          nextServerContext: { cookies },
          operation: (contextSpec) => getCurrentUser(contextSpec)
        });
        /*const getAuthSession = await runWithAmplifyServerContext({
          nextServerContext: { cookies },
          operation: (contextSpec) => fetchAuthSession(contextSpec)
        });*/
        return (
            <div>
                <h1>Server-side rendering</h1>
                <p>This page is rendered on the server.</p>
                <p>User id: {String(currentUser.username)}</p>
            </div>
        )
    } catch (error) {
        console.log("Error in serverside rendering")
    }
}