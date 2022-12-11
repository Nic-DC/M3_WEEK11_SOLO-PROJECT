import { Jumbotron, Row, Col, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import ArtistComponent from "./ArtistComponent";

import SongFavorite from "./SongFavorite";

const Artist = () => {
  const selectedArtist = useSelector((state) => state.songsResult.selectedArtist);
  console.log("the selected artist is: ", selectedArtist);

  return (
    <Jumbotron>
      <h1>
        <Badge variant="dark">{selectedArtist.artist.name}</Badge>'s Music
      </h1>
      <Row>
        <Col>{<ArtistComponent data={selectedArtist} />}</Col>
      </Row>
    </Jumbotron>
  );
};
export default Artist;
