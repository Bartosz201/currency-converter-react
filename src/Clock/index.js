import { useCurrentDate, useFormatedDate } from "./useCurrentDate";
import { Paragraph } from "./styled";

const Clock = () => {

    const date = useCurrentDate();
    return (
        <Paragraph className="clock">
            Dzisiaj jest {useFormatedDate(date)}
        </Paragraph>
    );
};

export default Clock;