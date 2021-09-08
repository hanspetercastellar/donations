import React from "react";
import HeaderComponent from "../components/header";
import ListDonations from "../components/donation/listDonations";


const DonationsPage = () => {

    return (
        <>
            <HeaderComponent/>

            <h1 className={'principalTitle'}>Donations</h1>
            <article className={"content-page"}>

                    <ListDonations/>
            </article>

        </>
    )
}

export default DonationsPage