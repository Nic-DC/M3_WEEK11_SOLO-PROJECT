import { getSongsActionOnLoad } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Song from "./Song";

const HomepageMorning = () => {
  const songsList = useSelector((state) => state.songsResult.defaultSongs);
  console.log(songsList);
  const dispatch = useDispatch();

  const handleLoad = async (e) => {
    e.preventDefault();
    dispatch(getSongsActionOnLoad());
  };

  window.onload = () => {
    handleLoad();
  };
  return (
    <div>
      <h2 className="text-light">Good Morning</h2>
      <div className="row mt-4 row-cols-5" id="goodMorning">
        <div className="col-lg-2">
          {songsList.map((song) => (
            <Song key={song.id} data={song} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomepageMorning;
