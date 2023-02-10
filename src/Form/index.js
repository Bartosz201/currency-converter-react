import { useState } from "react";
import "./style.css";
import currencies from "../currencies";
import Result from "../Result";
import Clock from "../Clock";
import { Button, Container, Fieldset, Input, LabelText, Legend, List, ListItem, ResultText, Select, StyledForm } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator Walut</Legend>
                <Clock/>
                <List>
                    <ListItem>
                        <label>
                            <LabelText>Waluta wejściowa:</LabelText>
                            <Select value={inCurrency} onChange={onSelectInCurrency}>
                                {currencies.map(currency => (
                                    <option value={currency.abbreviation} key={currency.abbreviation}>
                                        {currency.abbreviation} - {currency.name}</option>
                                ))}
                            </Select>
                        </label>
                    </ListItem>
                    <ListItem>
                        <label>
                            <LabelText>Waluta wyjściowa:</LabelText>
                            <Select value={outCurrency} onChange={onSelectOutCurrency}>
                                {currencies.map(currency => (
                                    <option value={currency.abbreviation} key={currency.abbreviation}>
                                        {currency.abbreviation} - {currency.name}</option>
                                ))}
                            </Select>
                        </label>
                    </ListItem>
                    <ListItem>
                        <label>
                            <LabelText>Wprowadź kwotę:</LabelText>
                            <Input
                                value={inAmout}
                                onChange={(event) => setInAmout(event.target.value)}
                                type="number"
                                min="0"
                                step="0.01"
                                required
                            />
                        </label>
                    </ListItem>
                    <ListItem result>
                        <ResultText>Wynik: </ResultText>
                        <strong>
                            <Result showResult={showResult} result={result} />
                        </strong>
                    </ListItem>
                </List>
                <Container>
                    <Button>Przelicz</Button>
                </Container>
            </Fieldset>
        </StyledForm>
    )
};

export default Form;