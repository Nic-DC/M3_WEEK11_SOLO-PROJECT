import { getSongsActionOnLoad } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { AiTwotoneHeart } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

import { addToFavoritesAction, playSongAction } from "../redux/actions";

import { Toast, Badge, Row, Col } from "react-bootstrap";

const HomepageMorning = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsActionOnLoad());
  }, []);
  const songsList = useSelector((state) => state.favorites.favList);
  console.log({ songsList });
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
      <Row className="mt-5">
        {songs.slice(0, 8).map((data) => (
          <Col key={data.id}>
            <Toast className="mb-4 mr-0 " id="morningToast">
              <Toast.Header closeButton={false} className="p-0 m-0" id="morningToastHeader">
                <img src={data.artist.picture_small} className="rounded mr-2" alt="" />
                <strong className="truncate line-clamp-2 ">{data.title}</strong>
                <Badge
                  className="ml-2"
                  variant={songsList.includes(data) ? "dark" : "light"}
                  onClick={() => {
                    // dispatch({
                    //   type: `ADD_TO_FAVORITES`,
                    //   payload: data,
                    // });
                    dispatch(addToFavoritesAction(data));
                  }}
                >
                  <AiTwotoneHeart id="favorite" />
                </Badge>
                <RxDividerVertical />{" "}
                <BsPlayCircle
                  className="text-light"
                  id="playSongHome"
                  onClick={() => {
                    dispatch(playSongAction(data));
                  }}
                />
              </Toast.Header>
              {/* <Toast.Body>Hello, world! This is a toast message.</Toast.Body> */}
            </Toast>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default HomepageMorning;
