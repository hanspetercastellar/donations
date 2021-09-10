import React from "react";
import logo from '../assets/images/Logo.svg'
import {Fab} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {ArrowBack} from "@material-ui/icons";
const HeaderComponent = ({back}) => {
    const history = useHistory();
    return (
        <header className={'header'}>
            {back==true?(
                <div className={'button-d backButton'}>
                    <Fab color="primary" className={'goIcon'} aria-label="add" onClick={() => history.goBack()}>
                        <ArrowBack />
                    </Fab>
                </div>
            ):null}
            <img className={'logo'} src={logo} />
        </header>
    )
}

export default HeaderComponent