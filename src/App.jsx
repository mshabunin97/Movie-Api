import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Results from "./components/results/Results";
import requests from "./components/utils/requests";

function App() {
  const [results, setResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("fetchTrending");

  async function fetchData(genre) {
    const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }`
    ).then((res) => res.json());
    setResults(request.results);
  }

  useEffect(() => {
    fetchData(selectedGenre);
  }, [selectedGenre]);

  return (
    <div>
      <Header />
      <Nav onGenreClick={setSelectedGenre} />
      <Results results={results} />
    </div>
  );
}

export default App;
