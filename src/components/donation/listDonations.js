import React, {useEffect} from 'react';
import {Card, Divider, Fab, Grid} from "@material-ui/core";
import avatar1 from '../../assets/images/avatar1.png'
import { Send } from '@material-ui/icons';
import Item from "./item";
import {useDispatch, useSelector} from "react-redux";
import {donations, identifier} from "../../redux/slicesRedcers/donationSlice";


export default function ListDonations({handleDetail}) {
    const dispatch = useDispatch();
    const donations = useSelector(state => state.donation.donations)

    const renderDonation = () => {
        return donations.map(res => (
            <Item key={res.id} {...res} handleDetail={handleDetail}/>
        ));
    }


    useEffect(() => {
        dispatch({type:identifier.FETCH_DONATION,payload:{ skip:1,limit:5,sort:"id"}})
    },[])


  return (
    <>
        <div className={'lists'}>
            {renderDonation()}
        </div>

    </>
  );
}