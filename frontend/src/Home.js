import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GridMotion from "./GridMotion";
import TextCursor from "./TextCursor";
import "./styles.css";
import "./components/HeroSection.css"; // Import Hero Styles
import items from "./config/movieImages";
import HeroSlider from "./components/HeroSlider";
import { movieList } from "./config/movieList";

const Title = () => {
  return null;
};

// ImageWithFallback removed as it is no longer used in the slider view

function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');


  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const genreParam = searchParams.get('genre');
    if (genreParam && movieList[genreParam]) {
      setSelectedGenre(genreParam);
      setCurrentPage('genre');
      setMovies(movieList[genreParam]);
    } else {
      setSelectedGenre(null);
      setCurrentPage('home');
      setMovies([]);
    }
  }, [searchParams]);

  const listGenreHandler = (genre) => {
    setSelectedGenre(genre);
    setMovies(movieList[genre] || []);
    setCurrentPage('genre');
    setSearchParams({ genre });
  };

  const goBack = () => {
    setCurrentPage('home');
    setSelectedGenre(null);
    setMovies([]);
    setSearchParams({});
  };

  useEffect(() => {
    if (selectedGenre) {
      setMovies(movieList[selectedGenre] || []);
    }
  }, [selectedGenre]);

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <>
          <Title />
          <GridMotion items={items} gradientColor="transparent" />
        </>
      ) : (
        <div className="genre-page">
          <div className="top-section">
            <button className="back-button" onClick={goBack}>
              ← Back to Home
            </button>
            <h2 className="genre-title">{selectedGenre}</h2>
          </div>
          <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
            <HeroSlider items={movies} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
