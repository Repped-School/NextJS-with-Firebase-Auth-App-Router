// ClientProvider.js

'use client';

 // This directive ensures that this component runs on the client side, allowing it to use React hooks like useState and useEffect.

// Purpose of ClientProvider:
// The ClientProvider component is used to encapsulate all client-side context providers and components that rely on client-side React hooks.
// By wrapping the application with ClientProvider, we ensure that components like AuthProvider and ViewDirectorBasedOnUserAuthStatus can properly manage client-side state and authentication logic, which cannot be executed on the server side.

// Why We Need ClientProvider:
// In Next.js with the App Router, components are treated as server components by default unless marked with 'use client'.
// This means they are rendered on the server, and client-side hooks like useState, useEffect, and useContext are not available unless specifically allowed.
// ClientProvider wraps the app’s children inside client-side context providers such as AuthProvider, allowing these hooks to function correctly
// within the application without requiring the 'use client' directive in multiple places.
// This approach keeps the application optimized by keeping server-side and client-side concerns separate, improving performance
// and ensuring that client-side logic is executed only where necessary.

import PropTypes from 'prop-types';
import { AuthProvider } from '@/utils/context/authContext'; // AuthProvider handles authentication state and must run on the client.
import ViewDirectorBasedOnUserAuthStatus from '@/utils/context/ViewDirector'; // ViewDirector manages what the user sees based on their authentication status.

function ClientProvider({ children }) {
  return (
    <AuthProvider>
      {/* ViewDirectorBasedOnUserAuthStatus determines the view based on the user's authentication state */}
      <ViewDirectorBasedOnUserAuthStatus>{children}</ViewDirectorBasedOnUserAuthStatus>
    </AuthProvider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientProvider;
