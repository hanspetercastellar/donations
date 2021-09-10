import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {identifier} from "../redux/slicesRedcers/donationSlice";

const Footer = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const navitation = useSelector(state => state.donation.pagination);
    const donations = useSelector(state => state.donation.donations)

    const handlePrev = () => {
        let skip = donations.length - 5
        dispatch({type:identifier.FETCH_DONATION,payload:{ skip,limit:5,sort:"id"}})
    }
    const handleNext = () => {
        let skip = donations.length + 1
        dispatch({type:identifier.FETCH_DONATION,payload:{ skip,limit:5,sort:"id"}})
    }
    useEffect(() => {

    },[donations])
    return (
        <footer className={'main-footer'}>
            <div className={'content-btm'}>
                <Button className={'btn-prev'} onClick={() => handlePrev()}>
                    Prev
                </Button>
                <Button className={'btn-next'} onClick={() => handleNext()}>
                    Next
                </Button>
            </div>
        </footer>
    )
}

export default Footer