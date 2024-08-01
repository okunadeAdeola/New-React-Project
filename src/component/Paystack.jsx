import React, { useEffect, useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


const Paystack = () => {

    const newPaystack = useSelector((state) => state.counterReducer.cart);
    //   console.log(store);

    const [cartQuantity, setCartQuantity] = useState("")

    useEffect(() => {
        const updatedCartQuantity = newPaystack.reduce((total, newPaystack) => total + newPaystack.cartQuantity * newPaystack.price, 0);
        console.log(updatedCartQuantity);
        setCartQuantity(updatedCartQuantity)
    }, [newPaystack]);

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const payWithPayStack = (e) => {
      e.preventDefault();
      const publicKey = import.meta.env.VITE_APP_PAYSTACK_KEY;
      if (email === "" || firstName === "" || lastName === "") {
            Swal.fire('Error', 'All input fields are required', 'error');
        } else {
          
         
            const paystack = new PaystackPop();
            paystack.newTransaction({
                key: publicKey,
                amount: cartQuantity * 100,
                email,
                firstName,
                lastName,
                onSuccess(transaction) {
                    let message = `Payment Complete! Reference ${transaction.reference}`;
                    Swal.fire('Success', message, 'success');
                    setEmail("");
                    setAmount("");
                    setFirstName("");
                    setLastName("");
                },
                oncancel() {
                    Swal.fire('Cancelled', 'You have cancelled the transaction', 'info');
                }
            });
        }
    };

    return (
        <>
      
        <div className="flex justify-center text-gray-700 dark:text-gray-700 dark:bg-white text-sm">
          <div className="lg:w-[100%] w-[80%] ">
          <div className="">
          <div className="bg-white shadow-md rounded-lg p-2">
          <h3 className="text-white text-center bg-gray-700 p-2 rounded mb-4">Make Payment</h3>
                <form id="paymentForm">
                  <div className="mb-4">
                    <label htmlFor="email" className="block">Email Address</label>
                    <input
                      type="email"
                      id="email-address"
                      className="w-full border-gray-300 border-2 dark:bg-white dark:outline-gray-500  dark:border-gray-500 dark:text-gray-700 rounded-md p-1 focus:outline-gray-500 focus:border-gray-500"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="amount" className="block">($)Amount</label>
                    <input
                      type="tel"
                      id="amount"
                      placeholder={`$${cartQuantity}`}
                      disabled
                      className="w-full border-gray-300 border-2 rounded-md dark:bg-white dark:outline-gray-500  dark:border-gray-500 dark:text-gray-700 p-1 focus:outline-gray-500 focus:border-gray-500"
                      value={amount}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="first-name" className="block">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full border-gray-300 border-2 rounded-md p-1 dark:bg-white dark:outline-gray-500  dark:border-gray-500 dark:text-gray-700 focus:outline-gray-500 focus:border-gray-500"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="last-name" className="block">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full border-gray-300 border-2 rounded-md p-1 dark:bg-white dark:text-gray-700 dark:outline-gray-500  dark:border-gray-500 focus:outline-gray-500 focus:border-gray-500"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                  <button
                    className="bg-gray-700 text-white w-full py-2 rounded-md hover:bg-gray-900"
                    type="submit"
                    onClick={payWithPayStack}
                  >
                    PAY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      
      
        </>
    
    )
};


export default Paystack