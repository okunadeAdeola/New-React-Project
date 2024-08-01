import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import Paystack from './Paystack';



const Checkout = () => {
    const store = useSelector((state) => state.counterReducer.cart);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [cartQuantity, setCartQuantity] = useState("")
    useEffect(() => {
        const updatedCartQuantity = store.reduce((total, store) => total + store.cartQuantity * store.price, 0);
        localStorage.setItem('amount', JSON.stringify(updatedCartQuantity))
        setCartQuantity(updatedCartQuantity)
    }, [store]);
    return (
        <>
            <div className='border bg-gray-700 text-white p-5  lg:ms-[70%] ms-5 text-sm rounded-md mt-20 text-center lg:w-[30%] w-[90%]'>
                <p className=''>CART SUMMARY</p>
                <div className='flex lg:gap-[60%] gap-[60%]'>
                    <span className=''>Sub Total</span>
                    <span className=''>${cartQuantity}</span>
                </div>
                <div className='bg-white mt-2 rounded w-[100%]'>

                    <Button className='bg-white font-bold text-gray-700 w-[100%]' onClick={onOpen}>CHECKOUT</Button>
                </div>
            </div>

            <Modal className='dark:bg-white dark:text-gray-700 ' isOpen={isOpen} onClose={onClose} isDismissable={false}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <Paystack />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Checkout