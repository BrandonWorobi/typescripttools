import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID'));

async function getBalance() {
  const account = '0x0000000000000000000000000000000000000000';
  const balance = await web3.eth.getBalance(account);
  console.log(`Balance of ${account}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
}

getBalance();