const HomeTry = () => {
  return (
    <div>
      {/* <!-- SHOWS TO TRY Section --> */}
      <div id="recentlyPlayed-div" className="mt-4">
        <div>
          <h4 id="recentlyPlayedHeader" className="text-light">
            Artist
          </h4>
          <span id="podcastsToTry" className="text-light">
            Artists that you can get hooked on
          </span>
        </div>

        <span id="seeAllArtist" className="grow text-light">
          SEE ALL
        </span>
      </div>

      <div class="row mt-4 row-cols-8 mx-n1 overflow-grid" id="artist">
        {/* <!-- <div class="col px-1">
            <div class="card px-3 py-3 bg-recentlyPlayed grow">
              <img src="/assets/purple-heart.png" class="card-img-top" alt="..." />
              <div class="card-body px-0">
                <h5 class="card-title line-clamp-1">Card titleCard title</h5>
                <p class="card-text line-clamp-2">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div> --> */}
      </div>
    </div>
  );
};
export default HomeTry;
