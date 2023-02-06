import { useState } from "react";
import "./style.css";
import currencies from "../currencies";
import Result from "../Result";
import Clock from "../Clock";

const Form = () => {
    const [inAmout, setInAmout] = useState();
    const [inCurrency, setInCurrency] = useState("PLN");
    const [outCurrency, setOutCurrency] = useState("USD");
    const [result, setResult] = useState();
    const [showResult, setShowResult] = useState({});

    const onSelectInCurrency = ({ target }) => setInCurrency(target.value);
    const onSelectOutCurrency = ({ target }) => setOutCurrency(target.value);
    const calculateResult = () => {
        setResult(result => (
            (inAmout
                *
                currencies.find(currency => currency.abbreviation === inCurrency).toUSD))
            /
            currencies.find(currency => currency.abbreviation === outCurrency).toUSD)

    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
        setShowResult(showResult => ({ inAmout, inCurrency, outCurrency }));
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <Clock/>
                <ul className="form__list">
                    <li className="form__listItem">
                        <label>
                            <span className="form__labelText">Waluta wejściowa:</span>
                            <select value={inCurrency} onChange={onSelectInCurrency} className="form__input">
                                {currencies.map(currency => (
                                    <option value={currency.abbreviation} key={currency.abbreviation}>
                                        {currency.abbreviation} - {currency.name}</option>
                                ))}
                            </select>
                        </label>
                    </li>
                    <li className="form__listItem">
                        <label>
                            <span className="form__labelText">Waluta wyjściowa:</span>
                            <select value={outCurrency} onChange={onSelectOutCurrency} className="form__input">
                                {currencies.map(currency => (
                                    <option value={currency.abbreviation} key={currency.abbreviation}>
                                        {currency.abbreviation} - {currency.name}</option>
                                ))}
                            </select>
                        </label>
                    </li>
                    <li className="form__listItem">
                        <label>
                            <span className="form__labelText">Wprowadź kwotę:</span>
                            <input
                                value={inAmout}
                                onChange={(event) => setInAmout(event.target.value)}
                                className="form__input"
                                type="number"
                                min="0"
                                step="0.01"
                                required
                            />
                        </label>
                    </li>
                    <li className="form__listItem form__listItem--result">
                        <span className="form__result">Wynik: </span>
                        <strong>
                            <Result showResult={showResult} result={result} />
                        </strong>
                    </li>
                </ul>
                <div className="form__buttonContainer">
                    <button className="form__button">Przelicz</button>
                </div>
            </fieldset>
        </form>
    )
};

export default Form;