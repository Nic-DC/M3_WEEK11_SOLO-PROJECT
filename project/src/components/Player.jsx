import { AiOutlineHeart } from "react-icons/ai";
import { BsPip } from "react-icons/bs";

import { BsShuffle } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { BiVolumeFull } from "react-icons/bi";

import { playedSongsAction } from "../redux/actions";

import { useSelector, useDispatch } from "react-redux";

const Player = () => {
  const songToPlay = useSelector((state) => state.songsResult.songToPlay);
  const dispatch = useDispatch();

  return (
    <div id="fixedContainer" class="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-lg-3 order-sm-2 order-lg-0">
          <div id="fixed-left">
            {songToPlay ? (
              <img className="img-fluid mr-2 grow" src={songToPlay.artist.picture_small} alt="" id="fixedImage" />
            ) : (
              <img className="img-fluid mr-2 grow" src="/assets/purple-heart.png" alt="" id="fixedImage" />
            )}

            <div className="title-left mr-4">
              {songToPlay ? (
                <>
                  <p className="bold" id="fixedTitle">
                    {songToPlay.artist.name}
                  </p>
                  <p className="faded" id="fixedBand">
                    {songToPlay.title}
                  </p>
                </>
              ) : (
                <>
                  <p className="bold" id="fixedTitle">
                    Choose an artist or album
                  </p>
                  <p className="faded" id="fixedBand">
                    Breathe the music!
                  </p>
                </>
              )}
            </div>
            <div className="icons-left">
              <AiOutlineHeart
                className="mr-2 grow"
                onClick={() => {
                  dispatch(playedSongsAction(songToPlay));
                }}
              />
              <BsPip className="grow" />
            </div>
          </div>
        </div>
        <div className="col12 col-lg-6 mb-sm-4 order-sm-1 order-lg-1">
          <div id="fixed-middle">
            <div id="middle-top">
              <div className="shuffle">
                <BsShuffle className="faded mr-4" />
              </div>
              <div className="skip-start">
                <BsFillSkipStartFill className="faded mr-4" />
              </div>
              {songToPlay ? (
                <div
                  className="play"
                  onClick={() => {
                    let song = new Audio(songToPlay.preview);
                    song.play();
                  }}
                >
                  <BsFillPlayFill className="faded mr-4 round-white text-dark" />
                </div>
              ) : (
                <div className="play">
                  <BsFillPlayFill className="faded mr-4 round-white text-dark" />
                </div>
              )}

              <div className="skip-end">
                <BsFillSkipEndFill className="faded " />
              </div>
              <div className="repeat">
                <i className="bi bi-repeat faded mr-4"></i>
                <FiRepeat className="faded mr-4" />
              </div>
            </div>
            <div id="middle-bottom">
              <div className="startTime mr-2 faded">0:12</div>
              <div id="totalAndProgress">
                <div className="progress"></div>
                <div className="total"></div>
              </div>

              <div className="endTime ml-2 faded">3:34</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 align-fixed-right order-sm-2 order-lg-2">
          <div id="fixed-right">
            <div className="icons-right">
              <RiPlayList2Fill className="mr-2" />

              <MdDevices className="mr-2" />

              <BiVolumeFull className="mr-2" />
            </div>
            <div class="volume"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
