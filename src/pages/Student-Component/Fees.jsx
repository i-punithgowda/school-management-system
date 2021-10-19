import React, { useState, useEffect } from 'react';
import GooglePayButton from '@google-pay/button-react';
import ImgFee from '../../images/card.png'
import Axios from 'axios';
const Fees = (props) => {
    const [success, setSuccess] = useState(false);
    const [ttlFees, setFees] = useState('');
    const [paid, setPaid] = useState('');
    const [pending, setPending] = useState(0);
    const [btnState,setBtnState] = useState(false);
    let roll = props.roll;

    useEffect(() => {
        loadFees()
    }, [])


    function loadFees() {
        Axios.post('http://localhost:3001/load-fees', {
            roll: roll,
        }).then((response) => {
            if (response.data === false) {
                alert('Unexpected error occured!!')
            } else {
                setFees(response.data[0].fee);
                setPaid(response.data[0].paid);
                if(response.data[0].fee-response.data[0].paid===0){
                    setPending('Fees completely paid')
                    setBtnState(false);
                }else{
                    setPending(response.data[0].fee-response.data[0].paid);
                    setBtnState(true);
                }
            }
        })
    }

    function handleSuccess() {
        setSuccess(true);
        updateDatabase()
       
    }

    function updateDatabase(){
        Axios.post('http://localhost:3001/update-fees-db',{
        paid:pending,
        roll:roll,
        }).then((response)=>{
            if(response.data === false){
                alert('Unextpected error occured!!');
            }else{
                loadFees()
                alert('Fees paid succesfully!!!');
            }
        })
    }

    return (
        <div className="fee-payment" style={{ width: "800px", height: "400px", backgroundColor: "crimson", marginLeft: "200px", marginTop: "100px",boxShadow: "10px 10px 5px rgba(0,0,0,0.5)"}}>

            <div className="fee-img-container">
                <img src={ImgFee} style={{ width: "400px", marginTop: "50px" }} />
            </div>

            <div className="feePayment" style={{ position: "absolute", left: "65%", top: "30%", color: "#f1f1f1" }}>
                <label class="btn btn-warning" disabled style={{ marginBottom: "60px", marginLeft: "40px", fontWeight: "bold", borderRadius: "8px", fontSize: "1.3rem" }} >Fee payment</label>
                {ttlFees && <h2>Total fees :- {ttlFees}</h2>}
                {paid && <h2>Fees paid :- {paid}</h2>}
                {pending && <h2> Balance :- {pending}</h2>}
                <br />
                
                {btnState && <div>
                <GooglePayButton
              
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: "CARD",
                                parameters: {
                                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: "PAYMENT_GATEWAY",
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId'
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: pending.toString(),
                            currencyCode: 'INR',
                            countryCode: 'IN',
                        },
                        shippingAddressRequired: false,
                        callbackIntents: ['PAYMENT_AUTHORIZATION'],
                    }}
                    onLoadPaymentData={paymentRequest => {
                        console.log('Payment request made')
                    }}
                    onPaymentAuthorized={paymentData => {
                        handleSuccess(paymentData)
                        return { transactionState: 'SUCCESS' }

                    }
                    }
                    onError={err=>{
                       console.log(err);
                    }}

                    onCancel={err=>{
                      alert('Payment cancelled');
                    }}
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='pay'
                />
               </div>}
                </div>



           


        </div>

    );
}

export default Fees;