import { StyledFooter } from "./styled";

const Footer = () => (
    <StyledFooter>
        Dane pochodzą ze strony
        <a className="footer__link"
            rel="noreferrer noopener" target="_blank" href="https://www.google.com/finance/">Google Finanse
        </a>
        w dniu 02.01.2023
    </StyledFooter>
);

export default Footer;