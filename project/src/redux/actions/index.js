export const MAKE_SEARCH_VISIBLE = `MAKE_SEARCH_VISIBLE`;
export const IS_MUSIC_PLAYING = `IS_MUSIC_PLAYING`;
export const PLAY_SONG = `PLAY_SONG`;
export const PLAYED_SONGS = `PLAYED_SONGS`;
export const ADD_TO_FAVORITES = `ADD_TO_FAVORITES`;
export const DELETE_FAVORITE = `DELETE_FAVORITE`;
// export const FETCH_ARTIST = `FETCH_ARTIST`;
export const FETCH_SONGS = `FETCH_SONGS`;
export const FETCH_DEFAULT_SONGS = `FETCH_DEFAULT_SONGS`;
export const FETCH_SONGS_LOADING = `FETCH_SONGS_LOADING`;
export const TRIGGER_FETCH = `TRIGGER_FETCH`;
export const FETCH_ERROR = `FETCH_ERROR`;

export const makeSearchVisibleAction = () => {
  return {
    type: MAKE_SEARCH_VISIBLE,
  };
};

export const isMusicPlayingAction = () => {
  return {
    type: IS_MUSIC_PLAYING,
  };
};

export const playSongAction = (song) => {
  return {
    type: PLAY_SONG,
    payload: song,
  };
};

export const playedSongsAction = (song) => {
  return {
    type: PLAYED_SONGS,
    payload: song,
  };
};

export const addToFavoritesAction = (song) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: song,
  };
};

export const deleteFavoriteAction = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

// export const fetchArtistAction = (artists) => {
//   return {
//     type: FETCH_ARTIST,
//     payload: artists,
//   };
// };

export const fetchSongsAction = (songs) => {
  return {
    type: FETCH_SONGS,
    payload: songs,
  };
};

export const fetchDefaultSongsAction = (songs) => {
  return {
    type: FETCH_DEFAULT_SONGS,
    payload: songs,
  };
};

export const fetchSongsLoadingAction = (bool) => {
  return {
    type: FETCH_SONGS_LOADING,
    payload: bool,
  };
};

export const triggeredFetchAction = () => {
  return {
    type: TRIGGER_FETCH,
  };
};

export const fetchErrorAction = (bool) => {
  return {
    type: FETCH_ERROR,
    payload: bool,
  };
};

// i'll create a random function and an "endpoints" array
// so that when the page loads, the result of the fetch will vary
// [queen, joe cocker, rhcp, julio iglesias, iron maiden, eminem, notorious big, tupac, pedro capo...]
export const getSongsActionOnLoad = () => {
  return async (dispatch, getState) => {
    console.log("Fetching the songs...");
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
    try {
      // const response = await fetch(baseEndpoint + query + "&limit=20");
      const response = await fetch(baseEndpoint + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const fetchedSongs = data.data;
        // dispatch({
        //   type: GET_JOBS,
        //   payload: fetchedJobs,
        // });
        dispatch(fetchErrorAction(false));
        dispatch(fetchDefaultSongsAction(fetchedSongs));

        dispatch(triggeredFetchAction());

        // AFTER we dispatch the GET_JOBS action, we create a
        // setTimeout function that will END showing the spinner 100ms
        // before the books are rendered
        setTimeout(() => {
          dispatch(fetchSongsLoadingAction(false));
        }, 100);
      } else {
        alert("Error fetching results");

        dispatch(triggeredFetchAction());
        dispatch(fetchSongsLoadingAction(false));

        dispatch(fetchErrorAction(true));
      }
    } catch (error) {
      console.log(error);

      dispatch(triggeredFetchAction());
      dispatch(fetchSongsLoadingAction(false));

      dispatch(fetchErrorAction(true));
    }
  };
};

export const getSongsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the songs...");
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const fetchedSongs = data.data;
        // dispatch({
        //   type: GET_JOBS,
        //   payload: fetchedJobs,
        // });
        dispatch(fetchErrorAction(false));
        dispatch(fetchSongsAction(fetchedSongs));

        dispatch(triggeredFetchAction());

        // AFTER we dispatch the GET_JOBS action, we create a
        // setTimeout function that will END showing the spinner 100ms
        // before the books are rendered
        setTimeout(() => {
          dispatch(fetchSongsLoadingAction(false));
        }, 100);
      } else {
        alert("Error fetching results");

        dispatch(triggeredFetchAction());
        dispatch(fetchSongsLoadingAction(false));

        dispatch(fetchErrorAction(true));
      }
    } catch (error) {
      console.log(error);

      dispatch(triggeredFetchAction());
      dispatch(fetchSongsLoadingAction(false));

      dispatch(fetchErrorAction(true));
    }
  };
};
