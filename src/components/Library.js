import LibrarySong from './LibrarySong';

const Library = ({ audioRef, isPlaying, songs, setCurrentSong, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
