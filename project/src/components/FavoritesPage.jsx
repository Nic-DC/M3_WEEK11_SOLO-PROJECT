import { Jumbotron, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import SongFavorite from "./SongFavorite";

const FavoritesPage = () => {
  const favoritesList = useSelector((state) => state.favorites.favList);
  console.log("favoritesList is: ", favoritesList);
  return (
    <Jumbotron>
      <h1>Your favorites</h1>
      <Row>
        {favoritesList.map((fav) => (
          <Col key={fav.id} xs={6} md={4}>
            <SongFavorite data={fav} />
          </Col>
        ))}
      </Row>
    </Jumbotron>
  );
};
export default FavoritesPage;
