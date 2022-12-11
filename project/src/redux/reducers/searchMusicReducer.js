import { MAKE_SEARCH_VISIBLE } from "../actions";

const initialState = {
  isSearchBarVisible: false,
};

const searchMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_SEARCH_VISIBLE:
      return {
        ...state,
        isSearchBarVisible: !state.isSearchBarVisible,
      };

    default:
      return state;
  }
};

export default searchMusicReducer;
