import { useCurrentDate, getFormatedDate } from "./useCurrentDate";
import { Paragraph } from "./styled";

const Clock = () => {

    const date = useCurrentDate();
    return (
        <Paragraph className="clock">
            Dzisiaj jest {getFormatedDate(date)}
        </Paragraph>
    );
};

export default Clock;