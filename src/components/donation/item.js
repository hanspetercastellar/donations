

import React from "react";
import {Divider, Fab, Grid} from "@material-ui/core";
import avatar1 from "../../assets/images/avatar1.png";
import {Send} from "@material-ui/icons";



export default function Item(){


    return (
        <Grid className={'cardItem'}>
            <div className={'part-left'}>
                <div className={'avatar'}>
                    <img src={avatar1}/>
                </div>
                <div className={'name'}>
                    <h2>Lorrie Cardenosa
                    </h2>
                </div>
            </div>

            <Divider orientation="vertical" flexItem variant={'middle'} style={{backgroundColor:'#666666'}}  />
            <div className={'part-rigth'}>
                <div className={'donation-d'}>
                    <p>Total Donations</p>
                    <span>158</span>
                </div>
                <div className={'button-d'}>
                    <Fab color="primary" className={'goIcon'} aria-label="add">
                        <Send />
                    </Fab>
                </div>
            </div>


        </Grid>
    )
}