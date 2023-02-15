const Result = ({ showResult, result }) => {
    if (showResult.inAmout) {

        return (
            <>
                {showResult.inAmout} {showResult.inCurrency} = {result.toFixed(2)} {showResult.outCurrency}
            </>
        )
    };
    return
};

export default Result;