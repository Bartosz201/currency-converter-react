import { useState } from "react";
import Result from "../Result";
import Clock from "../Clock";
import {
    Button,
    Container,
    Failure,
    Fieldset,
    Input,
    LabelText,
    Legend,
    List,
    ListItem,
    Loading,
    ResultText,
    Select,
    StyledForm
} from "./styled";
import { useDownloadRates } from "./useDownloadRates";

const Form = () => {
    const [inAmout, setInAmout] = useState();
    const [inCurrency, setInCurrency] = useState("PLN");
    const [outCurrency, setOutCurrency] = useState("USD");
    const [result, setResult] = useState();
    const [showResult, setShowResult] = useState({});
    const ratesData = useDownloadRates();

    const onSelectInCurrency = ({ target }) => setInCurrency(target.value);

    const onSelectOutCurrency = ({ target }) => setOutCurrency(target.value);

    const calculateResult = () => {
        setResult(result => (
            (inAmout
                *
                Object.values(ratesData.rates)[Object.keys(ratesData.rates).indexOf(outCurrency)]))
            /
            Object.values(ratesData.rates)[Object.keys(ratesData.rates).indexOf(inCurrency)])
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
                <Clock />
                {ratesData.status === "loading" ?
                    <Loading>Poczekaj sekundę... trwa pobieranie danych.</Loading>
                    : ratesData.status === "failure" ?
                        <Failure>
                            Przykro mi coś poszło nie tak sprawdź swoje połączenie internetowe lub spróbuj ponownie później.
                        </Failure>
                        :
                        (<>
                            <List>
                                <ListItem>
                                    <label>
                                        <LabelText>Waluta wejściowa:</LabelText>
                                        <Select value={inCurrency} onChange={onSelectInCurrency}>
                                            {Object.keys(ratesData.rates).map(rate => (
                                                <option key={rate}>
                                                    {rate}</option>
                                            ))}
                                        </Select>
                                    </label>
                                </ListItem>
                                <ListItem>
                                    <label>
                                        <LabelText>Waluta wyjściowa:</LabelText>
                                        <Select value={outCurrency} onChange={onSelectOutCurrency}>
                                            {Object.keys(ratesData.rates).map(rate => (
                                                <option key={rate}>
                                                    {rate}</option>
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
                        </>)}
            </Fieldset>
        </StyledForm>
    )
};

export default Form;