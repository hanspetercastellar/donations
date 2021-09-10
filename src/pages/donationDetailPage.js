import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../components/header";
import avatar1 from "../assets/images/avatar1.png";
import '../assets/css/detail.css'
import {Button, Card, Divider, Grid} from "@material-ui/core";
import ModalMakeDonation from "../components/modals/modalMakeDonation";
import {useDispatch, useSelector} from "react-redux";
import {deleteDonation, saveDonation} from "../redux/slicesRedcers/donationSlice";

const  DonationDetailPage = () => {
    const location = useLocation();
    const detail = useSelector(state => state.donation.detail)
    const { amount ,idDonation } = useSelector(state => state.donation.lastDonation)
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formatNumber = (number) => new Intl.NumberFormat().format(number)

    const handleSaveDonation = (amount) => {
        console.log(amount)
        dispatch(saveDonation({id:detail.id,amount}))
        setShow(false)
    }
    const handleDeleteDonation = () => {
        dispatch(deleteDonation())
    }

    useEffect(() => {

    },[show,detail])

    return (
        <>
            <HeaderComponent back={true}/>
            <article className={"content-page-detail"}>
                <h1 className={'title principalTitle'}>
                    {detail.first_name+" "+detail.last_name}
                </h1>
                <div className={'avatar avatar-content'}>
                    <img src={avatar1}/>
                </div>
                <p className={'description'}>
                    {detail.description}

                </p>
                <Grid className={'card-total'}>
                    <div className={'total-detail'}>
                        <p>TOTAL DONATIONS</p>
                        <span>{formatNumber(detail.donations)}</span>
                    </div>
                    <Divider component={'span'} orientation="vertical" flexItem variant={'middle'} style={{backgroundColor:'#666666'}}  />
                    <Divider component={'span'} orientation="horizontal" flexItem variant={'middle'} className={'divider-oculto'} style={{backgroundColor:'#666666',padding: "0.5px", display:"none"}}  />

                    <div className={'total-detail'}>
                        <p>TOTAL DONATED</p>
                        <span>{formatNumber(detail.total)}</span>
                    </div>

                </Grid>

                <div role={'button'} className={'card-total btn-custom'} onClick={idDonation == null ? handleShow : handleDeleteDonation}>
                    {idDonation == null ? "MAKE A DONATION" : "DELETE MY DONATION"}
                </div>
            </article>
            <ModalMakeDonation show={show} handleClose={handleClose} handleSave={handleSaveDonation}/>
        </>
    )

}

export default DonationDetailPage