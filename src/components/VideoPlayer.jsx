import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import VideoControls from './VideoControls';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: #fff;
  height: 100vh;
  justify-content: center;
  padding: 20px;
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px;
  height: auto;
`;

const VideoPlayer = () => {
  const videoUrls = [
    import.meta.env.VITE_VIDEO_1,
    import.meta.env.VITE_VIDEO_2,
    import.meta.env.VITE_VIDEO_3,
    import.meta.env.VITE_VIDEO_4,
    import.meta.env.VITE_VIDEO_5,
    import.meta.env.VITE_VIDEO_6,
    import.meta.env.VITE_VIDEO_7,
    import.meta.env.VITE_VIDEO_8,
    import.meta.env.VITE_VIDEO_9,
    import.meta.env.VITE_VIDEO_10,
    import.meta.env.VITE_VIDEO_11,
    import.meta.env.VITE_VIDEO_12,
    import.meta.env.VITE_VIDEO_13,
    import.meta.env.VITE_VIDEO_14,
  ];

  const titles = [
    'Encounter',
    'Raising money',
    'Aquire',
    'Graduation',
    'Crystal',
    'Trials',
    'Magic',
    'New home',
    'Bath',
    'Melancholy',
    'Order',
    'Humans',
    'Special',
    'sophiee'
    
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    setTitle(titles[currentVideoIndex]);
  }, [currentVideoIndex]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault();
        handleDoubleClick('forward');
      }
      lastTap = currentTime;
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('touchstart', handleTouchStart);

    return () => {
      videoElement.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  let lastTap = 0;

  const handleDoubleClick = (direction) => {
    if (direction === 'forward') {
      videoRef.current.currentTime += 10;
    } else {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleSwipe = (e) => {
    const direction = e.deltaX > 0 ? 'forward' : 'backward';
    if (direction === 'forward') {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  return (
    <PlayerWrapper>
      <h6>ep{currentVideoIndex + 1} {title}</h6>
      <Video
        ref={videoRef}
        src={videoUrls[currentVideoIndex]}
        controls
        onDoubleClick={() => handleDoubleClick('forward')}
        onContextMenu={(e) => {
          e.preventDefault();
          handleDoubleClick('backward');
        }}
        onWheel={handleSwipe}
      />
      <VideoControls onNext={handleNext} onPrevious={handlePrevious} />
    </PlayerWrapper>
  );
};

export default VideoPlayer;



