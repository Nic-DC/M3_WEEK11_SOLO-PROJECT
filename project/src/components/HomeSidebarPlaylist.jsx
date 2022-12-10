import { useSelector } from "react-redux";

import { Badge } from "react-bootstrap";

const HomeSidebarPlaylist = () => {
  const playedSongs = useSelector((state) => state.songsResult.playedSongs);
  return (
    <ul id="sidebarList" className="sidebar-list d-none d-md-block">
      {playedSongs.map((song) => (
        <li className="text-light sidebar-items">
          <small className="mr-2"> {song.title}</small>
          <Badge variant="light">{song.artist.name}</Badge>
        </li>
      ))}
    </ul>
  );
};
export default HomeSidebarPlaylist;
