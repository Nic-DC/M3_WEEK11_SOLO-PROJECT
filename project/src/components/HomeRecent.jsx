import { useSelector } from "react-redux";

import Song from "./Song";

const HomeRecent = () => {
  const songs = useSelector((state) => state.songsResult.searchedSongs);
  console.log(songs);

  return (
    <div>
      <div id="recentlyPlayed-div" class="mt-4">
        <h4 id="recentlyPlayedHeader" className="text-light">
          Albums
        </h4>
        <span id="seeAllAlbum" className="grow text-light">
          SEE ALL
        </span>
      </div>

      <div className="row mt-4 row-cols-8 mx-n1 overflow-grid" id="albums">
        {/* <!-- <div class="overflow-grid" id="albums"></div> --> */}
        {/* <!-- 
    <div class="col px-1">
      <div class="card px-3 py-3 bg-recentlyPlayed grow">
        <img src="/assets/purple-heart.png" class="card-img-top" alt="..." />
        <div class="card-body px-0">
          <h5 class="card-title line-clamp-1">Card titleCard title</h5>
          <p class="card-text line-clamp-2">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>--> */}
        {songs.slice(0, 4).map((song) => (
          <Song key={song.id} data={song} deleteSong={false} />
        ))}
      </div>
    </div>
  );
};
export default HomeRecent;
