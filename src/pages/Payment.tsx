import { useState } from 'react';
import {MiniKit} from "sdk-sporran-test";
import { Tokens, Network } from "sdk-sporran-test";
import { type PayCommandInput } from 'sdk-sporran-test';
import styles from './Payment.module.css'; 

function Payment() {
  const [form, setForm] = useState({
    to: '',
    amount: '',
    tip: '',
    fee: '',
    description: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {

    const { to, amount, tip, fee, description } = form;

    if (!to || !amount || !tip || !fee || !description) {
      alert('⚠️ Please fill in all fields before proceeding.');
      return;
    }

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
        console.log('final response : ' + JSON.stringify(result.finalPayload));
        setStatus('✅ Payment successful!');
      } else {
        setStatus('❌ Payment failed!');
      }
    } catch (error) {
      setStatus(`❌ ${error}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Payment</h2>
      <input name="to" placeholder="Reciever's Address" onChange={handleChange} type="text" className={styles.input} />
      <input name="amount" placeholder="Amount" onChange={handleChange} type="number" className={styles.input} />
      <input name="tip" placeholder="Tip" defaultValue={0} onChange={handleChange} type="number" className={styles.input} />
      <input name="fee" placeholder="Fee" onChange={handleChange} type="number" className={styles.input} />
      <input name="description" placeholder="Description" onChange={handleChange} className={styles.input} />
      <button onClick={handlePay} className={styles.button}>Pay</button>
      <p className={styles.status}>Status: {status}</p>
    </div>
  );
}

export default Payment;
