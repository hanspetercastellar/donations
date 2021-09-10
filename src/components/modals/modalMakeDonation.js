import React, {useState} from 'react';

import {Alert, Badge, Button, FormControl, Modal} from "react-bootstrap";

export default function ModalMakeDonation({show, handleClose, handleSave}) {

    const [amount, setAmount] = useState('');


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
               // backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title  >Make Donation</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className={'subtitle text-center'}>Add the amount to donate</p>
                    <FormControl type={'number'} value={amount} onChange={(el) => setAmount(el.currentTarget.value) } size={'lg'} className={'p-3 w-75 input-amount'} placeholder={'$ Amount to donate'}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={'borderGradient'} onClick={() => {
                        handleSave(amount)
                        setAmount("")
                    }}>Save Donation</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}