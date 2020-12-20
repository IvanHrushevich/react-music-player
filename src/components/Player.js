import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ audioRef, isPlaying, setIsPlaying, songInfo, setSongInfo }) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const dragHandler = (event) => {
    const currentTime = event.target.value;

    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };

  const getTime = (time) => `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(-2)}`;

  return (
    <div className="player">
      <div className="time-control">
        <p className="p">{getTime(songInfo.currentTime)}</p>
        <input type="range" min="0" max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
