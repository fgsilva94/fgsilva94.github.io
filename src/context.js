import React, { useCallback, useContext, useReducer } from "react";
import reducer from "./reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_PREV_PAGE_SCROLL } from "./actions";

const initialState = {
  isSidebarOpen: false,
  isPageScrolled: false,
  isNavbarHide: false,
  prevPageScroll: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const setPrevPageScroll = useCallback((currPageScroll) => {
    dispatch({ type: SET_PREV_PAGE_SCROLL, payload: { currPageScroll } });
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, openSidebar, closeSidebar, setPrevPageScroll }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
