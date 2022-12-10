import { getSongsActionOnLoad } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Song from "./Song";

const HomepageMorning = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsActionOnLoad());
  }, []);

  const songs = useSelector((state) => state.songsResult.defaultSongs);
  console.log(songs);

  // const [songs, setSongs] = useState([]);

  // const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

  // useEffect(() => {
  //   getSongs();
  // }, []);

  // const getSongs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("data is: ", data);
  //       setSongs(data.data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <h2 className="text-light">Good Morning</h2>
      <div className="row mt-4 row-cols-5" id="goodMorning">
        {/* <div className="col-lg-2"> */}
        {songs.slice(0, 4).map((song) => (
          <Song key={song.id} data={song} deleteSong={false} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};
export default HomepageMorning;
