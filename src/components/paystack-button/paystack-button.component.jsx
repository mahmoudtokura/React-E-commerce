import React from "react";
import { PaystackButton } from "react-paystack";

import './paystack-button.styles.scss'

const PaystackCheckoutButton = ({ price }) => {
  const priceForPatstack = price * 100;

  const config = {
    reference: new Date().getTime(),
    email: "mahmoudbintokura@gmail.com",
    amount: priceForPatstack,
    publicKey: "pk_test_107cdd9de9afdc72fc17b84a7c715d7abc8a36e5",
  };

  const componentProps = {
    ...config,
    text: `Pay ${price}`,
    onSuccess: () => null,
    onClose: () => null,
  };

  return (
    <div>
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PaystackCheckoutButton;
