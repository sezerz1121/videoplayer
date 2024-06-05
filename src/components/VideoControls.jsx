import React from 'react';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #1f1f1f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const VideoControls = ({ onNext, onPrevious }) => {
  return (
    <ControlsWrapper>
      <Button onClick={onPrevious}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </ControlsWrapper>
  );
};

export default VideoControls;
