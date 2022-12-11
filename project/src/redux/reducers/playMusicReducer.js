import { IS_MUSIC_PLAYING } from "../actions";

const initialState = {
  isMusicPlaying: false,
};

const playMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MUSIC_PLAYING:
      return {
        ...state,
        isMusicPlaying: !state.isMusicPlaying,
      };

    default:
      return state;
  }
};
export default playMusicReducer;
