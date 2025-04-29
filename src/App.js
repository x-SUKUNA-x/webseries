import { useState, useEffect, useRef } from "react";
import GridMotion from "./GridMotion";
import TextCursor from "./TextCursor";
import InfiniteMenu from "./InfiniteMenu";
import "./styles.css";

const Title = () => {
  return (
    <div className="page-title">
      <h1>Movie & Series Recommendation</h1>
      <div className="cursor-container">
        <TextCursor
          text="Movie & Series Recommendation"
          delay={0.01}
          spacing={80}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        />
      </div>
    </div>
  );
};

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  const handleError = () => {
    if (!error) {
      setError(true);
      // Try alternative image URLs if the main one fails
      if (src.includes("amazon")) {
        const alternativeUrl = src.replace("amazon", "imdb");
        setImgSrc(alternativeUrl);
      } else {
        setImgSrc("https://via.placeholder.com/300x400?text=Image+Not+Available");
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

const items = [
  'Money Heist',
  'https://www.worthcrete.com/wp-content/uploads/2023/01/Money-Heist-Online-HINDI-WorthCrete.webp',
  'https://www.worthcrete.com/wp-content/uploads/2023/01/Money-Heist-Online-HINDI-WorthCrete.webp',
  'https://images.justwatch.com/poster/301078631/s718/wednesday.jpg',
  'https://occ-0-8407-2433.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaIb3dTroTNbkOlr3IDYEVilVq7ZGj2zXEv2JCaq20O58tRRcdvBfKr5lXYvHoKxDVUpChCXdQfz0_t9w4-A-JiaXZgelZjiOruh.jpg?r=1f9',
  'https://occ-0-8407-2433.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaIb3dTroTNbkOlr3IDYEVilVq7ZGj2zXEv2JCaq20O58tRRcdvBfKr5lXYvHoKxDVUpChCXdQfz0_t9w4-A-JiaXZgelZjiOruh.jpg?r=1f9',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnUs0fGX7ZYGytz947j19mBLMwaZMv_jCyZkXWwHMXt_GKRAhaclB0lmC5i_17U17x-G9Vqv3s-VkoXT5SvAuwZE-edTDZ7z3HTp-x6eHCwZ4N7UaPR_MWrO_yu76gbRSgODmfj_4XJU6C/s1200/mirzapur-2-1200-4.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://images.thedirect.com/media/article_full/loki-season-2-mcu.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/09/stranger-things-every-seasons.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4adzXOad5ur9iy1ErLBFMDOnqx_lsAV4CzA&s',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://resizing.flixster.com/LKF-jjRupKKfC9SRHVKBB0aFX7c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20410134_b_v13_aa.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyPW8_p-xM7lNBd5wkeh-10cb37TnupDLRmQ1eLnXXAQqmFeAUHgpkg__fHiyfjfxTcI&usqp=CAU',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://www.irosf.com/wp-content/uploads/2020/12/dark-1.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/harry_potter_8film_2000x3000.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://www.worthcrete.com/wp-content/uploads/2023/01/Money-Heist-Online-HINDI-WorthCrete.webp',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://images.justwatch.com/poster/301078631/s718/wednesday.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://occ-0-8407-2433.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaIb3dTroTNbkOlr3IDYEVilVq7ZGj2zXEv2JCaq20O58tRRcdvBfKr5lXYvHoKxDVUpChCXdQfz0_t9w4-A-JiaXZgelZjiOruh.jpg?r=1f9',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnUs0fGX7ZYGytz947j19mBLMwaZMv_jCyZkXWwHMXt_GKRAhaclB0lmC5i_17U17x-G9Vqv3s-VkoXT5SvAuwZE-edTDZ7z3HTp-x6eHCwZ4N7UaPR_MWrO_yu76gbRSgODmfj_4XJU6C/s1200/mirzapur-2-1200-4.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://images.thedirect.com/media/article_full/loki-season-2-mcu.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/09/stranger-things-every-seasons.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4adzXOad5ur9iy1ErLBFMDOnqx_lsAV4CzA&s',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://resizing.flixster.com/LKF-jjRupKKfC9SRHVKBB0aFX7c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20410134_b_v13_aa.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyPW8_p-xM7lNBd5wkeh-10cb37TnupDLRmQ1eLnXXAQqmFeAUHgpkg__fHiyfjfxTcI&usqp=CAU',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://www.irosf.com/wp-content/uploads/2020/12/dark-1.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg',
  'https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/harry_potter_8film_2000x3000.jpg',
];

// Movie data type definition
const movieList = {
  Thriller: [
    {
      name: "Badla",
      director: "Sujoy Ghosh",
      cast: "Amitabh Bachchan, Taapsee Panu",
      rating: "7.8/10",
      year: "2019",
      description: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her.",
      image: "https://m.media-amazon.com/images/M/MV5BYjZiMzIzYTctNDViZi00OWNmLWFmN2YtMmI2OWJiZWViMmY3XkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=mSlgu8AQAd4",
    },

    {
      name: "Detective Byomkesh Bakshy!",
      director: "Dibakar Banerjee",
      cast: "Sushant Singh Rajput",
      rating: "7.7/10",
      year: "2015",
      description: "While investigating the disappearance of a chemist, a detective uncovers a larger conspiracy to unsettle Calcutta.",
      image: "https://m.media-amazon.com/images/M/MV5BYTU1N2VmODMtMjQxZi00ZGRmLWIyZTEtMjg3YmNkZDNjNTc1XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ZG--GOpi_0g",
    },

    {
      name: "NH-10",
      director: "Navdeep Singh",
      cast: "Anushka Sharma, Darshan Kumaar",
      rating: "7.2/10",
      year: "2015",
      description: "On their way to a weekend retreat, a married couple find their dream vacation turn into a nightmare when they cross paths with a dangerous gang.",
      image: "https://m.media-amazon.com/images/M/MV5BOTUyMzk3MzQ5OV5BMl5BanBnXkFtZTgwNDM3MjM5NDE@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=A9icNqWlylw",
    },

    {
      name: "Joker",
      director: "Todd Philips",
      cast: "Joaquin Phoenix",
      rating: "8.4/10",
      year: "2019",
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/924607fa629851bc686d925ab8a63e70_480x.progressive.jpg?v=1573572635",
      youtubeLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    },

    {
      name: "John Wick",
      director: "Chad StahelskiDavid Leitch",
      cast: "Keanu Reeves",
      rating: "7.4/10",
      year: "2014",
      description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      image: "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    },

    {
      name: "Casino Royale",
      director: "Martin Campbell",
      cast: "Daniel Craig",
      rating: "8.0/10",
      year: "2006",
      description: "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007.",
      image: "https://m.media-amazon.com/images/I/617AgXANWGL._AC_SL1024_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=36mnx8dBbGE",
    }
  ],

  Action: [
    {
      name: "Baahubali 2",
      director: "S.S.Rajamouli",
      cast: "Prabhas, Rana Daggubati",
      rating: "8.2/10",
      year: "2017",
      description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
      image: "https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=G62HrubdD6o",
    },

    {
      name: "Ant-Man",
      director: "Peyton Reed",
      cast: "Paul Rudd",
      rating: "7.3/10",
      year: "2015",
      description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, and save the world.",
      image: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=pWdKf3MneyI",
    },


    {
      name: "Hobbs & Shaw",
      director: "David Leitch",
      cast: "Dwayne Johnson, Jason Statham, Idris Elba",
      rating: "6.4/10",
      year: "2019",
      description: "Lawman Hobbs ('The Rock') and outcast Deckard Shaw (Jason Statham) form an unlikely alliance to save people from cyber-genetically villan.",
      image: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=HZ7PAyCDwEg",
    },

    {
      name: "6 Underground",
      director: "Michael Bay",
      cast: "Ryan Reynolds",
      rating: "6.1/10",
      year: "2019",
      description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
      image: "https://m.media-amazon.com/images/I/61Sqs2aF8fL._AC_SY879_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=YLE85olJjp8",
    },

    {
      name: "Extraction",
      director: "Sam Hargrave",
      cast: "Chris Hemsworth,Randeep Hooda",
      rating: "6.7/10",
      year: "2020",
      description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped kid.",
      image: "https://m.media-amazon.com/images/I/71lpcnTVFXL._SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=L6P3nI6VnlY",
    },

    {
      name: "Pirates Caraibes",
      director: "Joachim RønningEspen Sandberg",
      cast: "Johnny Depp",
      rating: "6.5/10",
      year: "2017",
      description: "Captain Jack fight with Captain Salazar and a crew of deadly ghosts who have escaped from the Devil's Triangle.",
      image: "https://images-na.ssl-images-amazon.com/images/I/A1oOBuoEdIL._RI_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=Hgeu5rhoxxY",
    },

    {
      name: "Iron Man",
      director: "Jon Favreau",
      cast: "Robert Downey Jr.",
      rating: "7.9/10",
      year: "2008",
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    },
  ],

  Comedy: [
    {
      name: "Hera Pheri",
      director: "Priyadarshan",
      cast: "Akshay Kumar, Paresh Rawal, Suniel Shetty",
      rating: "8.2/10",
      year: "2000",
      description: "Three unemployed men look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?",
      image: "https://m.media-amazon.com/images/M/MV5BNDU3NDU5YmUtOWUwZC00NDczLTg4NGEtNGJiNDU5ZDgxZDY1XkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=Nj4H-X3FAWU",
    },

    {
      name: "3 Idiots",
      director: "Rajkumar Hirani",
      cast: "Aamir Khan, Madhavan, Sharman Joshi",
      rating: "8.4/10",
      year: "2009",
      description: "Two friends are for searching their long lost companion, who inspired them to think differently.",
      image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
    },

    {
      name: "Dhol",
      director: "Priyadarshan, Aman Ullah",
      cast: "Sharman Joshi, Kunal Khemu, Tusshar Kapoor, Rajpal Yadav",
      rating: "6.4/10",
      year: "2007",
      description: "Four lazy friends try to woo a rich girl, in order to live a wealthy lifestyle.",
      image: "https://m.media-amazon.com/images/M/MV5BOTRiZDE0MjMtMDA0MS00MzU4LWFhMDctYTYwMmU2ZDFmMjViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=vqH2cV1T9WE",
    },

    {
      name: "Deadpool",
      director: "Tim Miller",
      cast: "Ryan Reynolds",
      rating: "8.0/10",
      year: "2016",
      description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      image: "https://m.media-amazon.com/images/I/51qRj51ht8L._AC_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ONHBaC-pfsk",
    },

    {
      name: "American Pie",
      director: "Paul Weitz, Chris Weitz",
      cast: "Chris Klein,Jason Biggs,Thomas Ian Nicholas",
      rating: "7.0/10",
      year: "1999",
      description: "Four teenage boys enter a pact to lose their virginity by prom night.",
      image: "https://m.media-amazon.com/images/I/61HqHOUj08L._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=iUZ3Yxok6N8",
    },
    
    {
      name: "Go Goa Gone",
      director: "Krishna D.K, Raj Nidimoru",
      cast: "Saif Ali Khan, Kunal Khemu, Vir Das",
      rating: "6.7/10",
      year: "2013",
      description: "A group of friends, just go Goa in remote island for fun and rave party, find out that the island is infested with Zombies.",
      image: "https://m.media-amazon.com/images/M/MV5BMjAzNzI5MTQxOV5BMl5BanBnXkFtZTcwNTQ0MDE1OQ@@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=4V5zGNVRmaE",
    },
  ],

  Fiction: [
    {
      name: "Interstellar",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Jessica Chastain,",
      rating: "8.6/10",
      year: "2014",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },


    {
      name: "Inception",
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio",
      rating: "8.8/10",
      year: "2010",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },

    {
      name: "The Martian",
      director: "Ridley Scott",
      cast: "Matt Damon, Jessica Chastain",
      rating: "8.0/10",
      year: "2015",
      description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      image: "https://m.media-amazon.com/images/I/A1rjuidemEL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ej3ioOneTy8",
    },


    {
      name: "Rise of the Planet of the Apes",
      director: "Rupert Wyatt",
      cast: "James Franco, Andy Serkis",
      rating: "7.5/10",
      year: "2011",
      description: "A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.",
      image: "https://m.media-amazon.com/images/I/81yWc81CqmL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=T3tidwW1gGM",
    },

    {
      name: "Gravity",
      director: "Alfonso Cuarón",
      cast: "Sandra Bullock, George Clooney",
      rating: "7.7/10",
      year: "2013",
      description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
      image: "https://m.media-amazon.com/images/I/81DNIBr-eSL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=OiTiKOy59o4",
    },
    
    {
      name: "Passengers",
      director: "Morten Tyldum",
      cast: "Jennifer Lawrence, Chris Pratt",
      rating: "7.0/10",
      year: "2016",
      description: "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.",
      image: "https://m.media-amazon.com/images/M/MV5BMTk4MjU3MDIzOF5BMl5BanBnXkFtZTgwMjM2MzY2MDI@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=7BWWWQzTpNU",
    }
  ],

  Series: [
    {
      name: "The Flash",
      director: "Greg Berlanti, Geoff Johns, Andrew Kreisberg",
      cast: "Grant Gustin, Candice Patton, Tom Cavanagh",
      rating: "7.6/10",
      year: "2014",
      description: "After being struck by lightning, Barry Allen become the next Flash with super speed power, fighting crime in Central City.",
      image: "https://m.media-amazon.com/images/M/MV5BODIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=Yj0l7iGKh8g",
    },


    {
      name: "Money Heist",
      director: "Álex Pina",
      cast: "Úrsula Corberó, Pedro Alonso, Álvaro Morte",
      rating: "8.3/10",
      year: "2017",
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      image: "https://m.media-amazon.com/images/I/61boFr6SYZL._SL1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=8QkyLqmJCMM",
    },

    {
      name: "Death Note",
      director: "Tetsuro Araki",
      cast: "Brad Swaile, Ryô Naitô, Brian Drummond",
      rating: "9.0/10",
      year: "2006",
      description: "An intelligent high school student goes on a secret crusade to eliminate criminals by discovering a super powerful notebook by writing names.",
      image: "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
    },

    {
      name: "The Family Man",
      director: "Krishna D.K, Raj Nidimoru",
      cast: "Manoj Bajpai, Samantha Akkineni, Sharib Hashmi",
      rating: "8.8/10",
      year: "2019",
      description: "A working man from the National Investigation Agency tries to protect the nation from terrorism.",
      image: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=XatRGut65VI",
    },

    {
      name: "Mirzapur",
      director: "Puneet Krishna",
      cast: "Pankaj Tripathi, Ali Fazal, Divyendu Sharma",
      rating: "8.4/10",
      year: "2018",
      description: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
      image: "https://m.media-amazon.com/images/M/MV5BMjEzNzMwNjAzMl5BMl5BanBnXkFtZTgwMTI4MzY3NjM@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ZNeGF-PvRHY",
    },

    {
      name: "Apharan",
      director: "Siddharth Sengupta",
      cast: "Arunoday Singh",
      rating: "8.3/10",
      year: "2018",
      description: "Rudra Srivastava, a senior inspector with Uttarakhand police is lured into kidnapping a young girl at her request.",
      image: "https://img.starbiz.com/resize/750x-/2020/09/23/apaharan-web-series-download-1-6592.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=CxNYucYVEkQ",
    }
  ]

};

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const movieListRef = useRef(null);

  const listGenreHandler = (genre) => {
    setSelectedGenre(genre);
    setMovies(movieList[genre] || []);
    setCurrentPage('genre');
  };

  const goBack = () => {
    setCurrentPage('home');
    setSelectedGenre(null);
    setMovies([]);
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
          <div className="top-section">
            <Title />
            <InfiniteMenu 
              items={Object.keys(movieList)} 
              onSelect={listGenreHandler}
            />
          </div>
          <GridMotion items={items} gradientColor="black" />
        </>
      ) : (
        <div className="genre-page">
          <div className="top-section">
            <button className="back-button" onClick={goBack}>
              ← Back to Home
            </button>
            <h2 className="genre-title">{selectedGenre}</h2>
          </div>
          <div className="container">
            <div className="movie-list" ref={movieListRef}>
              {movies.map((movie, index) => (
                <div key={index} className="movie-card">
                  <ImageWithFallback
                    src={movie.image}
                    alt={movie.name}
                    className="movie-poster"
                  />
                  <div className="movie-info">
                    <h2>{movie.name}</h2>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Cast:</strong> {movie.cast}</p>
                    <p><strong>Rating:</strong> {movie.rating}</p>
                    <p><strong>Year:</strong> {movie.year}</p>
                    <p><strong>Description:</strong> {movie.description}</p>
                    <a href={movie.youtubeLink} target="_blank" rel="noopener noreferrer" className="watch-button">
                      Watch Trailer
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
