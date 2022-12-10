import { Badge, Toast } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFavoriteAction } from "../redux/actions";

const SongFavorite = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <img src={data.artist.picture_small} className="rounded mr-2" alt="" />
        <strong className="mr-auto">
          {data.title}
          <Badge variant="light">{data.artist.name}</Badge>
        </strong>
        <small>{data.duration}'</small>
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
      </Toast.Header>
      {/* <Toast.Body>Hello, world! This is a toast message.</Toast.Body> */}
    </Toast>
  );
};
export default SongFavorite;
