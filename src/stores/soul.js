import { ethers } from "ethers";
import { get, writable } from 'svelte/store';
import {provider, signer, address,unlock} from "./wallet.js";

const contractAddress = "0x1f9695C836eC9d12391Ed46cf4fc50dA664F5Dc2";
const contractAbi = ["event Approval(address indexed _owner,address indexed _approved,uint256 indexed _tokenId)","event ApprovalForAll(address indexed _owner,address indexed _operator,bool _approved)","event Transfer(address indexed _from,address indexed _to,uint256 indexed _tokenId)","function approve(address _approved,uint256 _tokenId) nonpayable","function balanceOf(address _owner) view returns(uint256 )","function getApproved(uint256 _tokenId) view returns(address )","function isApprovedForAll(address _owner,address _operator) view returns(bool )","function name() view returns(string _name)","function ownerOf(uint256 _tokenId) view returns(address )","function safeTransferFrom(address _from,address _to,uint256 _tokenId) nonpayable","function safeTransferFrom(address _from,address _to,uint256 _tokenId,bytes data) nonpayable","function separate() nonpayable","function setApprovalForAll(address _operator,bool _approved) nonpayable","function supportsInterface(bytes4 interfaceID) view returns(bool )","function symbol() view returns(string _symbol)","function tokenByIndex(uint256 _index) view returns(uint256 )","function tokenOfOwnerByIndex(address _owner,uint256 _index) view returns(uint256 )","function tokenURI(uint256 _tokenId) view returns(string )","function totalSupply() view returns(uint256 )","function transferFrom(address _from,address _to,uint256 _tokenId) nonpayable"];

let contract = null;
let contractWithSigner = null;

export let waiting = writable(false);
export let separating = writable(false);

export let contract_address = writable(contractAddress);

export let balance = writable(0);
export let exorcised = writable(false);
export let not_myself = writable(false);
export let image = writable('0');

const unsubscribe = address.subscribe(async value => {
    if(!value) return;
    resetPastEvents();
    await update();
    await processPastEvents();
});

let me_padded = '';
let collection = {

}
let parsed_events = {};


function parse_transfer(event){
    if(!parsed_events[event.blockNumber]){
        parsed_events[event.blockNumber] = {};
    }
    if(parsed_events[event.blockNumber][event.logIndex]){
        return;
    }
    parsed_events[event.blockNumber][event.logIndex] = true;

    let _me = me_padded;

    let _from   = event.topics[1].toLowerCase();
    let _to     = event.topics[2].toLowerCase();
    let _id     = event.topics[3].toLowerCase();

    let toMe =      _to === _me;
    let fromMe =    _from === _me;
    let isMe =      _id === _me;

    if(isMe){
        exorcised.set(true);
        separating.set(false);
    }
    if(fromMe){
        balance.update( n => n - 1);
    }
    if(toMe){
        balance.update( n => n + 1);
    }

    if(isMe && toMe){
        not_myself.set(false);
    }else if(isMe && fromMe){
        not_myself.set(true);
    }

}

export async function connect(){

    contract = new ethers.Contract(contractAddress, contractAbi, provider);
    contractWithSigner = contract.connect(signer);

    await processPastEvents();

    contractWithSigner.on( "Transfer" , (author,oldValue,newValue,event)=>{
        parse_transfer(event);
    } );
}
function resetPastEvents(){
    balance.set(0);
    exorcised.set(false);
    not_myself.set(false);
    image.set('0');
}

async function processPastEvents(){
    if(!contractWithSigner) return;

    waiting.set(true);
    let filter = contractWithSigner.filters.Transfer();
    let all = await contractWithSigner.queryFilter(filter);
    parsed_events = {};
    all.forEach(evt => {
        parse_transfer(evt);
    });
    waiting.set(false);
}




export async function separate(){
    console.log('do separation');
    separating.set(true);
    try{
        await contractWithSigner.separate();
    }catch (e) {
        console.log('fail separation');
        console.log(e);
        separating.set(false);
        return;
    }
    console.log('done separation func');
}

function updateMyData(){
    const me = get(address);
    me_padded = ethers.utils.hexZeroPad(get(address), 32).toLowerCase();
    let img = BigInt(me)%256n;
    img = String(Number(img)+1000).substr(-3,3);
    image.set(img.toString());
}

export async function update(){
    waiting.set(true);
    updateMyData();
    waiting.set(false);
}

export default async function init() {
    if(typeof window.ethereum === "undefined"){
        return;
    }
    await unlock();
    await connect();
    await update();
}

init();