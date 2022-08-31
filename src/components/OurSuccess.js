import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";


const VideoContainer = styled.div``;
const Video = styled(motion.video)``;

const OurSuccess = () => {
  return (
    <VideoContainer>
      <Video controls width="100%" >
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
