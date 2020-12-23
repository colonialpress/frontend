import { useRouter } from 'next/router'
import { useContext } from 'react';
import { ThemeContext } from "styled-components";
import ITheme from '../styles/theme/ITheme';

function ActiveHeader() {

    const themeContext: ITheme = useContext(ThemeContext);

    const router = useRouter()
    
    let text;

    if (router.pathname === "/services") {
        text = "Our Services"
    } else if (router.pathname === "/prepressdesign") {
        text = "Pre-Press & Design"
    } else if (router.pathname === "/contact") {
        text = "Contact Us"
    } else {
        text = "Yesteryear's service with tomorrow's technology."
    }

    return (
        <p>{text}</p>
    )
}

export default ActiveHeader