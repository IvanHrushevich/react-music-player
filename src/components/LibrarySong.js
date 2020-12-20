const LibrarySong = ({ audioRef, song, songs, setCurrentSong, setSongs, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    const updatedSongs = songs.map((songFromList) =>
      songFromList.id === song.id ? { ...songFromList, active: true } : { ...songFromList, active: false }
    );

    setSongs(updatedSongs);

    if (isPlaying) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
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
