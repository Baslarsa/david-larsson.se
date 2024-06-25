import { PlayCircleIcon } from "@heroicons/react/16/solid";
import { PauseCircleIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import classNames from "../utils/classNames";

const AudioPlayer = () => {
  const waveSurferRef = useRef<WaveSurfer>();
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize Wavesurfer
  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      container: "#waveform",
      waveColor: "rgba(255, 255, 255, 0.553)",
      progressColor: "rgba(238, 238, 238, 0.498)",
      cursorColor: "white",
      barGap: 2,
      height: 40,
      barWidth: 2,
      cursorWidth: 1,
      backend: "MediaElement", // Ensures the use of HTML5 Audio
    });

    waveSurferRef.current.load("/0_emotions.mp3");
    waveSurferRef.current.on("play", () => setIsPlaying(true));
    waveSurferRef.current.on("pause", () => setIsPlaying(false));
    waveSurferRef.current.on("click", () => setIsPlaying(true));
    waveSurferRef.current.on("ready", () => {
      setPlayerReady(true);
    });

    return () => {
      waveSurferRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      waveSurferRef.current?.play();
    }
    if (!isPlaying) {
      waveSurferRef.current?.pause();
    }
  }, [isPlaying, playerReady]);

  const handlePlayPause = () => {
    if (isPlaying) {
      waveSurferRef.current?.pause();
    } else {
      waveSurferRef.current?.play();
    }
  };

  return (
    <div>
      <div className="w-56 h-56 bg-black relative bg-[url('/images/0_emotions_cover.png')] bg-cover">
        <div
          onClick={handlePlayPause}
          className={classNames(
            "w-full h-full hover:bg-black/50 transition-colors cursor-pointer flex items-center justify-center",
            isPlaying ? "bg-black/50" : "bg-black/0"
          )}
        >
          {isPlaying ? (
            <PauseCircleIcon
              className={classNames(
                "w-20 h-20 transform -translate-y-5 hover:text-white transition-colors",
                isPlaying ? "text-white" : "text-transparent"
              )}
            />
          ) : (
            <PlayCircleIcon
              className={classNames(
                "w-20 h-20 transform -translate-y-5 hover:text-white transition-colors",
                isPlaying ? "text-white" : "text-transparent"
              )}
            />
          )}
        </div>
        <div
          id="waveform"
          className="absolute bottom-0 left-0 right-0 bg-offBlack p-2 cursor-pointer"
        ></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
