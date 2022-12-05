import React, { useRef, useState } from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { Description } from "../styles";

const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const Video = styled(motion.video)`
`;

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
  padding: 0.3em 0.3em 0.3em 0.5em;
`;

const OurSuccess = () => {
  const [toggle, setToggle] = useState(false);

  const videoRef = useRef();

  const clickPlayVideo = () => {
    if(!toggle) {
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
      >
        <source
          src="https://player.vimeo.com/external/524033439.hd.mp4?s=22f1a7abade536bc83845b40d3181c97b8229d8d&profile_id=175"
          type="video/mp4"
        />
        Sorry, your browser doesn't support embedded videos.
      </Video>
      <Content>
        <Play onClick={clickPlayVideo}>►</Play>
      </Content>
    </VideoContainer>
  );
};

export default OurSuccess;
