import './App.css';
import Web3 from 'web3'
import { useState } from 'react';
function App() {
async function loadData(){
  const web3=new Web3(Web3.givenProvider || "http://localhost:8545")
  const network= await web3.eth.net.getNetworkType();
  setAccount(await web3.eth.getAccounts())
} 
const [account,setAccount]=useState(null);

  return (
    <div className="container">
      <h1>asdf asdf asd fasd fasdf</h1>
      <p>Account: {account}</p>
      <button onClick={loadData}>hii</button>
    </div>
  );
}

export default App;
