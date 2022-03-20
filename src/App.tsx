import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './utils/globalState';

function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  const [moneyAmount, setMoneyAmount] = useState("");

  // type PracObjectType = {
  //   ldjflk: string;
  //   fadf: number;
  // }

  const withdrawAmount = (leavingAmount: number) => {
    if (amount === 0 || amount - leavingAmount < 0) {
      return 0;
    } else {
      return leavingAmount;
    }
  };

  const stringToNum = (moneyInput: string) => {
    let x = parseInt(moneyInput)
    return x;
  };


  return (
    <div className="App">
      <h1>Current Balance: {amount}</h1>
      <input
        value={moneyAmount}
        onChange={(evt) => setMoneyAmount(evt.target.value)}
      />
      <button onClick={() => depositMoney(stringToNum(moneyAmount))}>Deposit</button>
      <button onClick={() => withdrawMoney(withdrawAmount(stringToNum(moneyAmount)))}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
