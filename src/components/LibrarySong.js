import { playAudio } from '../util';

const LibrarySong = ({ audioRef, song, songs, setCurrentSong, setSongs, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    const updatedSongs = songs.map((songFromList) =>
      songFromList.id === song.id ? { ...songFromList, active: true } : { ...songFromList, active: false }
    );

    setSongs(updatedSongs);
    playAudio(isPlaying, audioRef);
  };

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name} />

      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
