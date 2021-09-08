import React from "react";
import logo from '../assets/images/Logo.svg'

const HeaderComponent = () => {

    return (
        <header className={'header'}>
            <img className={'logo'} src={logo} />
        </header>
    )
}

export default HeaderComponent