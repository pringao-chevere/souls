import { ethers } from "ethers";
import { get, writable } from 'svelte/store';


const target_network = {
    name: "homestead",
    chainId: 1
};
// const target_network = {
//     name: "unknown",
//     chainId: 1337
// };



export let unlocked =  writable(false);
export let address = writable(null);
export let ENS = writable(null);

export let provider = null;
export let signer = null;
export let correct_network = writable(true);
export let wallet_injected = writable(true);

async function check_network(provider){
    let network = await provider.getNetwork();
    correct_network.set(network.chainId === target_network.chainId);
}

async function recheck_wallet(){
    await check_network(provider);

    let _signer = provider.getSigner();
    let _address = await _signer.getAddress();
    if(_address !== get(address)){
        address.set(_address);
        let _ens = await provider.lookupAddress( _address )
        ENS.set(_ens);

    }

    setTimeout(recheck_wallet,1000);
}



export async function unlock(){
    try {
        await window.ethereum.send('eth_requestAccounts');
    } catch (e) {
        console.log('Wallet request failed');
        console.log(e);
        return;
    }

    unlocked.set(true);
    const _provider = await new ethers.providers.Web3Provider(window.ethereum,"any");
    provider = _provider;

    const _signer = _provider.getSigner();
    signer = _signer;

    await check_network(provider);

    provider.on("network", (newNetwork, oldNetwork) => {
        check_network(provider);
    });

    address.set(await _signer.getAddress());

    recheck_wallet();
}
export default async function init() {
    if(typeof window.ethereum === "undefined"){
        wallet_injected.set(false);
        console.log('not injected!');
        return;
    }
}

init();
