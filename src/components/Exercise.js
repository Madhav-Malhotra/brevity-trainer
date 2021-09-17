import React, { useState, useRef } from 'react'
import { saveAs } from 'file-saver';
import VideoRecorder from 'react-video-recorder';
import { NavLink } from 'react-router-dom';

export default function Exercise(props) {
  const [turn, setTurn] = useState(0);
  const [permission, setPermission] = useState(false);
  const video = useRef();
  const num = Math.floor(Math.random() * randomPrompts.length);
  const [prompt, setPrompt] = useState(randomPrompts[num]);

  const download = () => {
    saveAs(video.current, 'brevity-recording.mp4');
  };

  const nextRound = () => {
    let nextNum = turn + 1;
    if (nextNum === round.length) nextNum = 0;
    setTurn(nextNum);
  };

  return (
    <div className="exercise-wrapper">
      <NavLink to="/" className="back-home">
        <img src="./back.png" alt="Go back home"/>
      </NavLink>
      <div className="exercise-overlay py-5">
        <div className="row max-width-custom mx-auto">
          <div className="col-12 text-center mx-auto">
            <p>{round[turn]}</p>
            <h5 className="subtitle mb-4">Your prompt: {prompt}</h5>
          </div>
          <div className="col-12">
            <VideoRecorder
              onRecordingComplete={videoBlob => {
                video.current = videoBlob;
              }}
              replayVideoAutoplayAndLoopOff
              showReplayControls
              onStopReplaying={nextRound}
              isFlipped
              onTurnOnCamera={() => setPermission(true)}
              isOnInitially={permission}
            />
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-danger" onClick={() => window.location.reload()}>Switch Prompt</button>
              <button type="button" class="btn btn-success" onClick={download}>Download Video</button>
            </div>
            </div>
          <div className="col-12 my-4"><hr className="divider" /></div>
          <div className="col-12 text-center mx-auto">
            <textarea className="notes" placeholder="Add notes here..."></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}


const randomPrompts = [
  "Describe a surprising mistake you made recently.",
  "Describe a guilt you still carry on.",
  "Describe one of your happiest childhood memories.",
  "What interview question do you dread being asked? Why?",
  "You can put anything on a billboard. What do you put? Why?",
  "Describe the last time a tiny thing irritated you.",
  "Describe a problem in the world that makes you feel angry.",
  "Explain one of your regretful past decisions?",
  "Explain a misunderstanding you had with a friend.",
  "Describe a strong memory from middle/high school",
  "What advice would you give to yourself 5 years ago? Why?",
  "Describe someone who always makes you feel good. How do they do it?",
  "What's something you've been avoiding? Why?",
  "Explain to a toddler how superstores work.",
  "Explain to a toddler how planets work.",
  "Explain to a toddler how cars work.",
  "Describe a time you struggled to speak up in a group.",
  "Explain to a toddler how wind works."
];

const round = [
  "Take as long as you want.",
  "60 seconds max",
  "30 seconds max"
];