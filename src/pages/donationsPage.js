import React from "react";
import HeaderComponent from "../components/header";
import ListDonations from "../components/donation/listDonations";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setDetail} from "../redux/slicesRedcers/donationSlice";
import Footer from "../components/footer";
import {Form, FormControl} from "react-bootstrap";


const DonationsPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDetail = (id) => {

        dispatch(setDetail(id))
        history.push('/detail',{id})
        console.log(id)
    }

    return (
        <>
            <HeaderComponent back={false}/>
            <header className={'header-main'}>
                <h1 className={'principalTitle'}>Donations</h1>
                    <Form.Select defaultValue="Choose...">
                        <option>Sort By Donations</option>
                        <option>Sort By User</option>
                    </Form.Select>
            </header>

            <article className={"content-page"}>

                <ListDonations handleDetail={handleDetail}/>
            </article>
            <Footer />
        </>
    )
}

export default DonationsPage