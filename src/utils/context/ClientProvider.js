'use client';

import PropTypes from 'prop-types';
import { AuthProvider } from '@/utils/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '@/utils/context/ViewDirector';

function ClientProvider({ children }) {
  return (
    <AuthProvider>
      <ViewDirectorBasedOnUserAuthStatus>{children}</ViewDirectorBasedOnUserAuthStatus>
    </AuthProvider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientProvider;
