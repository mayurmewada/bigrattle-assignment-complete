const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=27d4314be4cf644738b03f707c6be2df";
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `${BASE_URL}/search/movie?${API_KEY}&query=`;

const languages = [
  {
    iso_639_1: "la",
    english_name: "Latin",
    name: "Latin",
  },

  {
    iso_639_1: "tr",
    english_name: "Turkish",
    name: "Türkçe",
  },
  {
    iso_639_1: "fr",
    english_name: "French",
    name: "Français",
  },

  {
    iso_639_1: "ja",
    english_name: "Japanese",
    name: "日本語",
  },

  {
    iso_639_1: "id",
    english_name: "Indonesian",
    name: "Bahasa indonesia",
  },

  {
    iso_639_1: "hi",
    english_name: "Hindi",
    name: "हिन्दी",
  },
  {
    iso_639_1: "pt",
    english_name: "Portuguese",
    name: "Português",
  },

  {
    iso_639_1: "it",
    english_name: "Italian",
    name: "Italiano",
  },

  {
    iso_639_1: "ru",
    english_name: "Russian",
    name: "Pусский",
  },

  {
    iso_639_1: "en",
    english_name: "English",
    name: "English",
  },

  {
    iso_639_1: "ne",
    english_name: "Nepali",
    name: "",
  },
  {
    iso_639_1: "sv",
    english_name: "Swedish",
    name: "svenska",
  },

  {
    iso_639_1: "de",
    english_name: "German",
    name: "Deutsch",
  },

  {
    iso_639_1: "es",
    english_name: "Spanish",
    name: "Español",
  },

  {
    iso_639_1: "ko",
    english_name: "Korean",
    name: "한국어/조선말",
  },
];
const regions = [
  {
    iso_3166_1: "AR",
    english_name: "Argentina",
    native_name: "Argentina",
  },
  {
    iso_3166_1: "AT",
    english_name: "Austria",
    native_name: "Austria",
  },
  {
    iso_3166_1: "AU",
    english_name: "Australia",
    native_name: "Australia",
  },
  {
    iso_3166_1: "BE",
    english_name: "Belgium",
    native_name: "Belgium",
  },
  {
    iso_3166_1: "BG",
    english_name: "Bulgaria",
    native_name: "Bulgaria",
  },
  {
    iso_3166_1: "BR",
    english_name: "Brazil",
    native_name: "Brazil",
  },
  {
    iso_3166_1: "CA",
    english_name: "Canada",
    native_name: "Canada",
  },
  {
    iso_3166_1: "CH",
    english_name: "Switzerland",
    native_name: "Switzerland",
  },
  {
    iso_3166_1: "CZ",
    english_name: "Czech Republic",
    native_name: "Czech Republic",
  },
  {
    iso_3166_1: "DE",
    english_name: "Germany",
    native_name: "Germany",
  },
  {
    iso_3166_1: "DK",
    english_name: "Denmark",
    native_name: "Denmark",
  },
  {
    iso_3166_1: "EE",
    english_name: "Estonia",
    native_name: "Estonia",
  },
  {
    iso_3166_1: "ES",
    english_name: "Spain",
    native_name: "Spain",
  },
  {
    iso_3166_1: "FI",
    english_name: "Finland",
    native_name: "Finland",
  },
  {
    iso_3166_1: "FR",
    english_name: "France",
    native_name: "France",
  },
  {
    iso_3166_1: "GB",
    english_name: "United Kingdom",
    native_name: "United Kingdom",
  },
  {
    iso_3166_1: "HK",
    english_name: "Hong Kong",
    native_name: "Hong Kong SAR China",
  },
  {
    iso_3166_1: "HU",
    english_name: "Hungary",
    native_name: "Hungary",
  },
  {
    iso_3166_1: "ID",
    english_name: "Indonesia",
    native_name: "Indonesia",
  },
  {
    iso_3166_1: "IE",
    english_name: "Ireland",
    native_name: "Ireland",
  },
  {
    iso_3166_1: "IN",
    english_name: "India",
    native_name: "India",
  },
  {
    iso_3166_1: "IT",
    english_name: "Italy",
    native_name: "Italy",
  },
  {
    iso_3166_1: "JP",
    english_name: "Japan",
    native_name: "Japan",
  },
  {
    iso_3166_1: "KR",
    english_name: "South Korea",
    native_name: "South Korea",
  },
  {
    iso_3166_1: "LT",
    english_name: "Lithuania",
    native_name: "Lithuania",
  },
  {
    iso_3166_1: "MX",
    english_name: "Mexico",
    native_name: "Mexico",
  },
  {
    iso_3166_1: "NL",
    english_name: "Netherlands",
    native_name: "Netherlands",
  },
  {
    iso_3166_1: "NO",
    english_name: "Norway",
    native_name: "Norway",
  },
  {
    iso_3166_1: "NZ",
    english_name: "New Zealand",
    native_name: "New Zealand",
  },
  {
    iso_3166_1: "PH",
    english_name: "Philippines",
    native_name: "Philippines",
  },
  {
    iso_3166_1: "PL",
    english_name: "Poland",
    native_name: "Poland",
  },
  {
    iso_3166_1: "PT",
    english_name: "Portugal",
    native_name: "Portugal",
  },
  {
    iso_3166_1: "RU",
    english_name: "Russia",
    native_name: "Russia",
  },
  {
    iso_3166_1: "SE",
    english_name: "Sweden",
    native_name: "Sweden",
  },
  {
    iso_3166_1: "TR",
    english_name: "Turkey",
    native_name: "Turkey",
  },
  {
    iso_3166_1: "US",
    english_name: "United States of America",
    native_name: "United States",
  },
  {
    iso_3166_1: "ZA",
    english_name: "South Africa",
    native_name: "South Africa",
  },
];
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const filterLanguageEl = document.getElementById("filter-language");
const filterRegionEl = document.getElementById("filter-region");
const filterGenreEl = document.getElementById("filter-genre");
const selectedLanguage = [];
const selectedRegion = [];
const selectedGenre = [];

const activeFilter = () => {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => {
    tag.classList.remove("active");
  });
  if (selectedLanguage.length != 0) {
    selectedLanguage.forEach((id) => {
      const activeTag = document.getElementById(id);
      activeTag.classList.add("active");
    });
  }
  if (selectedRegion.length != 0) {
    selectedRegion.forEach((id) => {
      const activeTag = document.getElementById(id);
      activeTag.classList.add("active");
    });
  }
  if (selectedGenre.length != 0) {
    selectedGenre.forEach((id) => {
      const activeTag = document.getElementById(id);
      activeTag.classList.add("active");
    });
  }
};

const setLanguage = () => {
  filterLanguageEl.innerHTML = "";
  languages.forEach((language) => {
    const lang = document.createElement("div");
    lang.classList.add("tag");
    lang.id = language.iso_639_1;
    lang.innerText = language.english_name;
    lang.addEventListener("click", () => {
      if (selectedLanguage.length == 0) {
        selectedLanguage.push(language.iso_639_1);
      } else {
        if (selectedLanguage.includes(language.iso_639_1)) {
          selectedLanguage.forEach((id, idx) => {
            if (id == language.iso_639_1) {
              selectedLanguage.splice(idx, 1);
            }
          });
        } else {
          selectedLanguage.push(language.iso_639_1);
        }
      }
      console.log(selectedLanguage);
      getMovies(
        `${BASE_URL}/discover/movie?${API_KEY}&region=${selectedRegion.join(
          ","
        )}`
      );
      activeFilter();
    });
    filterLanguageEl.append(lang);
  });
};
setLanguage();

const setRegions = () => {
  filterRegionEl.innerHTML = "";
  regions.forEach((region) => {
    const reg = document.createElement("div");
    reg.classList.add("tag");
    reg.id = region.iso_3166_1;
    reg.innerText = region.english_name;
    reg.addEventListener("click", () => {
      if (selectedRegion.length == 0) {
        selectedRegion.push(region.iso_3166_1);
      } else {
        if (selectedRegion.includes(region.iso_3166_1)) {
          selectedRegion.forEach((id, idx) => {
            if (id == region.iso_3166_1) {
              selectedRegion.splice(idx, 1);
            }
          });
        } else {
          selectedRegion.push(region.iso_3166_1);
        }
      }
      console.log(selectedRegion);
      getMovies(`${API_URL}&language=${selectedRegion.join(",")}`);
      activeFilter();
    });
    filterRegionEl.append(reg);
  });
};
setRegions();

const setGenres = () => {
  filterGenreEl.innerHTML = "";
  genres.forEach((genre) => {
    const gen = document.createElement("div");
    gen.classList.add("tag");
    gen.id = genre.id;
    gen.innerText = genre.name;
    gen.addEventListener("click", () => {
      if (selectedGenre.length == 0) {
        selectedGenre.push(genre.id);
      } else {
        if (selectedGenre.includes(genre.id)) {
          selectedGenre.forEach((id, idx) => {
            if (id == genre.id) {
              selectedGenre.splice(idx, 1);
            }
          });
        } else {
          selectedGenre.push(genre.id);
        }
      }
      console.log(selectedGenre);
      getMovies(`${API_URL}&with_genres=${selectedGenre.join(",")}`);
      activeFilter();
    });
    filterGenreEl.append(gen);
  });
};
setGenres();

const getClassByRate = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

const showMovies = (movies) => {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}"/>
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
    `;
    main.appendChild(movieEl);
  });
};

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
  // console.log(data.results);
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
