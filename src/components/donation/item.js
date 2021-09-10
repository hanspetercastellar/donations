

import React from "react";
import {Divider, Fab, Grid} from "@material-ui/core";
import avatar1 from "../../assets/images/avatar1.png";
import {ArrowForward} from "@material-ui/icons";



export default function Item({id,first_name,last_name,donations,image,handleDetail}){


    return (
        <Grid className={'cardItem'}>
            <div className={'part-left'}>
                <div className={'avatar'}>
                    <img src={image}/>
                </div>
                <div className={'name'}>
                    <h2>{first_name} {last_name}
                    </h2>
                </div>
            </div>

            <Divider component={'span'} orientation="vertical" flexItem variant={'middle'} style={{backgroundColor:'#666666'}}  />
            <Divider component={'span'} orientation="horizontal" flexItem variant={'middle'} className={'divider-oculto'} style={{backgroundColor:'#666666',padding: "0.5px", display:"none"}}  />
            <div className={'part-rigth'}>
                <div className={'donation-d'}>
                    <p>Total Donations</p>
                    <span>{donations}</span>
                </div>
                <div className={'button-d'}>
                    <Fab color="primary" className={'goIcon'} aria-label="add" onClick={() => handleDetail(id)}>
                        <ArrowForward />
                    </Fab>
                </div>
            </div>


        </Grid>
    )
}