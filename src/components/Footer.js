import React from 'react'
import style from './Footer.module.css'

import FooterImg from '../assets/main/Footer.svg'

export class Footer extends React.Component {
    render() {
        const width = window.screen.width;
        const defaultSize = {width : width};

        return(
            <div className={style.footer} style={defaultSize}>
                <img className={style.footerImg} src={FooterImg} alt="가천허브 워터마크"></img>
            </div>
        );
    }
}