import React, { useRef, useState } from "react";
import styled from "styled-components";
// Animations
import { Description } from "../styles";
import PlayButton from "../img/play-button.svg";
import PauseButton from "../img/video-pause.svg";

const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const Video = styled.video``;

const Content = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -10%);
  top: 50%;
  left: 50%;
  color: #fff;
  width: 100%;
  text-align: center;
  z-index: 999;
  cursor: pointer;
`;
const Play = styled.div`
  font-size: 5em;
  cursor: pointer;
  border: none;
  outline: none;
  user-select: none;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  background-color: rgba(33, 37, 41, 0.5);
  padding: 0.5em 0.5em 0.2em 0.5em;
  img {
    width: 80px;
    height: 80px;
  }
`;

const OurSuccess = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  const videoRef = useRef();

  const clickPlayVideo = () => {
    if (!toggle) {
      videoRef.current.play();
      setToggle(!toggle);
    } else {
      videoRef.current.pause();
      setToggle(!toggle);
    }
  };

  return (
    <VideoContainer>
      <Description>
        <h2 style={{ textAlign: "center", marginBottom: "5rem" }}>
          Our <span>Work</span> speaks for <span>Us</span>
        </h2>
      </Description>
      <Video
        ref={videoRef}
        width="100%"
        autoPlay={false}
        disablePictureInPicture
        disableRemotePlayback
        loop
        preload="metadata"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
        onMouse
      >
        <source
          src="https://player.vimeo.com/external/524033439.hd.mp4?s=22f1a7abade536bc83845b40d3181c97b8229d8d&profile_id=175"
          type="video/mp4"
        />
        Sorry, your browser doesn't support embedded videos.
      </Video>
      {/* {visible && ( */}
        <Content>
          {!toggle ? (
            <Play onClick={clickPlayVideo}>
              <img src={PlayButton} alt="Play button" />
            </Play>
          ) : (
            <Play onClick={clickPlayVideo}>
              <img src={PauseButton} alt="Pause button" />
            </Play>
          )}
        </Content>
      {/* )} */}
    </VideoContainer>
  );
};

export default OurSuccess;
