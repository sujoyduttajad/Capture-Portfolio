import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { Description } from "../styles";

const VideoContainer = styled.div``;
const Video = styled(motion.video)``;

const OurSuccess = () => {
  return (
    <VideoContainer>
      <Description>
        <h2 style={{ textAlign: "center", marginBottom: "5rem" }}>
          Our <span>Work</span> speaks for <span>Us</span>
        </h2>
      </Description>
      <Video
        width="100%"
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        loop
        preload="metadata"
        // onMouseOver={(e) => e.target.play()}
        // onMouseOut={(e) => e.target.pause()}
      >
        <source
          src="https://player.vimeo.com/external/524033439.hd.mp4?s=22f1a7abade536bc83845b40d3181c97b8229d8d&profile_id=175"
          type="video/mp4"
        />
        Sorry, your browser doesn't support embedded videos.
      </Video>
    </VideoContainer>
  );
};

export default OurSuccess;
