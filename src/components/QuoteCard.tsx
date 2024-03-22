import diceIcon from "../assets/icon-dice.svg";
import patternDividerMb from "../assets/pattern-divider-mobile.svg";
import patternDividerDesk from "../assets/pattern-divider-desktop.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface AnimeQuote {
  id: number;
  anime: string;
  character: string;
  quote: string;
}

const QuoteCard = () => {
  const [animeQuote, setAnimeQuote] = useState<AnimeQuote>();
  const [error, setError] = useState("");

  const fetchAnimeQuote = () => {
    const controller = new AbortController();
    axios
      .get("https://xanimechan.xyz/api/random", { signal: controller.signal })
      .then((res) => {
        setError("");
        setAnimeQuote(res.data);
      })
      .catch((err) => setError(err.message));
    return () => controller.abort();
  };

  useEffect(() => {
    fetchAnimeQuote();
  }, []);

  return (
    <>
      <div className="quote-card">
        <p className="quote-title">
          {animeQuote?.anime} _ {animeQuote?.character}
        </p>
        {error && <p className="error-message">{error}</p>}
        <q className="quote-text">{animeQuote?.quote}</q>
        <picture>
          <source media="(min-width: 768px)" srcSet={patternDividerDesk} />
          <source media="(min-width: 320px)" srcSet={patternDividerMb} />
          <img className="quote-card-divider" src={patternDividerDesk} />
        </picture>
        <button className="quote-card-button" onClick={() => fetchAnimeQuote()}>
          <img src={diceIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
