import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_PREV_PAGE_SCROLL } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case SET_PREV_PAGE_SCROLL:
      const currPageScroll = action.payload.currPageScroll;
      const isPageScrolled = currPageScroll === 0 ? false : true;
      const isNavbarHide = state.prevPageScroll > currPageScroll ? false : true;

      return {
        ...state,
        isNavbarHide,
        isPageScrolled,
        prevPageScroll: currPageScroll,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
