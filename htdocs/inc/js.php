
var metamask_enable = 1;


if (typeof window.ethereum !== 'undefined') 
{
  console.log('MetaMask is installed!');
x = document.getElementById('metamas_btn');
x.innerHTML = 'Connect Metamask';
x = document.getElementById('infoNetwork');
  x.innerHTML = '';
  x.classList.add('invisible');
}
else
{
x = document.getElementById('metamas_btn');
x.innerHTML = 'Connect Metamask';
  x.classList.add('invisible');

x = document.getElementById('infoNetwork');
  x.innerHTML = 'Metamask not installed. If you need Metamask Functions - Go to <a href=https://metamask.io/ target=_blank>https://metamask.io/</a>';
//  document.querySelector('.infoNetwork').innerHTML = 'Metamask not installed. If you need Metamask Functions - Go to <a href=https://metamask.io/ target=_blank>https://metamask.io/</a>';
  metamask_enable = 0;
}

//=======================================
if(metamask_enable)
{
var global_wal = '';
const provider = new ethers.providers.Web3Provider(window.ethereum);
//console.log(provider);
const signer = provider.getSigner()
console.log(signer);

metamas_btn = document.getElementById('metamas_btn');
metamas_btn.addEventListener('click', () => {
  getAccount();
  setInterval();
});




 	// init
	getAccount();
	setInterval(getAccount,10000);











async function getAccount() 
{
  console.log('FUNC getAccount start');
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  account = accounts[0];
  var x = document.getElementById("tbl_div");
  metamas_btn.innerHTML = account;
  global_wal = account;
  if(account)
  {
	on_account_changes(account);
	check_claim_enable(account);
	x.className = '';
  }
  else
  {
	  x.className = 'container invisible';
  }

//  if(account != undefined)
//  getBalance(account);

//  const account2 = accounts[1];
//  showAccount2.innerHTML = account2;
}
async function getChainId()
{
	chainId = await ethereum.request({ method: 'eth_chainId' });
	onChainChange(chainId);
}


ethereum.on('accountsChanged', function (accounts) {
//  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  // Time to reload your interface with accounts[0]!
	account = accounts[0];
	on_account_changes(account);
});

function on_account_changes(account)
{
  var x = document.getElementById("tbl_div");

  if(account)
  {
  metamas_btn.innerHTML = account;
  check_claim_enable(account);
  global_wal = account;
  x.className = '';
//  x.innerHTML = 'container invisible';
  }
  else
  {
  metamas_btn.innerHTML = 'Connect METAMASK';
  x.className = 'container invisible';
  }
//  if(account != undefined)
//  getBalance(account);


}



contractClaim = "0xaE11D21B972f63E0Be2463b568e2AFd2B08B6B1A";
const abiClaim = [
  // Some details about the token
	"function ClaimCheckEnable(address addr) view returns(bool)",
	"function ClaimCheckAmount(address addr) view returns(uint256)",
	"function TokenBalance()public view returns(uint256)",
	"function Sended(address addr)public view returns(uint256)"
];

const cClaim = new ethers.Contract(contractClaim, abiClaim, provider);

async function check_claim_enable(addr)
{
	var txt;
	var val;
	var x = document.getElementById('w_token_amount');
	val = await cClaim.TokenBalance();
	console.log("DAF balance: "+val);
	val /= 10**18;
	x.innerHTML = val;

	x = document.getElementById('w_caimed');
	val = await cClaim.Sended(addr);
	val /= 10**18;
	x.innerHTML = val;
	
	val = await cClaim.ClaimCheckEnable(addr);
	x = document.getElementById('w_status');
	var y = document.getElementById('w_amount');
	var z = document.getElementById('claim_but');
	console.log("Addr "+addr+" Status: "+val);
	if(val)
	{
		txt = "Enabled";
		x.className = 'btn btn-success btn-sm';
		//check_claim_enable(addr);
		check_claim_amount(addr);

		z.className = 'btn btn-success btn-sm';

	}
	else 
	{
		x.className = 'btn btn-secondary btn-sm';
		txt = "Disabled";
		y.className = 'btn btn-secondary btn-sm';
		y.innerHTML = '0';

		z.className = 'invisible';
	}

	x.innerHTML = txt;
}
async function check_claim_amount(addr)
{
	var val;
	var x = document.getElementById('w_amount');
	val = await cClaim.ClaimCheckAmount(addr);
	if(val)
	{
		//val /= 10**18;
		console.log("Addr "+addr+" Amount: "+val);
		x.className = 'btn btn-success btn-sm';
		x.innerHTML = val;
	}
	else
	{
		x.className = 'btn btn-secondary btn-sm';
		x.innerHTML = '0';
	}
}

x = document.getElementById('claim_but');
x.onclick = claim_tkn;

function claim_tkn()
{
	console.log("start claiming: "+global_wal);
	send_tx(global_wal);
}

function send_tx(wal)
{
var data = "";
data += "0x0c7ef932000000000000000000000000";
var t = wal.substring(2);
data += t;
console.log("data: "+data);

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: wal,
          to: contractClaim,
          value: '0x0',
	  data: data,
        },
      ],
    })
//    .then((txHash) => console.log(txHash))
    .then((txHash) => setTx(txHash))
    .catch((error) => console.error);
}

function setTx(txHash)
{
	var x = document.getElementById('tx_res');
	var url = 'https://ropsten.etherscan.io/tx/';
	url += txHash;
	txt = "<a href="+url+" target=_blank>"+txHash+"</a>";
	console.log(url);
	x.innerHTML = txt;
	x.className = 'alert alert-success';
}

}
//=======================================
