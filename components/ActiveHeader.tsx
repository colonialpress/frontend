import { useRouter } from 'next/router'
import { useContext } from 'react';
import { ThemeContext } from "styled-components";
import ITheme from '../styles/theme/ITheme';

function ActiveHeader({ children, href }) {

    const themeContext: ITheme = useContext(ThemeContext);

    const router = useRouter()
    const style = {
        fontWeight: router.pathname === 
        href ? 700 : 400
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default ActiveHeader