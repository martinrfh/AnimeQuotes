import axios from "axios";
import { useEffect, useState } from "react";

interface AnimeQuote {
  id: number;
  anime: string;
  character: string;
  quote: string;
}

const useQuote = () => {
  const [animeQuote, setAnimeQuote] = useState<AnimeQuote>();
  const [error, setError] = useState("");

  const fetchAnimeQuote = () => {
    const controller = new AbortController();

    axios
      .get<AnimeQuote>("https://animechan.xyz/api/random", {
        signal: controller.signal,
      })
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

  return { animeQuote, error, fetchAnimeQuote };
};

export default useQuote;
