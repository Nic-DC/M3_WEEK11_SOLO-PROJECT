import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { addToFavoritesAction, deleteFavoriteAction, playSongAction, artistSelectedAction } from "../redux/actions";

import { Card } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

const Song = ({ data, deleteSong }) => {
  console.log({ deleteSong });
  const songsList = useSelector((state) => state.favorites.favList);
  console.log({ songsList });

  const selectedArtist = useSelector((state) => state.songsResult.selectedArtist);
  console.log("the selected artist is: ", selectedArtist);

  const dispatch = useDispatch();
  console.log({ dispatch });
  return (
    <Card className="p-0 m-2" id="bigCardsHome">
      <Link to={`/${selectedArtist.artist.name}`}>
        <Card.Img
          variant="top"
          src={data.artist.picture_medium}
          onClick={() => {
            dispatch(artistSelectedAction(data));
          }}
        />
      </Link>

      <Card.Body>
        <Card.Title className="card-title line-clamp-1">{data.title}</Card.Title>
        <Card.Text className="card-text line-clamp-1" id="cardText">
          {data.duration}' <RxDividerVertical />{" "}
          <Badge
            variant={songsList.includes(data) ? "warning" : "dark"}
            onClick={() => {
              // dispatch({
              //   type: `ADD_TO_FAVORITES`,
              //   payload: data,
              // });
              dispatch(addToFavoritesAction(data));
            }}
          >
            <AiTwotoneHeart id="favorite" />
          </Badge>{" "}
          <RxDividerVertical />{" "}
          <BsPlayCircle
            id="playSongHome"
            onClick={() => {
              dispatch(playSongAction(data));
            }}
          />
        </Card.Text>
        {/* <Link to={`/favorites`}> */}

        {/* </Link> */}
        {deleteSong && (
          <RiDeleteBin2Fill
            id="deleteSong"
            className="ml-2"
            onClick={() => {
              // dispatch({
              //   type: `DELETE_FAVORITE`,
              //   payload: data._id,
              // });
              dispatch(deleteFavoriteAction(data.id));
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default Song;
