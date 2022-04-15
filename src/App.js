import ThemeProvider from './contexts/ThemeContext';
import AppLayout from './layouts/AppLayout';

function App ()
{
  return (
    <ThemeProvider>
      <AppLayout>

      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
