import diceIcon from "../assets/icon-dice.svg";
import patternDividerMb from "../assets/pattern-divider-mobile.svg";
import patternDividerDesk from "../assets/pattern-divider-desktop.svg";

const QuoteCard = () => {
  return (
    <>
      <div className="quote-card">
        <p className="quote-counter">QUOTE #100</p>
        <q className="quote-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ipsa
          libero praesentium minus corporis eveniet tenetur?
        </q>
        <picture>
          <source media="(min-width: 768px)" srcSet={patternDividerDesk} />
          <source media="(min-width: 320px)" srcSet={patternDividerMb} />
          <img className="quote-card-divider" src={patternDividerDesk} />
        </picture>
        <button className="quote-card-button">
          <img src={diceIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
