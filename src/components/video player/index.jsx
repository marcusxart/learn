import { useState, useRef, useEffect } from "react";
import screenfull from "screenfull";
import {
  RangeContainer,
  VideoController,
  VideoPlayerContainer,
} from "./index.styled";
import ReactPlayer from "react-player";
import VideoScreenIcon from "../../assets/svg/videoScreenIcon";
import PlayIcon from "../../assets/svg/play";
import PauseIcon from "../../assets/svg/pause";

const VideoPlayer = ({ width, height = "388px", style }) => {
  const [player, setPlayer] = useState({
    playing: false,
    played: 0,
    seeking: false,
  });
  const [hideController, setHideController] = useState(true);
  const [count, setCount] = useState(0);
  const playContainerRef = useRef();
  const playerRef = useRef();
  const { playing, played, seeking } = player;

  const format = (secs) => {
    const sec_num = parseInt(secs, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor(sec_num / 60) % 60;
    const seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .join(":");
  };

  const handlePlayPause = () => {
    setPlayer({ ...player, playing: !player.playing });
  };

  const handleFullScreen = () => {
    screenfull.toggle(playContainerRef.current);
  };

  const handleProgess = (changeState) => {
    if (count > 3) {
      setHideController(true);
      setCount(0);
    }
    if (!hideController) {
      setCount(count + 1);
    }
    if (seeking === false) {
      setPlayer({ ...player, ...changeState });
    }
  };

  const handleSeek = (e) => {
    setPlayer({ ...player, played: parseFloat(e.target?.value / 100) });
  };
  const handleSeekMouseDown = () => {
    setPlayer({ ...player, seeking: true });
  };
  const handleSeekMouseUp = (e) => {
    setPlayer({ ...player, seeking: false });
    playerRef.current?.seekTo(e.target?.value / 100);
  };

  const handleMouseMove = () => {
    setHideController(false);
    setCount(0);
  };
  const currentValue = playerRef?.current?.getCurrentTime();
  const durrationValue = playerRef.current?.getDuration();
  useEffect(() => {
    if (currentValue && durrationValue) {
      if (currentValue === durrationValue) {
        setTimeout(() => {
          setPlayer({ ...player, playing: false });
          setHideController(false);
          setCount(0);
        }, 500);
      }
    }
  }, [currentValue, durrationValue, player]);

  const currentTime = playerRef.current
    ? format(playerRef.current?.getCurrentTime())
    : "00:00:00";

  const duration = playerRef.current
    ? format(playerRef.current?.getDuration())
    : "00:00:00";

  return (
    <VideoPlayerContainer
      ref={playContainerRef}
      style={style}
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
    >
      <ReactPlayer
        width="100%"
        ref={playerRef}
        height="100%"
        url="https://joy1.videvo.net/videvo_files/video/free/video0474/small_watermarked/_import_61ea3dd6ab62a0.19123787_preview.mp4"
        // muted={true}
        playing={playing}
        onProgress={handleProgess}
      />
      <VideoController hide={hideController}>
        <RangeContainer>
          <p>
            {currentTime} / {duration}
          </p>
          <input
            type="range"
            name=""
            id=""
            className="range"
            min={0}
            max={100}
            onChange={handleSeek}
            onMouseDown={handleSeekMouseDown}
            onMouseUp={handleSeekMouseUp}
            value={played * 100}
          />
          <VideoScreenIcon onClick={handleFullScreen} />
        </RangeContainer>
        <div className="play_pause_wrap" onClick={handlePlayPause}>
          {playing ? <PauseIcon fill="#fff" /> : <PlayIcon fill="#fff" />}
        </div>
      </VideoController>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
