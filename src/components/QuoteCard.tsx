import diceIcon from "../assets/icon-dice.svg";
import patternDividerMb from "../assets/pattern-divider-mobile.svg";
import patternDividerDesk from "../assets/pattern-divider-desktop.svg";
import useQuote from "../hook/useQuote";

const QuoteCard = () => {
  const { animeQuote, error, fetchAnimeQuote } = useQuote();

  return (
    <>
      <div className="quote-card">
        <p className="quote-title">
          {animeQuote?.anime} _ {animeQuote?.character}
        </p>
        {error && <p className="error-message">{error}</p>}
        <q className="quote-text"> {animeQuote?.quote} </q>
        <picture>
          <source media="(min-width: 768px)" srcSet={patternDividerDesk} />
          <source media="(min-width: 320px)" srcSet={patternDividerMb} />
          <img className="quote-card-divider" src={patternDividerDesk} />
        </picture>
        <button className="quote-card-button" onClick={() => fetchAnimeQuote()}>
          <img src={diceIcon} alt="#" />
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
