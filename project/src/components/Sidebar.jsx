import { Image } from "react-bootstrap";
import logo from "../assets/Spotify-Logo-White.jpeg";
import heart from "../assets/purple-heart.png";
import { BsSearch } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { makeSearchVisibleAction } from "../redux/actions";

import { Link } from "react-router-dom";
import HomeSidebarPlaylist from "./HomeSidebarPlaylist";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Image src={logo} fluid id="logoImage" className="grow mb-4" />

      <div id="home" className="sidebar-align-left grow d-none d-md-block ml-2 mb-2">
        {/* <i class="bi bi-house-door mr-3"></i> */}
        <BiHomeSmile className="mr-3 text-light react-icons-homepage" />
        <span className="sidebar-text text-light">Home</span>
      </div>
      {/* <!-- Search - collapse --> */}
      <a
        className="search-anchor"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div
          id="search"
          className="sidebar-align-left grow ml-2 mb-2"
          onClick={() => {
            dispatch(makeSearchVisibleAction());
          }}
        >
          <BsSearch className="mr-3 text-light react-icons-homepage" />
          <span className="sidebar-text text-light">Search</span>
        </div>
      </a>

      <div id="library" className="sidebar-align-left mb-4 grow d-none d-md-block ml-2 mb-2">
        <BsMusicNoteBeamed className="mr-3 text-light react-icons-homepage" />
        <span class="sidebar-text text-light">Library</span>
      </div>
      <div id="playlist" className="mb-2 sidebar-align-left grow d-none d-md-block ml-2 mb-2">
        <AiOutlinePlusSquare className="mr-3 text-light react-icons-homepage" />
        <span class="sidebar-text text-light">Create Playlist</span>
      </div>
      <Link to={`/favorites`}>
        <div id="likedSongs" className="sidebar-align-left grow d-none d-md-block ml-2 mb-2">
          <img class="img-fluid img-small mr-3" src={heart} alt="white heart on purple background" />
          <span class="sidebar-text text-light">Liked Songs</span>
        </div>
      </Link>

      {/* <!-- DIVIDER --> */}
      <div class="translucidLine d-none d-md-block ml-2 mt-4"></div>

      {/* <!-- SIDEBAR - LIST DIV --> */}
      <HomeSidebarPlaylist />
    </div>
  );
};
export default Sidebar;
