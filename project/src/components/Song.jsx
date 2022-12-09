import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { addToFavoritesAction, deleteFavoriteAction } from "../redux/actions";

import { Card } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

const Song = ({ data, deleteJob }) => {
  console.log({ deleteJob });
  const jobsList = useSelector((state) => state.favorites.favList);
  console.log({ jobsList });

  const dispatch = useDispatch();
  console.log({ dispatch });
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.duration} min</Card.Text>
            <Link to={`/favorites`}>
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
            </Link>
            {deleteJob && (
              <RiDeleteBin2Fill
                id="deleteJob"
                className="ml-2"
                onClick={() => {
                  // dispatch({
                  //   type: `DELETE_FAVORITE`,
                  //   payload: data._id,
                  // });
                  dispatch(deleteFavoriteAction(data._id));
                }}
              />
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Song;
