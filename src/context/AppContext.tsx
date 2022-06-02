import React, { createContext, useReducer} from "react";

import reducer from "./reducers";
import initialState from "./initialState";

interface IAppStoreProvider {
  children: React.ReactChild
}

const AppContext = createContext<any>(initialState);
const AppStoreProvider: React.FC<IAppStoreProvider> = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return(
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppStoreProvider;
export { AppContext };