import { useEffect, useState} from "react";
import axios from "axios";

export const useDownloadRates = () =>{
    const [ratesData, setRatesData] = useState({ status: "loading" })
    
    useEffect(() => {
        setTimeout(() => {
            const requestURL = 'https://api.exchangerate.host/latest?base=USD'  
            axios.get(requestURL)
                .then(response => setRatesData(ratesData => ({ rates: response.data.rates, status: "success" })))
                .catch(() => setRatesData(ratesData => ({ status: "failure" })));
        }, 1000);
    }, []);

    return ratesData
};