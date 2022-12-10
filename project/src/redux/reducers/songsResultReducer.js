import {
  FETCH_SONGS,
  FETCH_DEFAULT_SONGS,
  FETCH_SONGS_LOADING,
  TRIGGER_FETCH,
  FETCH_ERROR,
  PLAY_SONG,
  PLAYED_SONGS,
} from "../actions";

const initialState = {
  songToPlay: null,
  searchedSongs: [],
  isLoading: true,
  triggeredFetch: false, // used as a suplimentary condition to show the Spinner
  isError: false,
  defaultSongs: [],
  playedSongs: [],
};

const songsResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        songToPlay: action.payload,
      };

    case PLAYED_SONGS:
      return {
        ...state,
        playedSongs: [...state.playedSongs, action.payload],
      };

    case FETCH_SONGS:
      return {
        ...state,
        searchedSongs: [...action.payload],
      };

    case FETCH_DEFAULT_SONGS:
      return {
        ...state,
        defaultSongs: [...action.payload],
      };

    case FETCH_SONGS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        // we could write it like
        // isLoading: !state.isLoading
        // in this case, we would NOT need a payload
      };

    case TRIGGER_FETCH:
      return {
        ...state,
        triggeredFetch: !state.triggeredFetch,
      };

    case FETCH_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default songsResultReducer;
