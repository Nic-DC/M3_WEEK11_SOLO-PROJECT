import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillTrash2Fill } from "react-icons/bs";

import { Form } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { useState } from "react";

import { getSongsAction } from "../redux/actions";

const HomeProfile = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSongsAction(query));
  };

  return (
    <div id="profile-div" class="mb-4">
      {/* <!-- <div class="arrow-div d-none d-md-block"> --> */}
      <div className="d-flex">
        <div className="left-arrow round mr-2">
          <i className="bi bi-chevron-left"></i>
          <IoIosArrowBack />
        </div>
        <div className="right-arrow round">
          <i className="bi bi-chevron-right"></i>
          <IoIosArrowForward />
        </div>
      </div>

      {/* <!-- SEARCH BAR--> */}
      <div className="input-group customizeInput" id="collapseExample">
        {/* <input
          type="text"
          className="form-control"
          placeholder="search album / artist / band"
          aria-label="search"
          aria-describedby="searchInput"
          id="inputSearch"
        /> */}
        <Form onSubmit={handleSubmit}>
          <Form.Control type="search" placeholder="type and press Enter" value={query} onChange={handleQuery} />
        </Form>

        <div className="input-group-prepend">
          <button type="button" class="btn btn-dark grow" id="resetInput">
            <BsFillTrash2Fill />
          </button>
        </div>
      </div>

      <div className="btn-group" id="profile">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle transparent"
          data-toggle="dropdown"
          data-display="static"
          aria-expanded="false"
        >
          {/* <i className="bi bi-person-circle mr-2"></i> */}
          <BsPersonCircle className="mr-2" />
          <span className="truncate">SpotifyProfile and asdf</span>
        </button>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-right px-3 dropdown-bg">
          <a href="./profile.html" target="”_blank”" className="color-items grow styled-items" type="button">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomeProfile;
