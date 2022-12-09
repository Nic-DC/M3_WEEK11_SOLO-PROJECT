import logo from "../assets/spotify.png";
import heart from "../assets/purple-heart.png";
import { BsSearch } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";

const HomeSidebar = () => {
  return (
    <div>
      {/* <div className="container-fluid">
        <div className="row">
          <div class="column12 col-md-3 col-lg-2 padding-top"> */}
      <div id="logo" className="flex-align-center mb-4 grow">
        <img className="img-fluid" src={logo} alt="spotify logo" />
      </div>
      <div id="home" className="sidebar-align-left grow d-none d-md-block ml-0">
        {/* <i class="bi bi-house-door mr-3"></i> */}
        <BiHomeSmile className="mr-3 text-light" />
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
        <div id="search" className="sidebar-align-left grow">
          <BsSearch className="mr-3 text-light" />
          <span className="sidebar-text text-light">Search</span>
        </div>
      </a>

      <div id="library" className="sidebar-align-left mb-4 grow d-none d-md-block ml-0">
        <BsMusicNoteBeamed className="mr-3 text-light" />
        <span class="sidebar-text text-light">Library</span>
      </div>
      <div id="playlist" className="mb-2 sidebar-align-left grow d-none d-md-block ml-0">
        <AiOutlinePlusSquare className="mr-3 text-light" />
        <span class="sidebar-text text-light">Create Playlist</span>
      </div>
      <div id="likedSongs" className="sidebar-align-left grow d-none d-md-block ml-0">
        <img class="img-fluid img-small mr-3" src={heart} alt="white heart on purple background" />
        <span class="sidebar-text text-light">Liked Songs</span>
      </div>

      {/* <!-- DIVIDER --> */}
      <div class="translucidLine d-none d-md-block"></div>

      {/* <!-- SIDEBAR - LIST DIV --> */}
      <ul id="sidebarList" className="sidebar-list d-none d-md-block">
        {/* <!-- <li class="sidebar-items sidebar-text">Library</li>
    <li class="sidebar-items sidebar-text">Library</li>
    <li class="sidebar-items sidebar-text">Library</li>
    <li class="sidebar-items sidebar-text">Library</li> --> */}
      </ul>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default HomeSidebar;
