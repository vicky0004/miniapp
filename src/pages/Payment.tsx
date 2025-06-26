import { useState } from 'react';
import {MiniKit} from "../sdk/minikit";
import { Tokens, Network } from "../sdk/payments";
import { type PayCommandInput } from '../sdk/commands';
function Payment() {
  const [form, setForm] = useState({
    to: '',
    amount: '',
    tip: '',
    fee: '',
    description: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e : any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {
    const paymentPayload: PayCommandInput = {
      to: form.to,
      amount: parseFloat(form.amount),
      tip: parseFloat(form.tip),
      fee: parseFloat(form.fee),
      network: Network.Kilt, // Assuming KILT is the default network
      token_symbol: Tokens.KILT, // Assuming KILT is the default token
      description: form.description,
    };

    try {
      const result = await MiniKit.commandsAsync.pay(paymentPayload);
      if (result.finalPayload.status === 'success') {
        setStatus('✅ Payment successful!');
      } else {
        setStatus('❌ Payment failed!');
      }
    } catch (error) {
      setStatus(`❌ ${error}`);
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <input name="to" placeholder="To" onChange={handleChange} type='text'/><br />
      <input name="amount" placeholder="Amount" onChange={handleChange} type="number" /><br />
      <input name="tip" placeholder="Tip" defaultValue={0} onChange={handleChange} type="number" /><br />
      <input name="fee" placeholder="Fee" onChange={handleChange} type="number" /><br />
      <input name="description" placeholder="Description" onChange={handleChange} /><br />
      <button onClick={handlePay}>Pay</button>
      <p >{status}</p>
    </div>
  );
}

export default Payment;
