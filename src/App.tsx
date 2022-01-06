import { ThemeProvider } from 'styled-components';

import Router from './routes';

import { AuthProvider } from './context/AuthContext';

import { theme } from './styles/theme'
import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider> 
    </ThemeProvider>
  );
}

export default App;
