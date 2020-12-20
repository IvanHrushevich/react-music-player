import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { playAudio } from '../util';

const Player = ({
  audioRef,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {
  useEffect(() => {
    const updatedSongs = songs.map((songFromList) =>
      songFromList.id === currentSong.id ? { ...songFromList, active: true } : { ...songFromList, active: false }
    );

    setSongs(updatedSongs);
  }, [currentSong]);

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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      const newIndex = currentIndex !== 0 ? currentIndex - 1 : songs.length - 1;
      setCurrentSong(songs[newIndex]);
    }

    playAudio(isPlaying, audioRef);
  };

  const getTime = (time) =>
    time || time === 0 ? `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(-2)}` : '0:00';

  return (
    <div className="player">
      <div className="time-control">
        <p className="p">{getTime(songInfo.currentTime)}</p>
        <input type="range" min="0" max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
