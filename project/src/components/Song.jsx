import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { addToFavoritesAction, deleteFavoriteAction } from "../redux/actions";

import { Card } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

const Song = ({ data, deleteSong }) => {
  console.log({ deleteSong });
  const songsList = useSelector((state) => state.favorites.favList);
  console.log({ songsList });

  const dispatch = useDispatch();
  console.log({ dispatch });
  return (
    <Card className="p-2 m-2">
      <Card.Img variant="top" src={data.artist.picture_medium} />
      <Card.Body>
        <Card.Title className="card-title line-clamp-2">{data.title}</Card.Title>
        <Card.Text className="card-text line-clamp-2">
          {data.duration} min |{" "}
          <Badge
            variant="warning"
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
