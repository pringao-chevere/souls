<script>
    import {address, ENS, unlocked,unlock,correct_network,wallet_injected} from "./stores/wallet.js";
    import {connect, balance, exorcised, not_myself,waiting,separate, update, separating,contract_address,image} from "./stores/soul";

    // import {Skwid} from "./stores/test";

    function doTest(){
        try{
            // // setTimeout(()=>{
            //     let tokenId = 5;
            //     let hash = "0x0692fa1183ad041b40e0fbcab7f965875b1b14dcca44423fb86db3433454a1c0";
            //     let atomicNumber = 12;
            //     let quality = 1;
            //     Skwid(tokenId,hash,atomicNumber,quality);
            // // },100);

            // let j = 0;
            // for(let i = 0; i < 10000000; i++){
            //     j += i;
            //     if(j % 10000 === 0) console.log(j);
            // }

            let a = new AudioContext();
            a.gainNode = a.createGain();
            a.gainNode.connect(a.destination);

            let oscillator;

            oscillator = a.createOscillator();
            oscillator.connect(a.gainNode);
            oscillator.frequency.setValueAtTime(440, a.currentTime);
            oscillator.type = 'triangle';
            a.gainNode.gain.setValueAtTime(1, a.currentTime);
            oscillator.start();

        }catch(e){
            alert(e);
        }
    }

    let r = 0, j = 0;
    let glitches = [0,0,0,0,0,0,0,0,0,0];
    let glitch_rows = [];
    let row_indexes = [];
    for(let i = 0; i < 25; i++){
        glitch_rows[i] = 0;
        row_indexes[i] = i;
    }

    setInterval(()=>{

        r = Math.random();
        for(let g = 0; g < 10; g++){
            glitches[g] = glitch(g+1);
        }
        for(let row = 0; row < glitch_rows.length; row++){
            glitch_rows[row] = bg_glitch(row+1);
        }
    },50);
    function glitch(j){
        let i, rr = (r * j)%1;
        if (rr < 0.92){
            i = 0;
        }else if(rr < 0.94){
            i = 1;
        }else if(rr < 0.96){
            i = 2;
        }else if(rr < 0.98){
            i = 3;
        }else{
            i = 4;
        }
        return "glitch"+i;
    }
    function bg_glitch(j){
        let i, rr = (r * j)%1;
        rr *= 20;

        if (rr > 0.2){
            i = 0;
        }else if(rr > 0.15){
            i = 1;
        }else if(rr > 0.10){
            i = 2;
        }else if(rr > 0.05){
            i = 3;
        }else{
            i = 4;
        }
        return "bg-glitch"+i;
    }
    let ellipses = "";
    setInterval(()=>{
        if(ellipses === "...") {
            ellipses = "";
        }else{
            ellipses += ".";
        }
    },1000);

</script>


<div class="grid-bg">
    {#each row_indexes as row}
        <div class="grid-item {glitch_rows[row]}">&nbsp;</div>
    {/each}
</div>





<div class="game-font flex flex-column justify-center items-center min-h-100">
    <div class=" vh-100 flex flex-column align-items-centre main_width items-center justify-center" >
        {#if !$wallet_injected}
            <h3 class="{glitches[0]}">Wallet not found</h3>
            <div class="my-soul-data {glitches[1]}">Please use an injected wallet like <a href="https://metamask.io/">MetaMask</a></div>
        {:else if !$unlocked}
            <button
                    class="button {glitches[0]}"
                    on:click={async ()=>{
        await unlock();
        await connect();
        await update();
    }}>
                &gt;&gt;  Unlock Wallet &lt;&lt;
            </button>
        {:else}
            {#if !$correct_network}
                <h3 class="{glitches[0]}">Incorrect Network</h3>
                <h3 class="{glitches[1]}">Please switch to the Ethereum Mainnet</h3>
            {:else if $waiting}
                <h3 class="{glitches[0]}">Loading{ellipses}</h3>
            {:else if $separating}
                <h3 class="{glitches[0]}">{ellipses}Separating{ellipses}</h3>
            {:else}

                {#if !$exorcised}
                    <button class="button {glitches[0]}" on:click={async ()=>{
                await separate();
            }}>
                        &gt;&gt;  Separate &lt;&lt;
                    </button>
                {:else}
                    {#if $not_myself}
                        <h3 class="{glitches[0]}">Somebody else owns your soul.</h3>
                    {:else}
                        <h3 class="{glitches[1]}">Your soul is on chain</h3>
                        <img
                                alt="Your soul"

                                src="https://raw.githubusercontent.com/pringao-chevere/soul-images/main/images/soul0{$image}.png"
                                class="my-soul-image image-{glitches[2]}"
                        />
                        <div class="my-soul-data {glitches[7]} pt3">This is the immortal soul of</div>
                        <div class="my-soul-data {glitches[8]}">{$ENS ? $ENS : $address}</div>
                    {/if}

                {/if}



                {#if $balance > 1 || ($balance === 1 && $not_myself)}
                    <h3
                            class="pt3 {glitches[3]}"
                    >Soul Collector</h3>
                    <p class="{glitches[4]}">

                        {#if $not_myself}
                            You own {$balance} {$balance>1?"people's souls":"person's soul"}.
                        {:else}
                            You own {$balance - 1} {$balance - 1>1?"people's souls":"person's soul"}.
                        {/if}
                    </p>
                {/if}

            {/if}
        {/if}

    </div>
</div>


<div class="code flex justify-center items-center ">
    <div class="pa5 tc main_width ">
        {#if $wallet_injected && $unlocked && $correct_network && !$exorcised}
            <p class="{glitches[9]}">Separate from your immortal soul and store it on the Blockchain</p>
        {/if}
        <h3 class="{glitches[1]}">What is this all about?</h3>
        <p  class="{glitches[2]}">EtherSouls is an Ethereum project that allows you to separate your immortal human soul from your body and store it on the Mainnet as an ERC721 token. Once minted, the token is yours to do with as you please. Keep it safe, or sell your soul to the highest bidder...</p>
        <h3 class="{glitches[3]}">Does it cost anything?</h3>
        <p  class="{glitches[4]}">EtherSouls does not collect any fees. The only ETH you have to pay is the transaction fee to mint your ERC721 soul. You may end up paying a price if you sell your soul to the wrong buyer... but that has nothing to do with crypto.</p>
        <h3 class="{glitches[5]}">Can I do it more than once?</h3>
        <p  class="{glitches[6]}">Each address can mint only one ERC721 soul, the smart contract won't allow you to do it twice. If you have two ETH addresses you could therefore mint two tokens, but then your soul would forever be split in two, and you will be cursed to live an enldess half-life, not truly alive, but unable to die.</p>

        <h5 class="pt5 tl {glitches[7]}">Nerd stuff</h5>
        <p class="tl {glitches[8]}">Contract Address: <a href="https://etherscan.io/address/{$contract_address}">{$contract_address}</a></p>
        <p class="tl {glitches[9]}">Code: <a href="https://github.com/pringao-chevere/souls">GitHub</a></p>
    </div>
</div>




<button on:click={doTest}>
    Test
</button>