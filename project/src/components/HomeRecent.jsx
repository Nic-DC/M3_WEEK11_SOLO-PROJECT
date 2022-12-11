import { useSelector } from "react-redux";

import Song from "./Song";

const HomeRecent = () => {
  const songs = useSelector((state) => state.songsResult.searchedSongs);
  console.log(songs);

  return (
    <div>
      <div id="recentlyPlayed-div" className="mt-4">
        <div>
          <h4 id="recentlyPlayedHeader" className="text-light">
            Albums
          </h4>
        </div>

        <span id="seeAllArtist" className="grow text-light">
          SEE ALL
        </span>
      </div>

      <div class="row mt-4 row-cols-8 mx-n1 overflow-grid" id="artist">
        {songs.slice(0, 5).map((song) => (
          <Song key={song.id} data={song} deleteSong={false} />
        ))}
      </div>
    </div>
  );
};
export default HomeRecent;
