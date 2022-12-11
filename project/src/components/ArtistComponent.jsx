import { Badge, Toast } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFavoriteAction } from "../redux/actions";

const ArtistComponent = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Toast className="mb-4">
      <Toast.Header closeButton={false}>
        <img src={data.artist.picture_small} className="rounded mr-2" alt="" />
        <strong className="mr-auto">
          {data.title}
          <Badge variant="light" className="ml-auto">
            id:#{data.artist.id}
          </Badge>
        </strong>
      </Toast.Header>
      {/* <Toast.Body>Hello, world! This is a toast message.</Toast.Body> */}
    </Toast>
  );
};
export default ArtistComponent;
