import { getSongsActionOnLoad } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Song from "./Song";

const HomepageMorning = () => {
  // const songsList = useSelector((state) => state.songsResult.defaultSongs);
  // console.log(songsList);
  // const dispatch = useDispatch();

  // const handleLoad = async (e) => {
  //   e.preventDefault();
  //   dispatch(getSongsActionOnLoad());
  // };

  // window.onload = () => {
  //   handleLoad();
  // };
  const [songs, setSongs] = useState([]);

  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();
        console.log("data is: ", data);
        setSongs(data.data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-light">Good Morning</h2>
      <div className="row mt-4 row-cols-5" id="goodMorning">
        {/* <div className="col-lg-2"> */}
        {songs.map((song) => (
          <Song key={song.id} data={song} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};
export default HomepageMorning;
