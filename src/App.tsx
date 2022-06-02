import React from 'react';
import Routes from './routes/Routes';
import AppStoreProvider from './context/AppContext';
function App() {
  return(
    <React.Fragment>
      <AppStoreProvider>
        <Routes/>
      </AppStoreProvider>
    </React.Fragment>
  )
}

export default App;
