import { useState } from "react";
import "./style.css"

const Form = () => {
    const [calculationData, setCalculationData] = useState({
        inAmout: 100,
        inCurrency: "PLN",
        outAmout: 100,
        outCurrency: "PLN",
    })


    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <ul className="form__list">
                    <li className="form__listItem">
                        <label>
                            <span className="form__labelText">Waluta wejściowa:</span>
                            <select className="form__input">
                                <option value="PLN" selected>PLN - polski złoty</option>
                                <option value="USD">USD - dolar amerykański</option>
                                <option value="EUR">EUR - euro</option>
                                <option value="GBP">GBP - funt brytyjski</option>
                            </select>
                        </label>
                    </li>
                    <li className="form__listItem">
                        <label>
                            <span className="form__labelText">Waluta wyjściowa:</span>
                            <select className="form__input">
                                <option value="PLN">PLN - polski złoty</option>
                                <option value="USD" selected>USD - dolar amerykański</option>
                                <option value="EUR">EUR - euro</option>
                                <option value="GBP">GBP - funt brytyjski</option>
                            </select>
                        </label>
                    </li>
                    <li className="form__listItem">
                        <label>
                            <span className="form__labelText">Wprowadź kwotę:</span>
                            <input className="form__input" type="number" min="0" step="0.01" required />
                        </label>
                    </li>
                    <li className="form__listItem">
                        <span className="form__result">Wynik: </span>
                        <strong>
                            {calculationData.inAmout} {calculationData.inCurrency} = {calculationData.outAmout} {calculationData.outCurrency}
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

export default Form