import React, { useState, useRef } from 'react'
import { saveAs } from 'file-saver';
import VideoRecorder from 'react-video-recorder';
import { NavLink } from 'react-router-dom';

import getData from './getter';

export default function Exercise(props) {
  const [permission, setPermission] = useState(false);
  const video = useRef();
  const [question, setQuestion] = useState(getData('question'));
  const [intro, setIntro] = useState(getData('intro'));
  const [outro, setOutro] = useState(getData('outro'));

  const download = () => {
    saveAs(video.current, 'for-my-bestie.mp4');
  };

  return (
    <div className="exercise-wrapper">
      <NavLink to="/" className="back-home">
        <img src="./back.png" alt="Go back home"/>
      </NavLink>
      <div className="exercise-overlay py-5">
        <div className="row max-width-custom mx-auto text-center">
          <div className="col-12 mx-auto">
            <p className="mb-0">Record a video. Start with the intro, answer the question, and end with the outro.</p>
            <p className="mt-0 mb-4">P.S. A question with 'them' means your friend ;-)</p>
          </div>
          <div className="col-12 shuffle-group">
            <h5 className="subtitle mb-4">Intro: {intro}</h5>
          </div>
          <div className="col-12 shuffle-group">
            <h5 className="subtitle mb-4">Question: {question}</h5>
          </div>
          <div className="col-12 shuffle-group mb-2">
            <h5 className="subtitle mb-4">Outro: {outro}</h5>
          </div>
          <div className="col-12 mt-4">
            <VideoRecorder
              onRecordingComplete={videoBlob => {
                video.current = videoBlob;
              }}
              replayVideoAutoplayAndLoopOff
              showReplayControls
              isFlipped
              onTurnOnCamera={() => setPermission(true)}
              isOnInitially={permission}
            />
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-danger" onClick={() => window.location.reload()}>New Prompts</button>
              <button type="button" class="btn btn-success" onClick={download}>Download Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}