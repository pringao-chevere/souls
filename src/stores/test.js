export function Skwid(tokenId, hash, atomicNumber,quality){

    function Instruments(){

        const all_instruments = {
            // metronome: [{
            //     name: 'metronome',
            //     options:{
            //         gain:1
            //     },
            // }],

        };
        function register_instrument(type,a,b,c,d){
            let category, name,options,components;
            if(type === 'percussion' || type === 'fx'){
                category = a;
                name = b;
                options = c;
                components = d;

                options.category = category;
            }else{
                name = a;
                options = b;
                components = c;
            }

            if(!all_instruments[type]) all_instruments[type] =[];
            all_instruments[type].push([name,options,components]);
        }



        function create_filter(options){
            return options;
        }

        function create_delay(options){
            return options;
        }
        function create_panner(options){
            return options;
        }
        function create_reverb(options){
            return options;
        }



        // KICK 909

        register_instrument('percussion','kick','kick909',
            {
                gain: 1.2,          //0-inf

                monotone: 'E1',

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.3,           //sec
                duration: 0.25, //beats
                max:0.95,        //0-inf (but really 0-1)

                a_pitch: 0,             //sec
                d_pitch: 0.245,         //sec
                s_pitch: -48,           //(multiple of base freq)
                r_pitch: 0.5,           //sec
                duration_pitch:0.245,   //beats
                max_pitch: 24,          //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune: 0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune: 0,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 2,             //0-inf
                    freq: 1000,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 1.5,         //sec
                // decay: 20,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 1000,         //hz
                // amount: 0.4,           //0-1 (1 = 100% wet)
                // }),


            });

// KICK 808

        register_instrument('percussion','kick','kick808',
            {

                gain: 10,          //0-inf

                monotone: 'A1',

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:1,           //sec
                s:0.001,           //(0-inf) (but really 0-1)
                r:0.3,           //sec
                duration: 0.5, //beats
                max:0.95,        //0-inf (but really 0-1)

                // a_pitch: 0,             //sec
                // d_pitch: 0.245,         //sec
                // s_pitch: -48,           //(multiple of base freq)
                // r_pitch: 0.5,           //sec
                // duration_pitch:0.245,   //beats
                // max_pitch: 24,          //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune: 0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune: -2400,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 6,             //0-inf
                    freq: 200,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 1.5,         //sec
                // decay: 20,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 1000,         //hz
                // amount: 0.4,           //0-1 (1 = 100% wet)
                // }),

            });



// KICK GOA

        register_instrument('percussion','kick','kickgoa',
            {

                gain: 1,          //0-inf

                monotone: 'E1',

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.8,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.5, //beats
                max:0.95,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 0.2,          //sec
                s_pitch: -48,          //(multiple of base freq)
                r_pitch: 0.5,          //sec
                duration_pitch:0.245,    //beats
                max_pitch: 35,        //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune: 0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune: 0,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 2,             //0-inf
                    freq: 900,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 1.5,         //sec
                // decay: 20,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 1000,         //hz
                // amount: 0.4,           //0-1 (1 = 100% wet)
                // }),


                // });

            });



// SNARE 1

        register_instrument('percussion','snare','snare1',
            {
                gain: 10,          //0-inf

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.3,           //sec
                s:0.05,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.3, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents


            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 2000,        //Hz
                    gain: 1,        //0-inf
                    // input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1.5,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 3000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


                // });

            });

// SNAREPSY

        register_instrument('percussion','snare','snarepsy',
            {
                gain: 10,          //0-inf

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.3,           //sec
                s:0.05,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.3, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents


            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 2000,        //Hz
                    gain: 1,        //0-inf
                    // input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1.5,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 3000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


                // });

            });




// SHAKER

        register_instrument('percussion','perc','shaker',
            {

                gain: 0.8,          //0-inf

                noise: true,    //true/false


                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0.2,          //0-inf

                a:0.1,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-10,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 25,      //Hz
                    lfo_gain: 1000,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 20,             //0-inf
                    freq: 6000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });



// HIHAT Closed

        register_instrument('percussion','hat','hihatclosed',
            {
                gain: 1.5,          //0-inf

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.05,           //sec
                s:0.05,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.3, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents


            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 12000,        //Hz
                    gain: 1,        //0-inf
                    // input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1.5,         //sec
                    decay: 25,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 3000,         //hz
                    amount: 0.2,           //0-1 (1 = 100% wet)
                }),


                // });

            });


// HIHAT Open

        register_instrument('percussion','hat','hihatopen',
            {
                gain: 1,          //0-inf

                // monotone: 'E1',

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.1, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 9,             //0-inf
                    freq: 10000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                delay: create_delay({
                    delay: 0.02,        //beats
                    feedback: 0.1,   //0-1
                }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 1.5,         //sec
                // decay: 20,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 1000,         //hz
                // amount: 0.4,           //0-1 (1 = 100% wet)
                // }),


                // });

            });



// CLAP

        register_instrument('percussion','clap','clap',
            {
                gain: 15,          //0-inf

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:0.09,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.3, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents


            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 10,             //0-inf
                    freq: 1400,        //Hz
                    gain: 2,        //0-inf
                    // input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


                // });

            });


// POPCORN DRUM

        register_instrument('percussion','perc','popcorndrum',
            {
                gain: 10,          //0-inf

                monotone: 'C2',

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.005,           //sec
                s:0.05,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.01, //beats
                max:0.8,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 0.1,          //sec
                s_pitch: -100,          //(multiple of base freq)
                r_pitch: 0,          //sec
                duration_pitch:0.5,    //beats
                max_pitch: 64,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.6,      //Hz
                    lfo_gain: 500,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 2,             //0-inf
                    freq: 750,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                // delay: create_delay({
                // delay: 0.333,        //beats
                // feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                // pan: 0,            //-1 (left) 1 (right)
                // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq:2,     //Hz
                // lfo_gain: 2,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false,      //true/false (reversed tail)
                    freq: 2000,          //hz
                    amount: 0.2,         //0-1 (1 = 100% wet)
                }),


            });



// WOOD BLOCK

        register_instrument('percussion','perc','woodblock',
            {

                gain: 1.2,          //0-inf

                noise: false,    //true/false

                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.05,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.1, //beats
                max:0.9,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 0.1,          //sec
                s_pitch: -48,          //(multiple of base freq)
                r_pitch: 0,          //sec
                duration_pitch:0.1,    //beats
                max_pitch: 36,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{

                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 15,             //0-inf
                    freq: 750,        //Hz
                    gain: 10,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.05,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: true,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1.2,         //sec
                    decay: 15,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 6000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


                // });

            });

// LAZER DRUM

        register_instrument('percussion','perc','lazerdrum',
            {

                gain: 9,          //0-inf

                noise: false,    //true/false

                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.05,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 0.1, //beats
                max:0.9,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 0.2,          //sec
                s_pitch: -48,          //(multiple of base freq)
                r_pitch: 0,          //sec
                duration_pitch:0.1,    //beats
                max_pitch: 48,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{

                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 1000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.01,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: true,  //true/false. true means its inverted
                    duration: 0.09,     //beats
                }),

                delay: create_delay({
                    delay: 0.07,        //beats
                    feedback: 0.5,   //0-1
                }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1.2,         //sec
                    decay: 15,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 6000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


                // });

            });


// BASS 1 - synthwave 80s short

        register_instrument('bass','synthwave80s',
            {
                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                r:0.01,
                a:0,
                duration: 0.1,
                gain: 1,         //0-inf

                osc_0_type: 'sine',
                osc_0_detune: 0,
                osc_1_type: 'square',
                osc_1_detune: 0,

                // a_pitch: 0,  //sec
                // d_pitch: 0.245,  //sec
                // s_pitch: -48,  //(multiple of base freq) ST
                /// r_pitch: 0.5,  //sec
                // duration_pitch: 0.245,    //sec
                // max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 1000,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay(beatsToSeconds(1)),
                // panner: create_panner({


                // reverb: create_reverb()


            });




// BASS 2 - natural bass octave double

        register_instrument('bass','naturaloctavebass',
            {
                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                r:0.2,
                a:0,
                duration: 0.2,
                gain: 1,         //0-inf

                osc_0_type: 'triangle',
                osc_0_detune: 0,
                osc_1_type: 'sine',
                osc_1_detune: -1300,

                // a_pitch: 0,  //sec
                // d_pitch: 0.245,  //sec
                // s_pitch: -48,  //(multiple of base freq) ST
                /// r_pitch: 0.5,  //sec
                // duration_pitch: 0.245,    //sec
                // max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({
                    freq: 450,
                    Q: 1,
                    type:'lowpass',
                    gain: 3,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                }),

                // delay: create_delay(beatsToSeconds(1)),
                // panner: create_panner({


                // reverb: create_reverb()


            });




// SQUARE SYNTH BASS

        register_instrument('bass','squaresynthbass',
            {
                gain: 1,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:1,          //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 0.1, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 500,        //Hz
                    gain: 1.7,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0.01,             //sec
                    d: 1,             //sec
                    s: 0.5,             //0-1 (1 = 100%)
                    r: 1,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.5,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 2,         //sec
                // decay: 30,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 2000,         //hz
                // amount: 0.3,           //0-1 (1 = 100% wet)
                // }),



            });



// FINGER PICKED BASS

        register_instrument('bass','fingerpickedbass',
            {
                gain: 0.9,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0.001,           //sec
                d:0.1,           //sec
                s:0.3,          //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                // max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 500,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.1,             //sec
                    s: 0.8,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 0.05,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                //     duration: 4,         //sec
                //     decay: 10,           //0-inf (higher = faster decay)
                //     reverse: true/false, //i dont actually know what reverse reverb is but you can play with this
                //     freq: 10000,         //hz
                //     amount: 1,           //0-1 (1 = 100% wet)
                // }),


            });

// PSYTRANCE BASS

        register_instrument('bass','psytrancebass',
            {

                gain: 2,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.3,           //sec
                duration: 0.15, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 700,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                //     duration: 4,         //sec
                //     decay: 10,           //0-inf (higher = faster decay)
                //     reverse: true/false, //i dont actually know what reverse reverb is but you can play with this
                //     freq: 10000,         //hz
                //     amount: 1,           //0-1 (1 = 100% wet)
                // }),


            });


// DEEP HOUSE BASS

        register_instrument('bass','deephousebass',
            {

                gain: 2.5,          //0-inf

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0.001,           //sec
                d:1,           //sec
                s:0.0001,           //(0-inf) (but really 0-1)
                r:1,           //sec
                duration: 0.9, //beats
                max:0.95,        //0-inf (but really 0-1)

                // a_pitch: 0,             //sec
                // d_pitch: 0.245,         //sec
                // s_pitch: -48,           //(multiple of base freq)
                // r_pitch: 0.5,           //sec
                // duration_pitch:0.245,   //beats
                // max_pitch: 24,          //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune: 0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune: -2400,          //cents

                // },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 4,             //0-inf
                    freq: 600,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 1.5,         //sec
                // decay: 20,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 1000,         //hz
                // amount: 0.4,           //0-1 (1 = 100% wet)
                // }),

            });

//
// NEURO BASS

        register_instrument('bass','neurobass',
            {

                gain: 1,          //0-inf

                // monotone: 'E1',

                maxNote: 'G2',

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.5,           //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 0.25, //beats
                max:1,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 0.1,          //sec
                s_pitch: 0,          //(multiple of base freq)
                r_pitch: 0,          //sec
                duration_pitch:0.05,    //beats
                max_pitch: 4,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf

                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 3,             //0-inf
                    freq: 2000,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                // pan: 0,            //-1 (left) 1 (right)
                // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq:0.1,     //Hz
                // lfo_gain: 0,      //0-inf
                // }),

                // reverb: create_reverb({
                // duration: 0.01,         //sec
                // decay: 0.01,           //0-inf (higher = faster decay)
                // reverse: false, //i dont actually know what reverse reverb is but you can play with this
                // freq: 1000,         //hz
                // amount: 1,           //0-1 (1 = 100% wet)
                // }),


            });


//



// RES PUNCH DELAY (delay time adjust)

        register_instrument('fx','stab','respunchdelay',
            {
                gain: 1,          //0-inf

                useSeconds: true,

                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                a:0,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                osc_0_type: 'sine',
                osc_0_detune: 0,
                osc_1_type: 'sine',
                osc_1_detune: 0,

                a_pitch: 0,  //sec
                d_pitch: 0.5,  //sec
                s_pitch: -24,  //(multiple of base freq) ST
                r_pitch: 0.5,  //sec
                duration_pitch: 0.245,    //sec
                max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 200,    //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 2,             //0-inf
                    freq: 2000,        //Hz
                    gain: 1,        //0-inf
                    //     input_gain: 1     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0,             //sec
                    s: 0,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 0,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                }),

                delay: create_delay({
                    delay: 0.375,       //beats
                    feedback: 0.75   //0-1 (1 = 100%)
                }),
                // panner: create_panner({


                reverb: create_reverb({
                    duration: 1,         //sec
                    decay: 2,           //0-inf (higher = faster decay)
                    reverse: false,      //true/false (reversed tail)
                    freq: 8000,          //hz
                    amount: 0.5,         //0-1 (1 = 100% wet)
                }),


            });



// REVERSE POPCORN

        register_instrument('fx','stab','reversepopcorn',
            {
                gain: 5,          //0-inf

                //noise: false,    //true/false

                maxNote: 'C3',

                useSeconds: true,

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.02,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:1,           //sec
                duration: 0.1, //beats
                max:0.8,        //0-inf (but really 0-1)

                a_pitch: 0.5,          //sec
                d_pitch: 0.5,          //sec
                s_pitch: 5,          //(multiple of base freq)
                r_pitch: 0,          //sec
                duration_pitch:0.5,    //beats
                max_pitch: 0.9,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 1,      //Hz
                    lfo_gain: 200,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 320,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                delay: create_delay({
                    delay: 0.333,        //beats
                    feedback: 0.5,   //0-1
                }),

                // panner: create_panner({
                //     // pan: 0            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1,         //sec
                    decay: 2,           //0-inf (higher = faster decay)
                    reverse: true,      //true/false (reversed tail)
                    freq: 8000,          //hz
                    amount: 0.5,         //0-1 (1 = 100% wet)
                }),


            });



// BP SWEEP UP

        register_instrument('fx','sweepup','bpsweepup',
            {

                gain: 2,          //0-inf

                // monotone: 'E1',

                useSeconds: false,

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:[8,'beats'],           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 8, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf

                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 5000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: [7.5,'beats'],             //sec
                    d: [7.5,'beats'],             //sec
                    s: 1,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 8,     //beats
                }),

                // delay: create_delay({
                //     delay: 0.25,        //beats
                //     feedback: 0.4,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:[0.75,'beats'],     //Hz
                    lfo_gain: 1,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 10000,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });



// BP SWEEP DOWN

        register_instrument('fx','sweepdown','bpsweepdown',
            {

                gain: 2,          //0-inf

                // monotone: 'E1',

                useSeconds: false,

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:[8,'beats'],           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:0,           //sec
                duration: 8, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf

                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 6,             //0-inf
                    freq: 18000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: 0,             //sec
                    d: [8,'beats'],             //sec
                    s: 0.001,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 8,     //beats
                }),

                // delay: create_delay({
                //     delay: 0.25,        //beats
                //     feedback: 0.4,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:[0.75,'beats'],     //Hz
                    lfo_gain: 1,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 10000,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });


// HP SWEEP UP

        register_instrument('fx','sweepup','hpsweepup',
            {

                gain: 1,          //0-inf

                // monotone: 'E1',

                useSeconds: false,

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:[7.80,'beats'],           //sec
                d:0.1,           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 8, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf

                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 6,             //0-inf
                    freq: 20000,        //Hz
                    gain: 3,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: [7.80,'beats'],             //sec
                    d: 0.1,             //sec
                    s: 0.001,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 8,     //beats
                }),

                // delay: create_delay({
                //     delay: 0.25,        //beats
                //     feedback: 0.4,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:[0.25,'beats'],     //Hz
                    lfo_gain: 0.3,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 10000,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });



// HP SWEEP DOWN

        register_instrument('fx','sweepdown','hpsweepdown',
            {

                gain: 1,          //0-inf

                // monotone: 'E1',

                useSeconds: false,

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:[3,'beats'],           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:[2,'beats'],           //sec
                duration: 8, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf

                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 6,             //0-inf
                    freq: 20000,        //Hz
                    gain: 3,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: 0,             //sec
                    d: [4,'beats'],             //sec
                    s: 0.001,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 8,     //beats
                }),

                // delay: create_delay({
                //     delay: 0.25,        //beats
                //     feedback: 0.4,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:[0.25,'beats'],     //Hz
                    lfo_gain: 0.3,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 10000,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });


// LAZER CHICKEN VERB

        register_instrument('fx','stab','lazerchickenverb',
            {

                gain: 10,          //0-inf

                monotone: 'D2',

                useSeconds: true,

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.05,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:0.2,           //sec
                duration: 0.05, //beats
                max:0.8,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 2.63,          //sec
                s_pitch: -48,          //(multiple of base freq)
                r_pitch: 0.001,          //sec
                duration_pitch:1,    //beats
                max_pitch: 12,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.2,      //Hz
                    lfo_gain: 2000,      //0-inf

                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 10,             //0-inf
                    freq: 1500,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    // a: 0.9,             //sec
                    // d: 0.2,             //sec
                    // s: 0.3,             //0-1 (1 = 100%)
                    // r: 0.8,             //sec
                    // max: 1,           //0-1 (1 = 100%)
                    // negative: true,  //true/false. true means its inverted
                    // duration: 2,     //beats
                    // }),

                    // delay: create_delay({
                    // delay: 0.33,        //beats
                    // feedback: 0.4,   //0-1
                }),

                panner: create_panner({
                    //     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:0.9,     //Hz
                    lfo_gain: 2,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 5,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


            });


// LAZER CHICKEN DELAY


        register_instrument('fx','stab','lazerchickendelay',
            {

                gain: 10,          //0-inf

                monotone: 'D2',

                useSeconds: true,

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.05,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:0.2,           //sec
                duration: 0.05, //beats
                max:0.8,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 2.63,          //sec
                s_pitch: -48,          //(multiple of base freq)
                r_pitch: 0.001,          //sec
                duration_pitch:1,    //beats
                max_pitch: 12,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.2,      //Hz
                    lfo_gain: 2000,      //0-inf

                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 10,             //0-inf
                    freq: 1500,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    // a: 0.9,             //sec
                    // d: 0.2,             //sec
                    // s: 0.3,             //0-1 (1 = 100%)
                    // r: 0.8,             //sec
                    // max: 1,           //0-1 (1 = 100%)
                    // negative: true,  //true/false. true means its inverted
                    // duration: 2,     //beats
                }),

                delay: create_delay({
                    delay: 0.33,        //beats
                    feedback: 0.3,   //0-1
                }),

                panner: create_panner({
                    //     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:0.9,     //Hz
                    lfo_gain: 2,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 30,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


            });


// LAZER GOOSE

        register_instrument('fx','stab','lazergoose',
            {

                gain: 10,          //0-inf

                monotone: 'D3',

                useSeconds: true,

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.05,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:0.2,           //sec
                duration: 0.05, //beats
                max:0.8,        //0-inf (but really 0-1)

                a_pitch: 0,          //sec
                d_pitch: 2.63,          //sec
                s_pitch: -64,          //(multiple of base freq)
                r_pitch: 0.001,          //sec
                duration_pitch:1,    //beats
                max_pitch: 24,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.2,      //Hz
                    lfo_gain: 2000,      //0-inf

                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 10,             //0-inf
                    freq: 800,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    // a: 0.9,             //sec
                    // d: 0.2,             //sec
                    // s: 0.3,             //0-1 (1 = 100%)
                    // r: 0.8,             //sec
                    // max: 1,           //0-1 (1 = 100%)
                    // negative: true,  //true/false. true means its inverted
                    // duration: 2,     //beats
                }),

                delay: create_delay({
                    delay: 0.05,        //beats
                    feedback: 0.5,   //0-1
                }),

                panner: create_panner({
                    //     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:1.2,     //Hz
                    lfo_gain: 1,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


            });

// BPRESMOVER

        register_instrument('fx','stab','bpresmover',

            {

                gain: 2,          //0-inf

                noise: true,    //true/false


                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0.2,          //0-inf

                a:0.1,           //sec
                d:0.1,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 0.10, //beats
                max:1,        //0-inf (but really 0-1)

// a_pitch: 0,          //sec
// d_pitch: 0,          //sec
// s_pitch: 0,          //(multiple of base freq)
// r_pitch: 0,          //sec
// duration_pitch:0,    //beats
// max_pitch: 0,        //multiple of base freq


// osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
// osc_0_detune:0,          //cents
// osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
// osc_1_detune:-10,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.2,      //Hz
                    lfo_gain: 1000,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 20,             //0-inf
                    freq: 2000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                delay: create_delay({
                    delay: 0.15,        //beats
                    feedback: 0.5,   //0-1
                }),

                panner: create_panner({
//     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:5,     //Hz
                    lfo_gain:100,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });


// SINE SHIMMER VERB

        register_instrument('lead','shineshimmerverb',
            {

                gain: 2,          //0-inf

                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                a:0,           //sec
                d:0.5,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                osc_0_type: 'sine',
                osc_0_detune: 5,
                osc_1_type: 'sine',
                osc_1_detune: -5,

                // a_pitch: 0,  //sec
                // d_pitch: 0.245,  //sec
                // s_pitch: -48,  //(multiple of base freq) ST
                /// r_pitch: 0.5,  //sec
                // duration_pitch: 0.245,    //sec
                // max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({
                    freq: 200,
                    Q: 1,
                    type:'highpass',

                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.6,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 1,     //beats


                }),
                // filter: create_filter({}),
                // delay: create_delay(beatsToSeconds(1)),
                // panner: create_panner({


                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 5,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 600,         //hz
                    amount: 0.2,           //0-1 (1 = 100% wet)

                }),


            });

// LFO FILTER LEAD

        register_instrument('lead','lfofilterlead',
            {

                gain: 2,          //0-inf

                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                a:0,           //sec
                d:0.5,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                osc_0_type: 'sine',
                osc_0_detune: 5,
                osc_1_type: 'sine',
                osc_1_detune: -5,

                // a_pitch: 0,  //sec
                // d_pitch: 0.245,  //sec
                // s_pitch: -48,  //(multiple of base freq) ST
                /// r_pitch: 0.5,  //sec
                // duration_pitch: 0.245,    //sec
                // max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({
                    freq: 200,
                    Q: 1,
                    type:'highpass',

                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.6,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 1,     //beats


                }),
                // filter: create_filter({}),
                // delay: create_delay(beatsToSeconds(1)),
                // panner: create_panner({


                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 5,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 600,         //hz
                    amount: 0.2,           //0-1 (1 = 100% wet)

                }),


            });


// STRINGS SOLO

        register_instrument('pads','stringssolo',
            {

                gain: 4,          //0-inf

                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                r:0.3,
                a:0.1,
                duration: 0.2,

                osc_0_type: 'sawtooth',
                osc_0_detune: 2,
                osc_1_type: 'sawtooth',
                osc_1_detune: -2,

                // a_pitch: 0,  //sec
                // d_pitch: 0.245,  //sec
                // s_pitch: -48,  //(multiple of base freq) ST
                /// r_pitch: 0.5,  //sec
                // duration_pitch: 0.245,    //sec
                // max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({
                    freq: 200,
                    Q: 1,
                    type:'highpass',
                }),
                // filter: create_filter({}),
                // delay: create_delay(beatsToSeconds(1)),
                // panner: create_panner({


                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


            });


// DELAY SYNTH LEAD 1

        register_instrument('lead','delaysynthlead1',
            {

                gain: 8,          //0-inf

                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                r:0.6,
                a:0,
                duration: 0.3,


                osc_0_type: 'sawtooth',
                osc_0_detune: 0,
                osc_1_type: 'sine',
                osc_1_detune: 0,

                // a_pitch: 0,  //sec
                // d_pitch: 0.245,  //sec
                // s_pitch: -48,  //(multiple of base freq) ST
                /// r_pitch: 0.5,  //sec
                // duration_pitch: 0.245,    //sec
                // max_pitch: 12,    //peak ST
            },
            {
                filter: create_filter({

                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 8,      //Hz
                    lfo_gain: 1000,    //0-inf

                    freq: 2000,
                    Q: 2,
                    type:'bandpass',
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                }),


                delay: create_delay({
                    delay: 0.33,       //beats
                    feedback: 0.2,   //0-1 (1 = 100%)
                }),
                // panner: create_panner({


                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)

                }),

            })


//


// PLUCKED

//gain: 0.7,          //0-inf

        register_instrument('lead','plucked',
            {
                gain: 2,          //0-inf

                // lfo_type: 'sine',
                // lfo_freq: 6.5,
                a:0,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:1,        //0-inf (but really 0-1)

                osc_0_type: 'triangle',
                osc_0_detune: 0,
                osc_1_type: 'triangle',
                osc_1_detune: 1200,

                a_pitch: 0.01,  //sec lelz
                d_pitch: 0.1,  //sec
                s_pitch: 2,  //(multiple of base freq) ST
                r_pitch: 0.001,  //sec
                duration_pitch: 0.008,    //sec
                max_pitch: 1,    //peak ST
            },
            {
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 200,    //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 0.5,             //0-inf
                    freq: 5000,        //Hz
                    //     gain: 0.1,        //0-inf
                    //     input_gain: 1     //default: (1/Q)
                    //
                    a: 0.01,             //sec
                    d: 0,             //sec
                    s: 1,             //0-1 (1 = 100%)
                    r: 0.9,
                    duration: 0.02,          //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                }),

                //  delay: create_delay({
                //  delay: 0.25,       //beats
                //  feedback: 0.30   //0-1 (1 = 100%)
                //  }),
                //  panner: create_panner({

                //i am the lord of.js
                reverb: create_reverb({
                    duration: 10,         //sec
                    decay: 100,           //0-inf (higher = faster decay)
                }),


            });



// GOLDENEYEGUITAR

        register_instrument('lead','goldeneyeguitar',
            {
                gain: 3,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:0.4,          //(0-inf) (but really 0-1)
                r:2,           //sec
                duration: 0.5, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 2.5,             //0-inf
                    freq: 500,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0.001,             //sec
                    d: 0.2,             //sec
                    s: 1,             //0-1 (1 = 100%)
                    r: 1,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.5,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),

            });


// TRONS KEYBOARD

        register_instrument('lead','tronskeyboard',

            {

                gain: 4,          //0-inf

// monotone: 'E1',

                noise: false,    //true/false

// lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
// lfo_freq: 3,          //Hz
// lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.01,           //sec
                s:0.5,           //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 0.15, //beats
                max:0.1,        //0-inf (but really 0-1)

// a_pitch: 0,          //sec
// d_pitch: 0,          //sec
// s_pitch: 0,          //(multiple of base freq)
// r_pitch: 0,          //sec
// duration_pitch:0,    //beats
// max_pitch: 0,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
// lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
// lfo_freq: 1,      //Hz
// lfo_gain: 0,      //0-inf
//
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 5000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
//
                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
// negative: false,  //true/false. true means its inverted
                    duration: 0.15,     //beats
                }),

// delay: create_delay({
//      delay: 1,        //beats
//      feedback: 0.5,   //0-1
// }),

                panner: create_panner({
//     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:0.1,     //Hz
                    lfo_gain: 0,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 4,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


// });

            });


// SOFT SQUARE

        register_instrument('lead','softsquare',
            {

                gain: 3,          //0-inf

//noise: false,    //true/false

// lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
// lfo_freq: 3,          //Hz
// lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.01,           //sec
                s:0.4,          //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.1, //beats
                max:1,        //0-inf (but really 0-1)

// a_pitch: 0,          //sec
// d_pitch: 0,          //sec
// s_pitch: 0,          //(multiple of base freq)
// r_pitch: 0,          //sec
// duration_pitch:0,    //beats
// max_pitch: 0,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 5000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0.001,             //sec
                    d: 0.2,             //sec
                    s: 0.4,             //0-1 (1 = 100%)
                    r: 1,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.5,     //beats
                }),

// delay: create_delay({
//      delay: 1,        //beats
//      feedback: 0.5,   //0-1
// }),

// panner: create_panner({
//     // pan: 0            //-1 (left) 1 (right)
//     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
//     // lfo_freq:0.1,     //Hz
//     // lfo_gain: 0,      //0-inf
// }),

                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 500,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),

            });

// KRAFTWERKER

        register_instrument('lead','kraftwerker',
            {
                gain: 2,          //0-inf

                // monotone: 'E1',

                noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.01,           //sec
                s:0.5,           //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 0.15, //beats
                max:0.1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:10,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1210,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 10,             //0-inf
                    freq: 6100,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    duration: 0.15,     //beats
                }),

                delay: create_delay({
                    delay: 0.15,        //beats
                    feedback: 0.1,   //0-1
                }),

                panner: create_panner({
                    //     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:0.1,     //Hz
                    lfo_gain: 0,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 4,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


                // });

            });


// RUBBER DUCK

        register_instrument('lead','rubberduck',
            {
                gain: 1.2,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.3,           //sec
                s:0.5,          //(0-inf) (but really 0-1)
                r:0.6,           //sec
                duration: 0.5, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 10,             //0-inf
                    freq: 5000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.05,             //sec
                    s: 0.3,             //0-1 (1 = 100%)
                    r: 0.4,             //sec
                    max: 0.1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.5,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 4000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


            });

// SINE SERENITY

        register_instrument('lead','sineserenity',
            {

                gain: 1.6,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 500,        //Hz
                    gain: 3,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 8,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 5000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


            });


// SINE SERENITY DELAY

        register_instrument('lead','sineserenitydelay',
            {

                gain: 1.6,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 500,        //Hz
                    gain: 3,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                delay: create_delay({
                    delay: 0.25,        //beats
                    feedback: 0.4,   //0-1
                }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 8,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 5000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


            });


// SUPER SAW (DETUNED)

        register_instrument('lead','supersaw',
            {

                gain: 0.7,          //0-inf

                //noise: false,    //true/false

                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0.2,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-10,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 6,      //Hz
                    lfo_gain: 2,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 0.5,             //0-inf
                    freq: 400,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 5,         //sec
                    decay: 40,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


            });

// JUICY FUNK LEAD

        register_instrument('lead','juicyfunklead',
            {

                gain: 1,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.15, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 1,      //Hz
                    lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 7000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0,             //sec
                    d: 0.15,             //sec
                    s: 0.1,             //0-1 (1 = 100%)
                    r: 0.3,             //sec
                    max: 0.8,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 1.5,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


            });


// HAMMOND ORGAN

        register_instrument('lead','hammondorgan',
            {

                gain: 1.5,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.6,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 1, //beats
                max:0.5,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 3000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 2.5,         //sec
                    decay: 15,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 4000,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


                // });

            });


// WOBBLECOPTER

        register_instrument('lead','wobblecopter',
            {

                gain: 2,          //0-inf

                //noise: false,    //true/false

                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0.2,          //0-inf

                a:0,           //sec
                d:0.1,           //sec
                s:0.3,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.25, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-10,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 6,      //Hz
                    lfo_gain: 500,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 1000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 4,         //sec
                    decay: 30,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.3,           //0-1 (1 = 100% wet)
                }),


            });

        // TRIANGLE SPACE

        register_instrument('lead','trianglespace',
            {

                gain: 5,//0.9,          //0-inf

                // monotone: 'E1',

                // maxnote: 'C4'

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                // a:0,           //sec
                // d:0.2,           //sec
                // s:0.1,           //(0-inf) (but really 0-1)
                // r:0.5,           //sec
                // duration: 0.15, //beats
                // max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 900,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)

                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                delay: create_delay({
                    delay: 0.25,        //beats
                    feedback: 0.6,   //0-1
                }),


                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


            });



// ANALOG PAD 1

        register_instrument('pads','analogpad1',
            {

                gain: 1,          //0-inf

                //percussion: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp: 5,           //0-inf

                a:0.5,           //sec
                d:0.1,           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:0.9,           //sec
                duration: 1.5, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,  //sec
                // d_pitch: 0,  //sec
                // s_pitch: 0,  //(multiple of base freq)
                // r_pitch: 0,  //sec
                // duration_pitch:0,    //sec
                // max_pitch: 0,    //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                osc_0_detune:0,          //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                osc_1_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                osc_1_detune:0,          //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 200,    //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 2500,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 1,             //sec
                    d: 0.5,             //sec
                    s: 0.8,             //0-1 (1 = 100%)
                    r: 1,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.25,     //beats
                }),


                reverb: create_reverb({
                    duration: 8,         //sec
                    decay: 40,           //0-inf (higher = faster decay)
                }),

                //gain: 1,         //0-inf

            });

// BP PAD 1

        register_instrument('pads','bppad1',
            {

                gain: 3,          //0-inf
                //percussion: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp: 5,           //0-inf

                a:0.7,           //sec
                d:0.1,           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:0.9,           //sec
                duration: 1.5, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,  //sec
                // d_pitch: 0,  //sec
                // s_pitch: 0,  //(multiple of base freq)
                // r_pitch: 0,  //sec
                // duration_pitch:0,    //sec
                // max_pitch: 0,    //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                osc_0_detune:0,          //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                osc_1_detune:0,          //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 200,    //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 3000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 5,             //sec
                    d: 0,             //sec
                    s: 0.80,             //0-1 (1 = 100%)
                    r: 1,             //sec
                    max: 1.00,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 0.5
                }),


                reverb: create_reverb({
                    duration: 8,         //sec
                    decay: 40,           //0-inf (higher = faster decay)
                }),

                //gain: 1,         //0-inf

            });

// TEMPORAL DRONE

        register_instrument('pads','temporaldrone',
            {
                gain: 30,          //0-inf

                //noise: false,    //true/false

                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: [0.25, 'beats'],          //Hz
                lfo_amp:  2,          //0-inf

                a:0.1,           //sec
                d:0.1,          //sec
                s:1,           //(0-inf) (but really 0-1)
                r:5,           //sec
                duration: 1, //beats
                // max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:1,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:10,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1210,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.5,      //Hz
                    lfo_gain: 100,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 520,        //Hz
                    gain: 0.1,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: true, //i dont actually know what reverse reverb is but you can play with this
                    freq: 3500,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


            });



// OLD ANALOG POLY

        register_instrument('pads','oldanalogpoly',
            {
                gain: 2,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 2000,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0.2,           //sec
                d:0.3,           //sec
                s:0.8,           //(0-inf) (but really 0-1)
                r:2,           //sec
                duration: 0.5, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:-1200,          //cents
                osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 200,        //Hz
                    //     gain: 0.1,        //0-inf
                    //     input_gain: 1     //default: (1/Q)
                    //
                    a: 0.01,             //sec
                    d: 0.05,             //sec
                    s: 0.30,             //0-1 (1 = 100%)
                    r: 2,             //sec
                    max: 0.10,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 1,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 29,     //Hz
                    lfo_gain: 0.4,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 4,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 6000,         //hz
                    amount: 0.5,           //0-1 (1 = 100% wet)
                }),


            });


// SQUARE SLOW LPF VERB

        register_instrument('pads','squareslowlpfverb',
            {

                gain: 6,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 2000,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0.8,           //sec
                d:0.3,           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:2.5,           //sec
                duration: 0.5, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:1200,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 1000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 1,             //sec
                    d: 0.9,             //sec
                    s: 0.50,             //0-1 (1 = 100%)
                    r: 2.5,             //sec
                    max: 0.10,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 1,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 29,     //Hz
                    lfo_gain: 1,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3.5,         //sec
                    decay: 5,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 8000,         //hz
                    amount: 0.8,           //0-1 (1 = 100% wet)
                }),


            });

// SQUARE PANNER PAD

        register_instrument('pads','squarepannerpad',
            {
                gain: 3,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 2000,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0.1,           //sec
                d:0.3,           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:2.5,           //sec
                duration: 0.5, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:1200,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 1,             //0-inf
                    freq: 8000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 1,             //sec
                    d: 2,             //sec
                    s: 0.8,             //0-1 (1 = 100%)
                    r: 1,             //sec
                    max: 0.1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 2,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 10,     //Hz
                    lfo_gain: 2,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3.5,         //sec
                    decay: 5,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 500,         //hz
                    amount: 0.8,           //0-1 (1 = 100% wet)
                }),


            });


// BROKEN GATE

        register_instrument('pads','brokengate',
            {

                gain: 2,          //0-inf

                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0.7,           //sec
                d:1,           //sec
                s:1,           //(0-inf) (but really 0-1)
                r:4,           //sec
                duration: 1, //beats
                max:1,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:0,          //cents

            },{
                filter: create_filter({
                    //     lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    //     lfo_freq: 1,      //Hz
                    //     lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 2,             //0-inf
                    freq: 1000,        //Hz
                    gain: 2,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0.8,             //sec
                    d: 0.6,             //sec
                    s: 1,             //0-1 (1 = 100%)
                    r: 0,             //sec
                    max: 1,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 1,     //beats
                }),

                delay: create_delay({
                    delay: 0.33,        //beats
                    feedback: 0.7,   //0-1
                }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:[1/3, 'beats'],     //Hz
                    lfo_gain: 100,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 4,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 4000,         //hz
                    amount: 0.6,           //0-1 (1 = 100% wet)
                }),


            });



// SPACE RIPPLES

        register_instrument('pads','spaceripples',
            {

                gain: 2.2,          //0-inf


                //noise: false,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.5,           //sec
                s:0.4,           //(0-inf) (but really 0-1)
                r:2,           //sec
                duration: 1, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_0_detune:0,          //cents
                osc_1_type:'square',   //'sine', 'square', 'sawtooth', 'triangle'
                osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 6000,        //Hz
                    gain: 1,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    a: 0.8,             //sec
                    d: 0.05,             //sec
                    s: 0.2,             //0-1 (1 = 100%)
                    r: 2,             //sec
                    max: 0.4,           //0-1 (1 = 100%)
                    negative: false,  //true/false. true means its inverted
                    duration: 2,     //beats
                }),

                delay: create_delay({
                    delay: 0.75,        //beats
                    feedback: 0.6,   //0-1
                }),

                panner: create_panner({
                    pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:[0.25, 'beats'],     //Hz
                    lfo_gain: 5,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 5,         //sec
                    decay: 20,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 2000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


            });


        // LPRESMOVER

        register_instrument('fx','stab','lpresmover',

            {
                gain: 2,          //0-inf

                noise: true,    //true/false


                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: 3,          //Hz
                lfo_amp:  0.2,          //0-inf

                a:0.1,           //sec
                d:0.1,           //sec
                s:0.2,           //(0-inf) (but really 0-1)
                r:0.1,           //sec
                duration: 0.10, //beats
                max:1,        //0-inf (but really 0-1)

// a_pitch: 0,          //sec
// d_pitch: 0,          //sec
// s_pitch: 0,          //(multiple of base freq)
// r_pitch: 0,          //sec
// duration_pitch:0,    //beats
// max_pitch: 0,        //multiple of base freq


// osc_0_type:'triangle',   //'sine', 'square', 'sawtooth', 'triangle'
// osc_0_detune:0,          //cents
// osc_1_type:'sine',   //'sine', 'square', 'sawtooth', 'triangle'
// osc_1_detune:-10,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: 0.2,      //Hz
                    lfo_gain: 1000,      //0-inf
                    //
                    type: 'lowpass', //'lowpass','highpass','bandpass',
                    Q: 20,             //0-inf
                    freq: 800,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1     //default: (1/Q)
                    //
                    //     a: 0,             //sec
                    //     d: 0,             //sec
                    //     s: 0,             //0-1 (1 = 100%)
                    //     r: 0,             //sec
                    //     max: 0,           //0-1 (1 = 100%)
                    //     negative: false,  //true/false. true means its inverted
                    //     duration: 0,     //beats
                }),

                delay: create_delay({
                    delay: 0.15,        //beats
                    feedback: 0.1,   //0-1
                }),

                panner: create_panner({
//     // pan: 0,            //-1 (left) 1 (right)
                    lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq:5,     //Hz
                    lfo_gain:100,      //0-inf
                }),

                reverb: create_reverb({
                    duration: 3,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 500,         //hz
                    amount: 0.7,           //0-1 (1 = 100% wet)
                }),


            });


// pitch wobbler

        register_instrument('fx', 'stab', 'pitchwobbler',
            {

                gain: 2,          //0-inf

                monotone: 'C3',

                // maxnote: 'C4'

                //noise: false,    //true/false

                lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                lfo_freq: [0.15,'beats'],          //Hz
                lfo_amp:  100,          //0-inf

                // a:0,           //sec
                // d:0.2,           //sec
                // s:0.1,           //(0-inf) (but really 0-1)
                // r:0.5,           //sec
                // duration: 0.15, //beats
                // max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    lfo_freq: [0.75,'beats'],      //Hz
                    lfo_gain: 200,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 2,             //0-inf
                    freq: 1000,        //Hz
                    gain: 4,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                delay: create_delay({
                    delay: 0.66,        //beats
                    feedback: 0.3,   //0-1
                }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 2,         //sec
                    decay: 15,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 1000,         //hz
                    amount: 0.4,           //0-1 (1 = 100% wet)
                }),


            });





// crash cymbal

        register_instrument('crash', 'crash1',
            {

                gain: 2,          //0-inf

                // monotone: 'E1',

                // maxnote: 'C4'

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.15, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'highpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 7000,        //Hz
                    gain: 10,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 5,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 20000,         //hz
                    amount: 0.6,           //0-1 (1 = 100% wet)
                }),


            });


        register_instrument('crash', 'crash2',
            {

                gain: 2,          //0-inf

                // monotone: 'E1',

                // maxnote: 'C4'

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.15, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 9000,        //Hz
                    gain: 10,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 5,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 10000,         //hz
                    amount: 0.6,           //0-1 (1 = 100% wet)
                }),


            });


        register_instrument('crash', 'crash3',
            {

                gain: 2,          //0-inf

                // monotone: 'E1',

                // maxnote: 'C4'

                noise: true,    //true/false

                // lfo_type: 'triangle', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                // lfo_freq: 3,          //Hz
                // lfo_amp:  0,          //0-inf

                a:0,           //sec
                d:0.2,           //sec
                s:0.1,           //(0-inf) (but really 0-1)
                r:0.5,           //sec
                duration: 0.15, //beats
                max:0.8,        //0-inf (but really 0-1)

                // a_pitch: 0,          //sec
                // d_pitch: 0,          //sec
                // s_pitch: 0,          //(multiple of base freq)
                // r_pitch: 0,          //sec
                // duration_pitch:0,    //beats
                // max_pitch: 0,        //multiple of base freq


                // osc_0_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_0_detune:0,          //cents
                // osc_1_type:'sawtooth',   //'sine', 'square', 'sawtooth', 'triangle'
                // osc_1_detune:-1200,          //cents

            },{
                filter: create_filter({
                    // lfo_type: 'sine', //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                    // lfo_freq: 1,      //Hz
                    // lfo_gain: 0,      //0-inf
                    //
                    type: 'bandpass', //'lowpass','highpass','bandpass',
                    Q: 5,             //0-inf
                    freq: 5000,        //Hz
                    gain: 5,        //0-inf
                    input_gain: 1,     //default: (1/Q)
                    //
                    // a: 0,             //sec
                    // d: 0.15,             //sec
                    // s: 0.1,             //0-1 (1 = 100%)
                    // r: 0.3,             //sec
                    // max: 0.8,           //0-1 (1 = 100%)
                    // negative: false,  //true/false. true means its inverted
                    // duration: 0.15,     //beats
                }),

                // delay: create_delay({
                //      delay: 1,        //beats
                //      feedback: 0.5,   //0-1
                // }),

                // panner: create_panner({
                //     // pan: 0,            //-1 (left) 1 (right)
                //     // lfo_type:'sine',  //'sine', 'square', 'sawtooth', 'triangle' and 'custom'.
                //     // lfo_freq:0.1,     //Hz
                //     // lfo_gain: 0,      //0-inf
                // }),

                reverb: create_reverb({
                    duration: 5,         //sec
                    decay: 10,           //0-inf (higher = faster decay)
                    reverse: false, //i dont actually know what reverse reverb is but you can play with this
                    freq: 10000,         //hz
                    amount: 0.6,           //0-1 (1 = 100% wet)
                }),


            });

        return all_instruments;
    }

    function Synth(options = {}) {
        //Todo - change bpm so it's not quarter note based
        let bpm = options.bpm || 116;

        let sampleRate = options.sampleRate || 32000;

        const ctx = new AudioContext({
            latencyHint: 'playback',
            sampleRate: sampleRate
        });

        function now() {
            return ctx.currentTime;
        }

        const mixer = {};


        const master = ctx.createGain();
        master.gain.value = 0.0001;
        master.gain.linearRampToValueAtTime(0.5,0.5);
        master.connect(ctx.destination);


        const min = 0.000001;

        function ADS(node, max, a, d, s, start, duration, cutoff_time) {
            // Console.log('attack at',start);
            if (cutoff_time) {
                // Console.log('is cutoff from',duration);
                // Console.log('start',start);
                // Console.log('cutoff',cutoff_time);
                duration = Math.max(0,Math.min(duration, cutoff_time - start));
                // Console.log('to duration',duration);
            }
            if (duration === 0) {
                node.gain.setValueAtTime(
                    s,
                    start
                );
                return;
            }

            if (a === 0) {
                if (d === 0) {
                    node.gain.setValueAtTime(
                        s,
                        start
                    );
                } else {
                    node.gain.setValueAtTime(
                        max,
                        start
                    );
                }

            } else {
                node.gain.setValueAtTime(
                    min,
                    start
                );
            }

            if (duration <= a) {
                // Console.log('lt a',duration,a);
                // Console.log(max,duration,a,start);
                node.gain.exponentialRampToValueAtTime(
                    max * duration / a,
                    // max,
                    start + duration
                );
            } else if (duration <= a + d) {
                // Console.log('lt a + d',duration,a,d);
                if (a > 0) {
                    node.gain.exponentialRampToValueAtTime(
                        max,
                        start + a
                    );
                }
                node.gain.exponentialRampToValueAtTime(
                    s,
                    start + duration
                );
            } else {
                // Console.log('normal ADS',duration,a,d);
                if (a > 0) {
                    node.gain.exponentialRampToValueAtTime(
                        max,
                        start + a
                    );
                }
                if (d > 0) {
                    node.gain.exponentialRampToValueAtTime(
                        s,
                        start + a + d
                    );
                }
                node.gain.setValueAtTime(s,
                    start + duration
                )
            }
        }

        function R(node, s, r, end, cutoff_time) {
            if (cutoff_time < end) {
                r = 0;
            }
            if (r === 0) {
                // Console.log('no r');
                node.gain.setValueAtTime(
                    min,
                    end
                );
            } else {
                // Console.log('normal r')
                if (cutoff_time && (cutoff_time - end) < r) {
                    node.gain.exponentialRampToValueAtTime(
                        s + (min - s) * (cutoff_time - end) / r,
                        cutoff_time
                    );
                } else {
                    node.gain.exponentialRampToValueAtTime(
                        min,
                        end + r
                    );
                }

            }
        }


        function ADSR(node, max, a, d, s, r, start, duration, cutoff_time) {
            // console.log('== ADSR');


            if (duration === 0 && r === 0) return;
            ADS(node, max, a, d, s, start, duration, cutoff_time);
            R(node, s, r, start + duration, cutoff_time);
        }



        function ADS_pitch(node,max,a,d,s,start,duration,base_pitch, cutoff_time){
            // Console.log('attack at',start);
            if (cutoff_time) {
                // Console.log('is cutoff from',duration);
                // Console.log('start',start);
                // Console.log('cutoff',cutoff_time);
                duration = Math.max(0,Math.min(duration, cutoff_time - start));
                // Console.log('to duration',duration);
            }
            if(duration === 0){
                node.frequency.setValueAtTime(
                    s,
                    start
                );
                // Console.log('no duration');
                return;
            }

            if(a === 0){
                // Console.log('a === 0');
                if(d === 0){
                    // Console.log('d === 0');
                    node.frequency.setValueAtTime(
                        s,
                        start
                    );
                }else{
                    // Console.log('d === ',d);
                    node.frequency.setValueAtTime(
                        max,
                        start
                    );
                }

            }else{
                // Console.log('a === ',a);
                node.frequency.setValueAtTime(
                    base_pitch,
                    start
                );
            }

            if(duration <= a){
                // Console.log('lt a',duration,a);
                node.frequency.exponentialRampToValueAtTime(
                    max * duration/a,
                    // max,
                    start+duration
                );
            }else if(duration <= a + d){
                // Console.log('lt a + d',duration,a,d);
                if(a > 0){
                    // Console.log('a > 0');
                    node.frequency.exponentialRampToValueAtTime(
                        max,
                        start+a
                    );
                }
                // Console.log('ramp to s at duration');
                node.frequency.exponentialRampToValueAtTime(
                    s,
                    start+duration
                );
            }else {
                // Console.log('normal ADS',duration,a,d);
                if (a > 0) {
                    node.frequency.exponentialRampToValueAtTime(
                        max,
                        start + a
                    );
                }
                if (d > 0) {
                    node.frequency.exponentialRampToValueAtTime(
                        s,
                        start + a + d
                    );
                }
                node.frequency.setValueAtTime(s,
                    start + duration
                )
            }

        }
        function R_pitch(node,s,r,end,base_pitch, cutoff_time){
            // Console.log('release at',r+end);
            if(cutoff_time < end){
                r = 0;
            }
            if(r === 0){
                // Console.log('no r');
                node.frequency.setValueAtTime(
                    base_pitch,
                    end
                );
            }else{
                // Console.log('normal r')
                if(cutoff_time && (cutoff_time - end) < r) {
                    node.frequency.exponentialRampToValueAtTime(
                        s + (base_pitch - s) * (cutoff_time - end) /r,
                        cutoff_time
                    );
                }else{
                    node.frequency.exponentialRampToValueAtTime(
                        base_pitch,
                        end+r
                    );
                }

            }
        }
        function ADSR_pitch(node,note,max,a,d,s,r, start,duration,cutoff_time){
            if (duration === 0 && r === 0) return;
            // Console.log('!= ADSR PITCH');
            //
            // Console.log(
            //     note,max,a,d,s,r, start,duration,cutoff_time
            // )

            max = note * Math.pow(2,max / 12);
            s = note  * Math.pow(2,s / 12);
            // Console.log(max,s);

            ADS_pitch(node,max,a,d,s,start,duration,note, cutoff_time);
            R_pitch(node,s,r,start+duration,note, cutoff_time);
        }

        function ADS_filter(node,max,a,d,s,start,duration,base_freq,negative,cutoff_time){
            // Console.log('attack at',start);

            // Console.log(node,max,a,d,s,start,duration,base_freq,negative,cutoff_time);

            if(cutoff_time){
                // Console.log('ads cutoff');
                // Console.log(start,cutoff_time);
                duration =  Math.max(0,Math.min(duration,cutoff_time - start));
            }
            if(duration === 0){
                node.frequency.setValueAtTime(
                    s,
                    start
                );
                // Console.log('no duration');
                return;
            }

            if(a === 0){
                // Console.log('a === 0')
                if(d === 0){
                    // Console.log('d === 0')
                    node.frequency.setValueAtTime(
                        s,
                        start
                    );
                }else{
                    // Console.log('d = ',d)

                    node.frequency.setValueAtTime(
                        max,
                        start
                    );
                }

            }else{
                // Console.log('a = ',a)
                node.frequency.setValueAtTime(
                    base_freq,
                    start
                );
            }

            if(duration <= a){
                // Console.log('lt a',duration,a);
                node.frequency.exponentialRampToValueAtTime(
                    max * duration/a,
                    // max,
                    start+duration
                );
            }else if(duration <= a + d){
                // Console.log('lt a + d',duration,a,d);
                if(a > 0){
                    node.frequency.exponentialRampToValueAtTime(
                        max,
                        start+a
                    );
                }
                node.frequency.exponentialRampToValueAtTime(
                    s,
                    start+duration
                );
            }else {
                // Console.log('normal ADS',duration,a,d);
                if (a > 0) {
                    node.frequency.exponentialRampToValueAtTime(
                        max,
                        start + a
                    );
                }
                if (d > 0) {
                    node.frequency.exponentialRampToValueAtTime(
                        s,
                        start + a + d
                    );
                }
                node.frequency.setValueAtTime(s,
                    start + duration
                )
            }
        }

        function R_filter(node,s,r,end,base_freq,negative,cutoff_time){
            // Console.log('release at',r+end);
            if(cutoff_time < end){
                r = 0;
            }
            if(r === 0){
                // Console.log('no r');
                node.frequency.setValueAtTime(
                    base_freq,
                    end
                );
            }else{
                // Console.log('normal r')
                if(cutoff_time && (cutoff_time - end) < r) {
                    node.frequency.exponentialRampToValueAtTime(
                        s + (base_freq - s) * (cutoff_time - end) /r,
                        cutoff_time
                    );
                }else{
                    node.frequency.exponentialRampToValueAtTime(
                        base_freq,
                        end+r
                    );
                }

            }

        }
        function ADSR_filter(node,base_freq,max,a,d,s,r, start,duration, negative,cutoff_time){
            // console.log('===>>>         ADSR_filter');
            // // console.log(node,base_freq,max,a,d,s,r, start,duration, negative,cutoff_time);
            //
            // // console.log('node',node);
            // console.log('base_freq',base_freq);
            // console.log('max',max);
            // console.log('a',a);
            // console.log('d',d);
            // console.log('s',s);
            // console.log('r',r);
            // console.log('start',start);
            // console.log('duration',duration);
            // console.log('negative',negative);
            // console.log('cutoff_time',cutoff_time);


            function BoundFreq(freq){
                return Math.max(freq,20);
            }

            if(negative){
                // Console.log('negative');
                max = BoundFreq(base_freq * (1 - max));
                s   = BoundFreq(base_freq * (1 - s));
            }else{
                // Console.log('positive');
                // Console.log('>',max,s,base_freq);
                max = base_freq * max;
                s = base_freq  * s;
                base_freq = BoundFreq(0.01);
            }

            ADS_filter(node,max,a,d,s,start,duration,base_freq,negative,cutoff_time);
            R_filter(node,s,r,start+duration,base_freq,negative,cutoff_time);
        }


        function Default(val,fallback){
            return (typeof val === 'undefined')?fallback:val;
        }
        function interpret_freq(freq){
            if(typeof freq === 'number' || (typeof freq === 'string' && !isNaN(parseInt(freq)))){
                return freq*1;
            }else if(freq.length && freq.length > 1 && freq[1] === 'beats'){
                return bpm/(freq[0]*60);
            }else{
                // console.log('bad freq',freq);
                return 0;
            }
        }
        function interpret_time(time){
            if(typeof time === 'number' || (typeof time === 'string' && !isNaN(parseInt(time)))){
                return time*1;
            }else if(time.length && time.length > 1 && time[1] === 'beats'){
                return bpm*time[0]/60;
            }else{
                // console.log('bad time',time)
                return 0;
            }
        }

        function LFO(type = 'triangle',freq = 3,gain = 0){


            const lfo = ctx.createOscillator();
            lfo.type = type;
            const lfoGain = ctx.createGain();
            lfoGain.gain.value = gain;
            lfo.start(0);

            lfo.frequency.value = interpret_freq(freq);
            lfo.connect(lfoGain);


            function configure(options){
                if(options.type) lfo.type            = options.type;
                if(options.freq) lfo.frequency.value = interpret_freq(options.freq);
                if(options.gain) lfoGain.gain.value  = options.gain;
            }

            function set_freq_atTime(freq,time){
                lfo.frequency.setValueAtTime(interpret_freq(freq),time);
            }
            function set_freq_atBeat(freq,beat){
                lfo.frequency.setValueAtTime(interpret_freq(freq),beatToTime(beat));
            }
            function approach_freq_atTime(freq,fromTime,toTime){
                lfo.frequency.setTargetAtTime(interpret_freq(freq),fromTime,toTime);
            }
            function approach_freq_atBeat(freq,fromTime,toTime){
                lfo.frequency.setTargetAtTime(
                    interpret_freq(freq),
                    beatToTime(fromTime),
                    beatToTime(toTime)
                );
            }
            function set_gain_atTime(gain,time){
                lfoGain.gain.setValueAtTime(gain,time);
            }
            function set_gain_atBeat(gain,beat){
                lfoGain.gain.setValueAtTime(gain,beatToTime(beat));
            }
            function approach_gain_atTime(gain,fromTime,toTime){
                lfoGain.gain.setTargetAtTime(gain,fromTime,toTime);
            }
            function approach_gain_atBeat(gain,fromTime,toTime){
                lfoGain.gain.setTargetAtTime(
                    gain,
                    beatToTime(fromTime),
                    beatToTime(toTime)
                );
            }


            return {
                lfo,
                gain: lfoGain,

                configure,

                set_freq_atTime,
                set_freq_atBeat,
                approach_freq_atTime,
                approach_freq_atBeat,

                set_gain_atTime,
                set_gain_atBeat,
                approach_gain_atTime,
                approach_gain_atBeat
            }

        }

        function Noise(destination){
            var bufferSize = 2 * ctx.sampleRate,
                noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate),
                output = noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }

            var whiteNoise = ctx.createBufferSource();
            whiteNoise.buffer = noiseBuffer;
            whiteNoise.loop = true;
            whiteNoise.start(0);

            const gainNode = ctx.createGain();
            gainNode.gain.setValueAtTime(min,0);

            whiteNoise.connect(gainNode).connect(destination);


            return {
                id: Math.round(Math.random()*100000).toString(16),
                usage: 0,
                noise: whiteNoise,
                gainNode,
                connect: gainNode.connect,
                set_frequency: (freq)=>{
                    osc.frequency.value = freq
                },
            }
        }

        function Oscillator(destination,lfo){
            const osc = ctx.createOscillator();
            osc.type = 'sawtooth';
            osc.start(0);

            osc.frequency.value = 440;

            const gainNode = ctx.createGain();
            gainNode.gain.setValueAtTime(min,0);

            lfo.gain.connect(osc.frequency);


            osc.connect(gainNode).connect(destination);

            function configure(properties = {}){
                // Console.log('configure');
                // Console.log(properties);

                // if(properties.lfo_type){
                //     lfo.type = properties.lfo_type;
                // }
                // if(properties.lfo_gain){
                //     lfoGain.gain.value = properties.lfo_gain;
                // }
                // if(properties.lfo_freq){
                //     lfo.frequency.value = properties.lfo_freq;
                // }
                // if(properties.osc_type){
                //     osc.type = properties.osc_type;
                // }
                osc.type = Default(properties.osc_type,'sawtooth')
                osc.detune.value =  Default(properties.detune,0);

            }

            return {
                id: Math.round(Math.random()*100000).toString(16),
                usage: 0,
                osc,
                gainNode,
                lfo,
                // lfoGain,
                connect: gainNode.connect,
                set_frequency: (freq)=>{
                    osc.frequency.value = freq
                },
                configure,
            }
        }


        const note_names = [
            'B8'		,
            'A#8'		,
            'A8'	    ,
            'G#8'		,
            'G8'		,
            'F#8'		,
            'F8'		,
            'E8'		,
            'D#8'		,
            'D8'		,
            'C#8'		,
            'C8'		,
            'B7'		,
            'A#7'		,
            'A7'	     ,
            'G#7'		,
            'G7'		,
            'F#7'		,
            'F7'		,
            'E7'		,
            'D#7'		,
            'D7'		,
            'C#7'		,
            'C7'		,
            'B6'		,
            'A#6'		,
            'A6'	     ,
            'G#6'		,
            'G6'		,
            'F#6'		,
            'F6'		,
            'E6'		,
            'D#6'		,
            'D6'		,
            'C#6'		,
            'C6'		,
            'B5'		,
            'A#5'		,
            'A5'	    ,
            'G#5'		,
            'G5'		,
            'F#5'		,
            'F5'		,
            'E5'		,
            'D#5'		,
            'D5'		,
            'C#5'		,
            'C5'		,
            'B4'		,
            'A#4'		,
            'A4'	    ,
            'G#4'		,
            'G4'		,
            'F#4'		,
            'F4'		,
            'E4'		,
            'D#4'		,
            'D4'		,
            'C#4'		,
            'C4'		,
            'B3'		,
            'A#3'		,
            'A3'	    ,
            'G#3'		,
            'G3'		,
            'F#3'		,
            'F3'		,
            'E3'		,
            'D#3'		,
            'D3'		,
            'C#3'		,
            'C3'		,
            'B2'		,
            'A#2'		,
            'A2'	    ,
            'G#2'		,
            'G2'		,
            'F#2'		,
            'F2'		,
            'E2'		,
            'D#2'		,
            'D2'		,
            'C#2'		,
            'C2'		,
            'B1'		,
            'A#1'		,
            'A1'	    ,
            'G#1'		,
            'G1'		,
            'F#1'		,
            'F1'		,
            'E1'		,
            'D#1'		,
            'D1'		,
            'C#1'		,
            'C1'		,
            'B0'		,
            'A#0'		,
            'A0'		,
            'G#0'		,
            'G0'		,
            'F#0'		,
            'F0'		,
            'E0'		,
            'D#0'		,
            'D0'		,
            'C#0'		,
            'C0',
        ]

        const notes = {
            'B8'	:	7902.133	,
            'A#8'	:	7458.62	,
            'A8'	:	7040	,
            'G#8'	:	6644.875	,
            'G8'	:	6271.927	,
            'F#8'	:	5919.911	,
            'F8'	:	5587.652	,
            'E8'	:	5274.041	,
            'D#8'	:	4978.032	,
            'D8'	:	4698.636	,
            'C#8'	:	4434.922	,
            'C8'	:	4186.009	,
            'B7'	:	3951.066	,
            'A#7'	:	3729.31	,
            'A7'	:	3520	,
            'G#7'	:	3322.438	,
            'G7'	:	3135.963	,
            'F#7'	:	2959.955	,
            'F7'	:	2793.826	,
            'E7'	:	2637.02	,
            'D#7'	:	2489.016	,
            'D7'	:	2349.318	,
            'C#7'	:	2217.461	,
            'C7'	:	2093.005	,
            'B6'	:	1975.533	,
            'A#6'	:	1864.655	,
            'A6'	:	1760	,
            'G#6'	:	1661.219	,
            'G6'	:	1567.982	,
            'F#6'	:	1479.978	,
            'F6'	:	1396.913	,
            'E6'	:	1318.51	,
            'D#6'	:	1244.508	,
            'D6'	:	1174.659	,
            'C#6'	:	1108.731	,
            'C6'	:	1046.502	,
            'B5'	:	987.7666	,
            'A#5'	:	932.3275	,
            'A5'	:	880	,
            'G#5'	:	830.6094	,
            'G5'	:	783.9909	,
            'F#5'	:	739.9888	,
            'F5'	:	698.4565	,
            'E5'	:	659.2551	,
            'D#5'	:	622.254	,
            'D5'	:	587.3295	,
            'C#5'	:	554.3653	,
            'C5'	:	523.2511	,
            'B4'	:	493.8833	,
            'A#4'	:	466.1638	,
            'A4'	:	440	,
            'G#4'	:	415.3047	,
            'G4'	:	391.9954	,
            'F#4'	:	369.9944	,
            'F4'	:	349.2282	,
            'E4'	:	329.6276	,
            'D#4'	:	311.127	,
            'D4'	:	293.6648	,
            'C#4'	:	277.1826	,
            'C4'	:	261.6256	,
            'B3'	:	246.9417	,
            'A#3'	:	233.0819	,
            'A3'	:	220	,
            'G#3'	:	207.6523	,
            'G3'	:	195.9977	,
            'F#3'	:	184.9972	,
            'F3'	:	174.6141	,
            'E3'	:	164.8138	,
            'D#3'	:	155.5635	,
            'D3'	:	146.8324	,
            'C#3'	:	138.5913	,
            'C3'	:	130.8128	,
            'B2'	:	123.4708	,
            'A#2'	:	116.5409	,
            'A2'	:	110	,
            'G#2'	:	103.8262	,
            'G2'	:	97.99886	,
            'F#2'	:	92.49861	,
            'F2'	:	87.30706	,
            'E2'	:	82.40689	,
            'D#2'	:	77.78175	,
            'D2'	:	73.41619	,
            'C#2'	:	69.29566	,
            'C2'	:	65.40639	,
            'B1'	:	61.73541	,
            'A#1'	:	58.27047	,
            'A1'	:	55	,
            'G#1'	:	51.91309	,
            'G1'	:	48.99943	,
            'F#1'	:	46.2493	,
            'F1'	:	43.65353	,
            'E1'	:	41.20344	,
            'D#1'	:	38.89087	,
            'D1'	:	36.7081	,
            'C#1'	:	34.64783	,
            'C1'	:	32.7032	,
            'B0'	:	30.86771	,
            'A#0'	:	29.13524	,
            'A0'	:	27.5	,
            'G#0'	:	25.95654	,
            'G0'	:	24.49971	,
            'F#0'	:	23.12465	,
            'F0'	:	21.82676	,
            'E0'	:	20.60172	,
            'D#0'	:	19.44544	,
            'D0'	:	18.35405	,
            'C#0'	:	17.32391	,
            'C0'	:	16.3516
        };
        const instruments = {};

        let beat_length = 60/bpm;

        let start_time = 0;

        function set_bpm(_bpm){
            bpm = _bpm;
            beat_length = 60/_bpm;
        };
        function beatsToSeconds(beats){
            return beats * beat_length;
        }
        const Beats = beatsToSeconds;
        function secondsToBeats(seconds){
            return seconds / beat_length;
        }
        function beatToTime(beat){
            return beatsToSeconds(beat) + start_time;
        }
        const Beat = beatToTime;
        function timeToBeat(time){
            return secondsToBeats(time - start_time);
        }

        function impulseResponse( duration, decay = 2, reverse ) {
            var sampleRate = ctx.sampleRate;
            var length = sampleRate * duration;
            var impulse = ctx.createBuffer(2, length, sampleRate);
            var impulseL = impulse.getChannelData(0);
            var impulseR = impulse.getChannelData(1);


            for (var i = 0; i < length; i++){
                var n = reverse ? length - i : i;
                impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
                impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
            }

            return impulse;
        };


        function create_delay(options = {}){


            const delay = Default(options.delay, 1);
            const feedback = Default(options.feedback, 0.5);

            // Console.log(delay,feedback);

            const inputNode = ctx.createGain();
            if(delay === 0){
                return {
                    input: inputNode,
                    output: inputNode
                }
            }


            const outputNode = ctx.createGain();

            const decayNode = ctx.createGain();
            decayNode.gain.value = feedback;

            const delayNode = ctx.createDelay(beatsToSeconds(delay));
            delayNode.delayTime.value = beatsToSeconds(delay);

            inputNode.connect(outputNode);
            inputNode.connect(decayNode).connect(delayNode).connect(outputNode);
            delayNode.connect(decayNode);

            return {
                input:  inputNode,
                output: outputNode
            };
        }

        function create_panner(options = {}){


            const pan = Default(options.pan, 0);
            const panNode = ctx.createStereoPanner();
            panNode.pan.value = pan;

            const lfo = LFO(
                Default(options.lfo_type, 'sine'),
                interpret_freq(Default(options.lfo_freq, 0.1)),
                Default(options.lfo_gain, 0)
            );


            lfo.gain.connect(panNode.pan);
            panNode.lfo = lfo;

            function set_atTime(pan,time){
                panNode.pan.setValueAtTime(pan,time);
            }
            function set_atBeat(pan,beat){
                panNode.pan.setValueAtTime(pan,beatToTime(beat));
            }
            function approach_atTime(pan,fromTime,toTime){
                panNode.pan.setTargetAtTime(pan,fromTime,toTime);
            }
            function approach_atBeat(pan,fromTime,toTime){
                panNode.pan.setTargetAtTime(
                    pan,
                    beatToTime(fromTime),
                    beatToTime(toTime)
                );
            }


            panNode.set_atTime      = set_atTime;
            panNode.set_atBeat      = set_atBeat;
            panNode.approach_atTime = approach_atTime;
            panNode.approach_atBeat = approach_atBeat;

            return panNode;
        }

        function create_reverb(options = {}){


            let duration =  interpret_time(Default(options.duration, 1));
            let decay =     Default(options.decay, 2);
            let reverse =   Default(options.reverse, false);

            let freq =  interpret_freq(Default(options.freq, 10000));

            let amount = Default(options.amount, 1);

            const filter = ctx.createBiquadFilter();
            filter.type             = 'lowpass';
            filter.Q.value          = 0.5;
            filter.frequency.value  = freq;


            const input = ctx.createGain();

            const gainWet = ctx.createGain();
            const gainDry = ctx.createGain();

            gainWet.gain.value = amount;
            gainDry.gain.value = 1 - amount;


            //Reverb
            let convolver = ctx.createConvolver();
            convolver.buffer = impulseResponse(duration,decay,reverse);

            const output = ctx.createGain();


            input.connect(filter).connect(gainWet).connect(convolver).connect(output);
            input.connect(gainDry).connect(output);


            return {
                input,
                filter,
                convolver,
                output,
            };
        }
        function create_filter(options = {}){

            const filter = ctx.createBiquadFilter();

            const input = ctx.createGain();

            filter.type             = Default(options.type, 'bandpass');
            filter.Q.value          = Default(options.Q, 1);
            filter.frequency.value  = interpret_freq(Default(options.freq, 320));


            const a = interpret_time(Default(options.a,0));
            const d = interpret_time(Default(options.d,0));
            const s = Default(options.s,0);
            let   r = interpret_time(Default(options.r,0));

            const max =      Default(options.max,0);
            const negative = Default(options.negative,false);
            let duration = Duration(Default(options.duration, 0));
            const adsr = Boolean(
                a ||
                d ||
                s ||
                r ||
                max ||
                duration
            );
            // Console.log('?????',a ,
            //     d ,
            //     s ,
            //     r ,
            //     max ,
            //     duration,
            //     Default(options.duration, 0));

            if(adsr){
                r = Math.max(r,0.01);

                duration = Math.max(duration,0.01);

            }



            const base_freq = filter.frequency.value;

            let lfo;
            if(!adsr){
                let lfo_gain = Default(options.lfo_gain, 0)
                if(lfo_gain > filter.frequency.value){
                    lfo_gain = filter.frequency.value - 1;
                }
                lfo = LFO(
                    Default(options.lfo_type, 'sine'),
                    interpret_freq(Default(options.lfo_freq, 1)),
                    lfo_gain
                );
                lfo.gain.connect(filter.frequency);
            }else{
                lfo = null;
            }

            const gainNode = ctx.createGain();
            // gainNode.gain.value = 0;
            // gainNode.gain.value = options.gain || 1/filter.Q.value;

            input.gain.value = options.gain || Math.min(1,1/filter.Q.value);
            // input.gain.value = Default(options.input_gain,Math.min(1/filter.Q.value,1));
            // input.gain.value = Default(options.input_gain,1);


            input.connect(filter).connect(gainNode);


            //TODO: if lfo make sure its in range for these
            function set_freq_atTime(freq,time){
                if(filter.adsr) return;
                filter.frequency.setValueAtTime(freq,time);
            }
            function set_freq_atBeat(freq,beat){
                if(filter.adsr) return;
                filter.frequency.setValueAtTime(freq,beatToTime(beat));
            }
            function approach_freq_atTime(freq,fromTime,toTime){
                if(filter.adsr) return;
                filter.frequency.setTargetAtTime(freq,fromTime,toTime);
            }
            function approach_freq_atBeat(freq,fromTime,toTime){
                if(filter.adsr) return;
                filter.frequency.setTargetAtTime(
                    freq,
                    beatToTime(fromTime),
                    beatToTime(toTime)
                );
            }
            return {
                input,
                filter,
                lfo,
                gainNode,
                connect: gainNode.connect,

                set_freq_atTime,
                set_freq_atBeat,
                approach_freq_atTime,
                approach_freq_atBeat,

                a,
                d,
                s,
                r,
                max,
                negative,
                adsr,
                base_freq,
                duration,
            }
        };

        //osc type, freq, cent tune
        // function add_instrument(name,options,filter = null,delay = null,panner = null, reverb = null){
        function add_instrument(name,options = {},components = {}){
            const filter = Default(components.filter,null);
            const delay  = Default(components.delay ,null);
            const panner = Default(components.panner,null);
            const reverb = Default(components.reverb,null);


            const instrument = {
                oscillators: [[],[]],

                gain: Default(options.gain,1)/10,
                level: Default(options.level,1),

                a: interpret_time(Default(options.a,0.1)),
                d: interpret_time(Default(options.d,0.1)),
                s: Default(options.s,0.3),
                r: interpret_time(Default(options.r,0.5)),
                // duration: interpret_time(Duration(Default(options.duration,0.25))), //seconds
                duration: Duration(Default(options.duration,0.25)), //seconds
                max: Default(options.max,0.8),

                monotone: Default(options.monotone,false),
                useSeconds: Default(options.useSeconds, false),
                maxNote: Default(options.maxNote,false),


                set_adsr,

                //Set true for noise (white noise)
                noise: Default(options.noise, false),

                //None of the below for noise
                lfo_type: Default(options.lfo_type,'triangle'),
                lfo_freq: interpret_freq(Default(options.lfo_freq,3)),
                lfo_amp:  Default(options.lfo_amp ,0),

                pitch: {
                    a: interpret_time(Default(options.a_pitch,0)),
                    d: interpret_time(Default(options.d_pitch,0)),
                    s: Default(options.s_pitch,0),
                    r: interpret_time(Default(options.r_pitch,0)),

                    duration: Duration(Default(options.duration_pitch,0)),
                    max:      Default(options.max_pitch,0),

                    enabled: (!options.noise) && Boolean(options.a_pitch||options.d_pitch||options.s_pitch||options.r_pitch||options.duration_pitch||options.max_pitch),
                },

                set_adsr_pitch,

                osc_0_type:     Default(options.osc_0_type    ,'sawtooth'),
                osc_0_detune:   Default(options.osc_0_detune  ,0),
                osc_1_type:     Default(options.osc_1_type    ,'sawtooth'),
                osc_1_detune:   Default(options.osc_1_detune  ,0),

                set_detune_atTime,
                set_detune_atBeat,
                approach_detune_atTime,
                approach_detune_atBeat,

                set_gain_atTime,
                set_gain_atBeat,
                approach_gain_atTime,
                approach_gain_atBeat,

                set_mixer_atTime,
                set_mixer_atBeat,
                approach_mixer_atTime,
                approach_mixer_atBeat,



                lfo: null,
                gainNode: ctx.createGain(),
                mixerNode: ctx.createGain(),

                filter: filter,
                delay: delay,
                panner:panner,
                reverb: panner,
                route: null,
            }
            if(!instrument.noise){
                instrument.lfo = LFO(
                    instrument.lfo_type,
                    instrument.lfo_freq,
                    instrument.lfo_amp
                )
            }
            instrument.gainNode.gain.value = instrument.gain;
            //
            // if(instrument.a < 0.1){
            //     instrument.a = 0.1;
            // }
            // if(instrument.duration < 0.1){
            //     instrument.duration = 0.1;
            // }
            // if(instrument.d < 0.1){
            //     instrument.d = 0.1;
            // }
            // if(instrument.r < 0.1){
            //     instrument.r = 0.1;
            // }


            function set_gain_atTime(gain,time){
                instrument.gainNode.gain.setValueAtTime(gain,time);
            }
            function set_gain_atBeat(gain,beat){
                instrument.gainNode.gain.setValueAtTime(gain,beatToTime(beat));
            }
            function approach_gain_atTime(gain,fromTime,toTime){
                instrument.gainNode.gain.setTargetAtTime(gain,fromTime,toTime);
            }
            function approach_gain_atBeat(gain,fromTime,toTime){
                instrument.gainNode.gain.setTargetAtTime(
                    gain,
                    beatToTime(fromTime),
                    beatToTime(toTime)
                );
            }


            function set_mixer_atTime(gain,time){
                instrument.mixerNode.gain.setValueAtTime(gain,time);
            }
            function set_mixer_atBeat(gain,beat){
                try{
                    instrument.mixerNode.gain.setValueAtTime(gain,beatToTime(beat));

                }catch(e){
                    // Console.log(e);
                    // Console.log(gain,beat);
                }
            }
            function approach_mixer_atTime(gain,fromTime,toTime){
                instrument.mixerNode.gain.setTargetAtTime(gain,fromTime,toTime);
            }
            function approach_mixer_atBeat(gain,fromTime,toTime){
                instrument.mixerNode.gain.setTargetAtTime(
                    gain,
                    beatToTime(fromTime),
                    beatToTime(toTime)
                );
            }






            function set_detune_atTime(osc_num,detune,time){
                if(instrument.noise) return;
                instrument.available[osc_num].map(osc=>{
                    osc.osc.detune.setValueAtTime(detune,time);
                })

            }
            function set_detune_atBeat(osc_num,detune,beat){
                if(instrument.noise) return;
                instrument.available[osc_num].map(osc=> {
                    osc.osc.detune.setValueAtTime(detune,beatToTime(beat));
                });

            }
            function approach_detune_atTime(osc_num,detune,fromTime,toTime){
                if(instrument.noise) return;
                instrument.available[osc_num].map(osc=> {
                    osc.osc.detune.setTargetAtTime(detune,fromTime,toTime);
                });
            }
            function approach_detune_atBeat(osc_num,detune,fromTime,toTime){
                if(instrument.noise) return;
                instrument.available[osc_num].map(osc=> {
                    osc.osc.detune.setTargetAtTime(
                        detune,
                        beatToTime(fromTime),
                        beatToTime(toTime)
                    );
                });

            }


            function isDefined(property){
                return typeof property !== 'undefined';
            }
            function set_adsr(settings){
                if(isDefined(settings.a)) instrument.a = settings.a;
                if(isDefined(settings.d)) instrument.d = settings.d;
                if(isDefined(settings.s)) instrument.s = settings.s;
                if(isDefined(settings.r)) instrument.r = settings.r;
                if(isDefined(settings.duration)) instrument.duration = Duration(settings.duration);

                if(isDefined(settings.max)) instrument.max = settings.max;
            }

            function set_adsr_pitch(settings){
                if(isDefined(settings.a))          instrument.pitch.a = settings.a;
                if(isDefined(settings.d))          instrument.pitch.d = settings.d;
                if(isDefined(settings.s))          instrument.pitch.s = settings.s;
                if(isDefined(settings.r))          instrument.pitch.r = settings.r;
                if(isDefined(settings.duration))   instrument.pitch.duration = Duration(settings.duration);
                if(isDefined(settings.max))        instrument.pitch.max = settings.max;

                instrument.pitch.enabled = Boolean(instrument.pitch.a || instrument.pitch.d || instrument.pitch.s || instrument.pitch.r || instrument.pitch.duration || instrument.pitch.max);
            }


            instrument.gainNode.connect(instrument.mixerNode).connect(master);
            mixer[name] = instrument.mixerNode;

            let route = instrument.gainNode;
            if(reverb){
                reverb.output.connect(route);
                route = reverb.input;
            }
            if(panner){
                panner.connect(route);
                route = panner;
            }
            if(delay){
                delay.output.connect(route);
                route = delay.input;
            }
            if(filter){
                filter.gainNode.connect(route);
                route = filter.input;
            }
            instrument.route = route;

            instruments[name] = instrument;
        }



        function scheduleInstructions(instrument,arrangement){
            // Console.log('schedule instructions',instrument);
            const I = instruments[instrument];
            const r = I.r;
            const osc_time_buffer = 0;

            let events = [];
            arrangement.map(instruction => {
                add_event(instruction);
            });

            function limit_note(note){
                if(!I.maxNote) return note;
                let iMax = note_names.indexOf(I.maxNote.toUpperCase());
                let i = note_names.indexOf(note);
                while(i < iMax){
                    i += 12;
                }
                if(i < note_names.length){
                    return note_names[i];
                }else{
                    return note;
                }
            }

            function add_event(instruction){
                const id = instruction.event+Math.round(Math.random()*33554432).toString(16);
                switch(instruction.event){
                    case 'note':
                        let duration;
                        if(!I.useSeconds){
                            duration = Math.max(
                                I.duration + secondsToBeats(r),
                                I.pitch.duration + secondsToBeats(I.pitch.r)
                            ) + osc_time_buffer;
                        }else{
                            duration = Math.max(
                                secondsToBeats(I.duration) + secondsToBeats(r),
                                secondsToBeats(I.pitch.duration) + secondsToBeats(I.pitch.r)
                            ) + osc_time_buffer;
                        }


                        if(instruments[instrument].monotone){
                            instruction.note = instruments[instrument].monotone.toUpperCase();
                        }
                        // if(instrument === 'kickgoa'){
                        //     Console.log('monotone:',instruction.note);
                        // }else{
                        //     Console.log(instrument);
                        // }


                        events.push({
                            event:'note',
                            // value: 1,
                            id,
                            note: limit_note(instruction.note),
                            time: instruction.start_beat,
                            duration,
                            end: instruction.start_beat + duration,
                        });

                        // events.push({
                        //     event:'note',
                        //     value: -1,
                        //     id,
                        //     note: instruction.note,
                        //     time: instruction.start_beat + Math.max(
                        //         I.duration + secondsToBeats(r),
                        //         I.pitch.duration + secondsToBeats(I.pitch.r)
                        //     ) + osc_time_buffer,
                        // });
                        break;
                    case 'mixer':
                        events.push({
                            event: 'mixer',
                            id,
                            gain: instruction.gain,
                            time: instruction.beat
                        });
                        break;
                    case 'mixerGradual':
                        events.push({
                            event:'mixerGradual',
                            id,
                            gain: instruction.gain,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'detune':
                        events.push({
                            event:'detune',
                            id,
                            cent: instruction.cent,
                            osc: instruction.osc,
                            time: instruction.beat
                        });
                        break;
                    case 'detuneGradual':
                        events.push({
                            event:'detuneGradual',
                            id,
                            cent: instruction.cent,
                            osc: instruction.osc,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'lfoFreq':
                        events.push({
                            event:'lfoFreq',
                            id,
                            freq: instruction.freq,
                            time: instruction.beat
                        });
                        break;
                    case 'lfoFreqGradual':
                        events.push({
                            event:'lfoFreqGradual',
                            id,
                            freq: instruction.freq,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'lfoGain':
                        events.push({
                            event:'lfoGain',
                            id,
                            gain: instruction.gain,
                            time: instruction.beat
                        });
                        break;
                    case 'lfoGainGradual':
                        events.push({
                            event:'lfoGain',
                            id,
                            gain: instruction.gain,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'gain':
                        events.push({
                            event:'gain',
                            id,
                            gain: instruction.gain,
                            time: instruction.beat
                        });
                        break;
                    case 'gainGradual':
                        events.push({
                            event:'gainGradual',
                            id,
                            gain: instruction.gain,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'a':
                    case 's':
                    case 'd':
                    case 'r':
                    case 'duration':
                    case 'max':
                        events.push({
                            event: instruction.event,
                            id,
                            time: instruction.beat,
                            [instruction.event]: instruction[instruction.event]
                        });
                        break;
                    case 'aPitch':
                    case 'sPitch':
                    case 'dPitch':
                    case 'rPitch':
                    case 'durationPitch':
                    case 'maxPitch':
                        const prop = instruction.event.substr(0,instruction.event.length - 5);
                        events.push({
                            event: instruction.event,
                            id,
                            time: instruction.beat,
                            [prop]: instruction[prop]
                        });
                        break;
                    case 'filterLfoFreq':
                        events.push({
                            event:'filterLfoFreq',
                            id,
                            freq: instruction.freq,
                            time: instruction.beat
                        });
                        break;
                    case 'filterLfoFreqGradual':
                        events.push({
                            event:'filterLfoFreqGradual',
                            id,
                            freq: instruction.freq,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'filterLfoGain':
                        events.push({
                            event:'filterLfoGain',
                            id,
                            gain: instruction.gain,
                            time: instruction.beat
                        });
                        break;
                    case 'filterLfoGainGradual':
                        events.push({
                            event:'filterLfoGainGradual',
                            id,
                            gain: instruction.gain,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'pan':
                        events.push({
                            event: instruction.event,
                            id,
                            time: instruction.beat,
                            [instruction.event]: instruction[instruction.event]
                        });
                        break;
                    case 'panGradual':
                        events.push({
                            event:'panGradual',
                            id,
                            pan: instruction.pan,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'panLfoFreq':
                        events.push({
                            event:'panLfoFreq',
                            id,
                            freq: instruction.freq,
                            time: instruction.beat
                        });
                        break;
                    case 'panLfoFreqGradual':
                        events.push({
                            event:'panLfoFreqGradual',
                            id,
                            freq: instruction.freq,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                        break;
                    case 'panLfoGain':
                        events.push({
                            event:'panLfoGain',
                            id,
                            gain: instruction.gain,
                            time: instruction.beat
                        });
                        break;
                    case 'panLfoGainGradual':
                        events.push({
                            event:'panLfoGainGradual',
                            id,
                            gain: instruction.gain,
                            time: instruction.startBeat,
                            end: instruction.endBeat
                        });
                }
            }


            function isHardSchedule(event){
                const events = ['note','a', 's', 'd', 'r', 'duration', 'max', 'aPitch', 'sPitch', 'dPitch', 'rPitch', 'durationPitch', 'maxPitch'];
                return events.includes(event);



            }
            events.sort((a,b)=>{
                if( isHardSchedule(a.event) && isHardSchedule(b.event) ){
                    if(a.time !== b.time) return (a.time<b.time)?-1:1;
                    if(a.event === 'note' && b.event === 'note'){
                        return (a.value < b.value)?-1:1
                    }
                    return a.event === 'note'?1:-1;
                }
                return isHardSchedule(a.event)?-1:1;
            });

            let last_note = 0;
            for(let i = events.length - 1; i >= 0; i--){
                if(events[i].event === 'note') {
                    last_note = i;
                    break;
                }
            }
            // Console.log(last_note)


            let prev_note_time = null;
            // Console.log('EVENTS');
            // Console.log(events);

            // let occupied = 0;
            // let available
            // let stack = [0,1,2,3,4,5];
            // const oscillators = {
            //
            // };


            //Oscillator assignment step 1
            const oscillator_max = 5;
            const availability = [];
            let last;
            events.map((event,index)=>{
                if(event.event !== 'note') return;
                for(let o = 0; o < availability.length; o++){
                    if(availability[o] < event.time){
                        // take this one
                        events[index].osc_num = o;
                        availability[o] = event.end;
                        last = o;
                        return;
                    }
                }
                if(availability.length < oscillator_max){
                    //assign a new one
                    events[index].osc_num = availability.length;
                    availability.push(event.end);
                    last = availability.length - 1;
                    return
                }

                //reassign
                let this_osc = (last + 1)%oscillator_max;
                events[index].osc_num = this_osc;
                availability[this_osc] = event.end;
            });

            //Oscillator assignment step 2 - cutoff times
            const cutoffs = [];
            for(let index = events.length - 1; index >= 0; index--){
                const event = events[index];
                if(typeof cutoffs[event.osc_num] !== 'undefined'){
                    events[index].cutoff = cutoffs[event.osc_num];
                }
                cutoffs[event.osc_num] = event.time;
            }

            // Console.log(events);


            let final_beat = 0;
            events.map((event,index)=>{
                switch(event.event){
                    case 'note':
                        const isLastNote = index === last_note;
                        // Console.log(index,event.id,event.value);
                        let oscillator;
                        for(let o = 0; o <= Number(!I.noise); o++){
                            if(I.oscillators[o][event.osc_num]){
                                oscillator =  I.oscillators[o][event.osc_num];
                            }else{
                                if(!I.noise){
                                    oscillator = Oscillator(I.route,I.lfo);
                                    oscillator.configure({
                                        osc_type: I['osc_'+o+'_type'],
                                        detune: I['osc_'+o+'_detune'],
                                    });
                                }else{
                                    oscillator = Noise(I.route);
                                }
                                I.oscillators[o][event.osc_num] = oscillator;
                            }
                            if(!I.noise && !I.pitch.enabled){
                                try{
                                    oscillator.osc.frequency.setValueAtTime(
                                        notes[event.note],
                                        beatToTime(event.time),
                                    );
                                }catch(e){
                                    // Console.log(e);
                                    // Console.log('!!',
                                    //     event.note,
                                    //     event.time,
                                    // )
                                }
                            }
                            let duration;
                            let pitchDuration_beats;
                            let pitchDuration_secs;


                            if(!I.useSeconds){
                                duration = beatsToSeconds(I.duration);
                                pitchDuration_beats = I.pitch.duration;
                                pitchDuration_secs = beatsToSeconds(pitchDuration_beats);

                            }else{
                                duration = I.duration;
                                pitchDuration_secs = I.pitch.duration;
                                pitchDuration_beats = secondsToBeats(pitchDuration_secs);

                            }



                            if(!event.cutoff){
                                // Console.log('NO CUTOFF');
                                event.cutoff = event.time + event.duration + event.r;
                                if(I.pitch.enabled){

                                    event.cutoff = Math.max(
                                        event.cutoff,
                                        event.time + pitchDuration_beats + secondsToBeats(I.pitch.r)
                                    )
                                }
                            }

                            ADSR(
                                oscillator.gainNode,
                                I.max,
                                I.a,
                                I.d,
                                I.s,
                                I.r,
                                beatToTime(event.time),
                                duration,
                                beatToTime(event.cutoff),
                            );
                            if(I.pitch.enabled){

                                // Console.log('adsr pitch');
                                const P = I.pitch;
                                ADSR_pitch(
                                    oscillator.osc,
                                    notes[event.note],
                                    P.max,
                                    P.a,
                                    P.d,
                                    P.s,
                                    P.r,
                                    beatToTime(event.time),
                                    pitchDuration_secs,
                                    beatToTime(event.cutoff)
                                );
                            }
                        }

                        if(I.filter && I.filter.adsr){
                            let filterDuration;
                            let duration;
                            if(!I.useSeconds){
                                duration = beatsToSeconds(I.duration);
                                filterDuration = beatsToSeconds(I.filter.duration);

                            }else{
                                duration = I.duration;
                                filterDuration = I.filter.duration;

                            }


                            // Console.log('should ADSR filter')
                            // Console.log(event);
                            const filter = I.filter;
                            // Console.log('?',prev_note_time);
                            // Console.log('adsr filter');
                            // Console.log(
                            //     filter.base_freq,
                            //     filter.max,
                            //     filter.a,
                            //     filter.d,
                            //     filter.s,
                            //     filter.r,
                            //     filter.negative
                            // );
                            if(
                                prev_note_time
                                && prev_note_time !== event.time
                            ){
                                //     Console.log('not last',
                                //     prev_note_time,
                                //         event.time
                                // );



                                ADSR_filter(
                                    filter.filter,
                                    filter.base_freq,
                                    filter.max,
                                    filter.a,
                                    filter.d,
                                    filter.s,
                                    filter.r,
                                    beatToTime(prev_note_time),
                                    filterDuration,
                                    filter.negative,
                                    beatToTime(event.time)
                                );
                            }else if(prev_note_time === event.time){
                                // Console.log('prev note time == event time');
                                // Console.log(event.value);
                            }
                            if(isLastNote){
                                // Console.log('last');
                                ADSR_filter(
                                    filter.filter,
                                    filter.base_freq,
                                    filter.max,
                                    filter.a,
                                    filter.d,
                                    filter.s,
                                    filter.r,
                                    beatToTime(event.time),
                                    filterDuration,
                                    filter.negative,
                                    beatToTime(event.time) + duration + filter.r + 1
                                );
                            }
                            prev_note_time = event.time;
                        }


                        break;
                    case 'mixer':
                        I.set_mixer_atBeat(
                            event.gain,
                            event.time
                        )
                        break;
                    case 'mixerGradual':
                        I.approach_mixer_atBeat(
                            event.gain,
                            event.time,
                            event.end
                        )
                        break;

                    case 'detune':
                        I.set_detune_atBeat(
                            event.osc,
                            event.cent,
                            event.time
                        );
                        break;
                    case 'detuneGradual':
                        I.approach_detune_atBeat(
                            event.osc,
                            event.cent,
                            event.time,
                            event.end
                        );
                        break;
                    case 'lfoFreq':
                        if(!I.lfo)break;
                        I.lfo.set_freq_atBeat(
                            event.freq,
                            event.time
                        )
                        break;
                    case 'lfoFreqGradual':
                        if(!I.lfo)break;
                        I.lfo.approach_freq_atBeat(
                            event.freq,
                            event.time,
                            event.end
                        );
                        break;
                    case 'lfoGain':
                        if(!I.lfo)break;
                        I.lfo.set_gain_atBeat(
                            event.gain,
                            event.time
                        )
                        break;
                    case 'lfoGainGradual':
                        if(!I.lfo)break;
                        I.lfo.approach_gain_atBeat(
                            event.gain,
                            event.time,
                            event.end
                        )
                        break;
                    case 'gain':
                        I.set_gain_atBeat(
                            event.gain,
                            event.time
                        )
                        break;
                    case 'gainGradual':
                        I.approach_gain_atBeat(
                            event.gain,
                            event.time,
                            event.end
                        )
                        break;
                    case 'a':
                    case 's':
                    case 'd':
                    case 'r':
                    case 'duration':
                    case 'max':
                        I.set_adsr({
                            [event.event]:event[event.event],
                        });
                        break;
                    case 'aPitch':
                    case 'sPitch':
                    case 'dPitch':
                    case 'rPitch':
                    case 'durationPitch':
                    case 'maxPitch':
                        const prop = event.event.substr(0,event.event.length - 5);
                        I.set_adsr_pitch({
                            [prop]:event[prop]
                        });
                        break;
                    case 'filterLfoFreq':
                        if(!I.filter || !I.filter.lfo)break;
                        I.filter.lfo.set_freq_atBeat(
                            event.freq,
                            event.time
                        )
                        break;
                    case 'filterLfoFreqGradual':
                        if(!I.filter  || !I.filter.lfo)break;
                        I.filter.lfo.approach_freq_atBeat(
                            event.freq,
                            event.time,
                            event.end
                        );
                        break;
                    case 'filterLfoGain':
                        if(!I.filter  || !I.filter.lfo)break;
                        I.filter.lfo.set_gain_atBeat(
                            event.gain,
                            event.time
                        )
                        break;
                    case 'filterLfoGainGradual':
                        if(!I.filter  || !I.filter.lfo)break;
                        I.filter.lfo.approach_gain_atBeat(
                            event.gain,
                            event.time,
                            event.end
                        )
                        break;
                    case 'pan':
                        if(!I.panner)break;
                        I.panner.set_atBeat(
                            event.pan,
                            event.time
                        );
                        break;
                    case 'panGradual':
                        if(!I.panner)break;
                        I.panner.approach_atBeat(
                            event.pan,
                            event.time,
                            event.end
                        );
                        break;
                    case 'panLfoFreq':
                        if(!I.panner)break;
                        I.panner.lfo.set_freq_atBeat(
                            event.freq,
                            event.time
                        )
                        break;
                    case 'panLfoFreqGradual':
                        if(!I.panner)break;
                        I.panner.lfo.approach_freq_atBeat(
                            event.freq,
                            event.time,
                            event.end
                        );
                        break;
                    case 'panLfoGain':
                        if(!I.panner)break;
                        I.panner.lfo.set_gain_atBeat(
                            event.gain,
                            event.time
                        )
                        break;
                    case 'panLfoGainGradual':
                        if(!I.panner)break;
                        I.panner.lfo.approach_gain_atBeat(
                            event.gain,
                            event.time,
                            event.end
                        )
                        break;
                }

                final_beat = event.time;
            });


            // Console.log('final event beat:',final_beat);
            return final_beat;
        }


        function clear_music(){

        }

        function play_music(score){
            start_time = now() + beatsToSeconds(4);

            // Console.log('play music');
            let final_beat = 0;
            for(let instrument in score){
                // Console.log(instrument,score[instrument]);
                final_beat = Math.max(
                    final_beat,
                    scheduleInstructions(instrument,score[instrument])
                );
            }
            // Console.log('Synth duration:',final_beat)
            // Console.log('Synth duration (sec):',Beats(final_beat))
            master.gain.setValueAtTime(0,beatToTime(final_beat) + 5);

            // function checkFinished(){
            //     if(master.gain.value === 0){
            //         Console.log('Finished track');
            //         doComplete()
            //     }else{
            //         Console.log('Not finished, will recheck');
            //         setTimeout(checkFinished,1500);
            //     }
            // }
            //
            // setTimeout(checkFinished,
            //     (beatToTime(final_beat) + 2) * 1000 );
        }

        function isFinished(){
            return master.gain.value === 0;
        }

        function count_oscs(){
            let i = 0;
            for(let instrument in instruments){
                let j = instruments[instrument].oscillators[0].length
                    + instruments[instrument].oscillators[1].length;
                console.log(instrument,':',j);
                i += j;
            }

            return i;
        }

        async function kill(){
            await ctx.close();

            // console.log(master);
        }

        let paused = false;
        function pause(){
            if(!paused){
                paused = true;
                ctx.suspend();
            }

        }
        function resume(){
            if(paused){
                paused = false;
                ctx.resume();
            }
        }

        // let completed = [];
        // function onComplete(callback){
        //     if(typeof callback === 'function'){
        //         completed.push(callback);
        //     }
        // }
        // function doComplete(){
        //     completed.map( callback => {
        //         callback();
        //     })
        // }

        function Duration(duration){
            if(duration !== parseFloat(duration)){
                switch(duration.toLowerCase()){
                    case '4':
                    case 'semibreve':
                        duration =  4;
                        break;
                    case '2':
                    case 'minim':
                        duration = 2;
                        break;
                    case '1':
                    case 'crotchet':
                        duration = 1;
                        break;
                    case '1/2':
                    case 'half':
                    case 'quaver':
                        duration = 0.5;
                        break;
                    case '1/3':
                    case 'third':
                    case '3rd':
                    case 'triplet':
                        duration = 1/3;
                        break;
                    case '1/4':
                    case 'fourth':
                    case '4th':
                    case 'semiquaver':
                        duration = 0.25;
                        break;
                    case '1/5':
                    case 'fifth':
                    case '5th':
                    case 'quintuplet':
                        duration = 0.2;
                        break;
                    case '1/6':
                    case 'sixth':
                    case '6th':
                    case 'sextuplet':
                        duration = 1/6;
                        break;
                    case '1/7':
                    case 'seventh':
                    case '7th':
                    case 'septuplet':
                        duration = 1/6;
                        break;
                    case '1/8':
                    case 'eighth':
                    case '8th':
                        duration = 0.125;
                        break;
                    case '1/16':
                    case 'sixteenth':
                    case '16th':
                        duration = 0.0625;
                        break;
                    case '1/32':
                    case 'thirtysecond':
                    case 'thirty-second':
                    case 'thirty second':
                    case '32nd':
                        duration = 0.03125;
                        break;
                    default:
                        // Console.log('bad note duration:',duration);
                        duration = 1;
                        break;
                }
            }else if(duration < 0){
                // Console.log('bad note duration:',duration);
                duration = 1;
            }
            return duration;
        }


        function set_quality(quality){
            switch(quality){
                case 2:
                case '2':

                    break;
                case 1:
                case '1':

                    break;
                default:


            }
        }

        return {
            instruments,
            notes,

            mixer,

            count_oscs,

            now,
            add_instrument,
            play_music,
            filter: create_filter,
            delay: create_delay,
            panner: create_panner,
            reverb: create_reverb,
            Beats,
            set_bpm,

            kill,
            pause,
            resume,

            isFinished,
        };
    }

    // console.log('list instruments...');
    let all_instruments = Instruments();

    // console.log('make synth....');
    let sampleRate = [22050,32000,44100][Math.min(2,Math.max(0,quality))];

    let synth = {
        esizer: Synth({
            sampleRate: sampleRate
        }),
    }

    let last_rehash = 0;

    function fnv32a() {
        let str = JSON.stringify(arguments);
        let hval = 0x811c9dc5;
        for ( let i = 0; i < str.length; ++i )
        {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        return hval >>> 0;
    }

    function random(){
        // const limit = 4294967231;
        const limit = 1000000000;
        last_rehash = fnv32a(tokenId,hash,last_rehash);
        return (last_rehash%limit)/limit;

    }


    function Composer(synth,atomicNumber){
        const Beats = synth.Beats;
        const genesis = atomicNumber === 0;


        function R(min,max){
            return min + (max - min) * random();
        }
        function Rint(min,max){
            return Math.round(R(min,max));
        }
        function Rarray(array) {
            return array[Math.floor(random() * array.length)];
        }
        function Rset(){
            return Rarray(arguments);
        }
        function Chance(pr){
            return R(0,1) <= pr;
        }
        function roundTo(num,places){
            return Math.round(num * Math.pow(10,places))/Math.pow(10,places);
        }

        const tempo = 70 + Math.round(atomicNumber * 0.75) + Rint(0,21);

        const score = {};
        let structure, properties,elements,instruments;

        const scales = {
            // 'Acoustic scale':'W-W-W-H-W-H-W',

            // 'Aeolian':'W-H-W-W-H-W-W',

            // 'Algerian scale':'W-H-3H-H-H-3H-H-W-H-W',

            // 'Altered scale':'H-W-H-W-W-W-W',

            // 'Augmented scale':'3H-H-3H-H-3H-H',
            'Bebop dominant scale':'W-W-H-W-W-H-H-H', //(keep)
            'Blues scale':'3H-W-H-H-3H-W', //(keep)

            'Dorian':'W-H-W-W-W-H-W', //(keeP)

            // 'Double harmonic scale':'H-3H-H-W-H-3H-H',

            'Enigmatic scale':'H-3H-W-W-W-H-H', //(keep)
            'Flamenco mode':'H-3H-H-W-H-3H-H', //(keep)
            'Half diminished scale':'W-H-W-H-W-W-W', //(keep)
            'Harmonic major scale':'W-W-H-W-H-3H-H', //(keep)
            'Harmonic minor scale':'W-H-W-W-H-3H-H', //(keep)
            'Hirajoshi scale':'2W-W-H-2W-H', //(keep))
            // 'Hungarian Gypsy scale':'W-H-3H-H-H-3H-H',
            // 'Hungarian major scale':'3H-H-W-H-W-H-W',
            'Miyako-bushi scale':'H-2W-W-H-2W', //(keep)
            'Insen scale':'H-2W-W-3H-W', //(keep)
            'Ionian':'W-W-H-W-W-W-H', //(keep)
            // 'Istrian mode':'H-W-H-W-H',
            // 'Iwato scale':'H-2W-H-2W-W',
            // 'Locrian':'H-W-W-H-W-W-W',
            // 'Lydian augmented scale':'W-W-W-W-H-W-H',
            'Lydian':'W-W-W-H-W-W-H', //(keep)
            // 'Major Locrian scale':'W-W-H-H-W-W-W',
            'Major pentatonic scale':'W-W-3H-W-3H', //(keep)
            // 'Melodic minor scale descending':'W-W-H-W-W-H-W',
            // 'Melodic minor scale ascending':'W-H-W-W-W-W-H',
            'Minor pentatonic scale':'3H-W-W-3H-W', /// (keep)
            // 'Mixolydian':'W-W-H-W-W-H-W',
            // 'Neapolitan major scale':'H-W-W-W-W-W-H',
            // 'Neapolitan minor scale':'H-W-W-W-H-3H-H',
            // 'Octatonic scale 1':'W-H-W-H-W-H-W-H',
            // 'Octatonic scale 2':'H-W-H-W-H-W-H',
            // 'Persian scale':'H-3H-H-H-W-3H-H',
            // 'Phrygian dominant':'H-3H-H-W-H-W-W',
            'Phrygian':'H-W-W-W-H-W-W', //(keep)
            // 'Prometheus scale':'W-W-W-3H-H-W',
            // 'Scale of harmonics':'3H-H-H-W-W-3H',
            // 'Tritone scale':'H-3H-W-H-3H-W',
            // 'Two-semitone tritone scale':'H-H-4H-H-H-4H',
            // 'Ukrainian Dorian mode':'W-H-3H-H-W-H-W',
            // 'Whole tone scale':'W-W-W-W-W-W',
        }

        const notes = ['B','A#','A','G#','G','F#','F','E','D#','D','C#','C'];

        function randomScale(){
            if(genesis){
                return 'Phrygian';
            }
            // return Object.keys(scales)[0];
            // return 'Major pentatonic scale';
            return Rarray(Object.keys(scales));

        }
        function randomKey(){
            return Rarray(notes);
        }
        function randomOctave(){
            return Rint(2,3);
        }


        function read_interval(interval){
            interval = interval.toUpperCase();
            if(interval.length === 1){
                return interval==='W'?2:1;
            }else{
                return parseInt(interval[0])*(interval[1]==='W'?2:1);
            }
        }
        function get_quantised_shifts(scale){
            let allowed = [0];
            let shift = 0;
            scales[scale].split('-').map(interval=>{
                shift += read_interval(interval);
                allowed.push(shift);
            });
            let quantised = [];
            for(let shift = 0; shift <= 12; shift++){
                if(allowed.includes(shift)){
                    quantised.push(shift);
                }else{
                    for(let i = 1; i < 12; i++){
                        if(allowed.includes(shift - i)){
                            quantised.push(shift - i);
                            break;
                        }else if(allowed.includes(shift + i)){
                            quantised.push(shift + i);
                            break;
                        }
                    }
                }
            }
            return quantised;
        }

        function generate_structure(){
            function Rsection(){
                const sections = [
                    [1,'breakdown'],
                    [2,'buildup'],
                    [1,'bridge'],
                    [4,'main-section'],
                    [5,'chorus'],   //pre-chorus
                    [2,'solo'],
                    [1,'drop'],     //pre-drop
                    [1,'tension'],
                    [1,'release'],
                    [4,'verse'],
                ]
                sections.sort((a,b)=>{
                    return a[0]<b[0]?-1:1
                });

                let cdf = [];
                let total = 0;
                sections.map(section=>{
                    total += section[0]
                    cdf.push([
                        total,
                        section[1]
                    ])
                });
                let pr = R(0,total);
                for(let i = 0; i < cdf.length; i++){
                    if(pr <= cdf[i][0]) return cdf[i][1];
                }
            }
            const structure = [];
            let unique = 0;

            function add(section){
                if(!(['buildup','tension'].includes(last()))){
                    switch(section){
                        case 'chorus':
                            maybe('pre-chorus',0.3);
                            break;
                        case 'drop':
                            maybe('pre-drop',0.8);
                            break;
                    }
                }
                // if(last() !== section || (section !== 'chorus' && section !== 'verse')){
                if(last() !== section){
                    if(!structure.includes(section)) unique++;
                    structure.push(section);
                }


            }
            function maybe(section,pr){
                if(Chance(pr)){
                    add(section);
                }
            }

            function insert(section){
                //cant split drop/main-section
                //chorus/pre-chorus
                //drop/pre-drop

                //cant be before intro
                //cant be after outro

                let i = 0, iLimit = 30;
                while(true){
                    if(i++ > iLimit) break;

                    let index = Rint(0,structure.length - 1);
                    if(
                        (structure[index] === 'intro') ||
                        (
                            structure[index] === 'main-section' &&
                            structure[index - 1] === 'drop'
                        ) ||
                        (
                            structure[index] === 'chorus' &&
                            structure[index - 1] === 'pre-chorus'
                        ) ||
                        (
                            structure[index] === 'drop' &&
                            structure[index - 1] === 'pre-drop'
                        ) ||
                        (
                            structure[index] === section
                        ) ||
                        (
                            structure[index - 1] === section
                        )

                    ){
                        continue;
                    }
                    if(section === 'chorus' && Chance(0.3)){
                        structure.splice(index,0,'pre-chorus');
                    }
                    structure.splice(index,0,section);
                    break;
                }
            }

            function last(){
                return structure[structure.length - 1];
            }
            function secondLast(){
                return structure[structure.length - 2];
            }
            function repeatable(section){
                return false;
                return ['chorus','verse','main-section'].includes(section);
            }
            function canBeFirst(section){
                return !['bridge','solo','breakdown'].includes(section);
            }
            function canBeLast(section){
                return !['buildup','bridge','tension'].includes(section);
            }

            function canFollow(section1,section2){
                const sections = ['tension','buildup','outro'];
                return !(sections.includes(section1) && sections.includes(section2));
            }


            maybe('intro',0.5);




            // add('tension');
            // add('release');

            const length = Rint(3,12);
            for(let s = 0; s < length; s++){
                let section = Rsection();


                let i = 0, iLimit = 30;
                while(
                    !canFollow(section,last()) ||
                    (section === last() &&
                        (
                            !repeatable(section)
                            ||
                            secondLast() === last()
                        )
                    )
                    ||
                    (s === 0 && !canBeFirst(section) )){
                    if(i++ > iLimit) break;

                    section = Rsection();
                }

                add(section);

                if(section === 'drop'){
                    add(Rset('main-section','verse'));
                }

            }

            maybe('outro',0.5);
            if(!canBeLast(last())){
                add('outro');
            }

            let choruses = 0;
            let verses = 0;
            structure.map( section => {
                choruses += section === 'chorus';
                verses   += section === 'verse';
            });

            if(choruses === 1){
                //Add another one
                insert('chorus');
                choruses++;
            }
            if(choruses > 0){
                //Add verses until there are at least two
                while(verses < 2){
                    //add verse
                    insert('verse');
                    verses++;
                }
            }

            if(!['intro','pre-chorus','pre-drop','tension'].includes(structure[0])){
                structure.splice(0,0,'intro');
                unique++;
            }
            if(!['release','chorus','main-section','outro'].includes(last())){
                add('outro');
            }

            // structure.splice(0,0,'chorus');

            // Console.log(structure);

            return {
                sections:structure,
                unique
            }
        }
        function create_instruments(structure){
            //all_instruments

            //TODO: based on tokenId?`
            const count = {
                percussion:   5, //Rint(1,2),
                bass:         1,//Rint(1,2),
                lead:         2,//Rint(1,2),
                pads:         1,//Rint(1,2), //Rint(1,2),
                crash:         1,//Rint(1,2), //Rint(1,2),
                fx:           all_instruments.fx.length,//Rint(1,2), //Rint(1,2),
            }

            // if(level_test){
            //     for(let type in count){
            //         count[type] = all_instruments[type].length;
            //     }
            // }

            const selection = {
                percussion: {},
                bass:       {},
                crash:      {},
                lead:       {},
                leads:      [],
                pads:       {},
                fx:         {},
                sweepupInset:{},
                fxs:        {
                    sweepup: [],
                    sweepdown: [],
                    stab: [],
                },
            };

            const percussion_categories = {
                kick:  false,
                snare: false,
                clap:  true,    //no more clap (moved to snare)
                hat:   false,
                perc:  !Chance(0.8),
            };
            if(percussion_categories.clap) count['percussion']--;
            if(percussion_categories.perc) count['percussion']--;

            for(let type in count){
                let k = 0;
                for(let i = 0; i < count[type];i){
                    let instrument;
                    let sweepup = false;

                    // Console.log(all_instruments[type].length);

                    // let i = ;
                    // Console.log(i);
                    // Console.log(type,all_instruments[type]);
                    if(type !== 'percussion'){

                        if(genesis && ['lead','pads','bass'].includes(type)){
                            let instrumentName;
                            if(type === 'pads'){
                                instrumentName = 'analogpad1';
                            }else if(type === 'bass'){
                                instrumentName = 'neurobass';
                            }else{
                                if(selection.leads.length === 0){
                                    instrumentName = 'sineserenity';
                                }else{
                                    instrumentName = 'sineserenitydelay';
                                }
                            }
                            let index = -1;
                            for(let i = 0; i < all_instruments[type].length; i++){
                                if( all_instruments[type][i][0] === instrumentName){
                                    index = i;
                                    break
                                }
                            }
                            if(index < 0){
                                index = Rint(0,all_instruments[type].length - 1);
                            }
                            instrument = all_instruments[type].splice(
                                index,
                                1
                            )[0];

                        }else{
                            instrument = all_instruments[type].splice(
                                Rint(0,all_instruments[type].length - 1),
                                1
                            )[0];
                        }



                        if(type === 'fx'){
                            const category = instrument[1].category;
                            sweepup = category === 'sweepup';

                            selection.fxs[category].push(
                                instrument[0]
                            )
                        }
                    }else{
                        const j = Rint(0,all_instruments[type].length - 1);
                        const category = all_instruments[type][j][1].category;
                        // Console.log('-=>',j,category);
                        if(percussion_categories[category]) {
                            // i--;
                            k++;
                            if(k > 100){
                                // Console.log('INSUFFICIENT PERCUSSION INSTRUMENTS');
                                break
                            }
                            continue
                        };




                        instrument = all_instruments[type].splice(
                            j,
                            1
                        )[0];
                        percussion_categories[category] = true;

                    }


                    // if(!['bass','lead','pads','fx'].includes(type)){
                    //     Console.log('add',type,instrument.name);
                    //     selection[type][instrument.name] = instrument;
                    //     synth.add_instrument(
                    //         instrument.name,
                    //         instrument.options,
                    //         instrument.components
                    //     )
                    // }else{
                    const thisInstrument = {
                        name:       instrument[0],
                        options:    instrument[1],
                        components: instrument[2],
                    }

                    selection[type][thisInstrument.name] = thisInstrument;
                    if(type === 'lead'){
                        selection.leads.push(thisInstrument.name);
                    }



                    const components = {};
                    for(let component in thisInstrument.components){
                        components[component] = synth[component](
                            thisInstrument.components[component]
                        );
                    }

                    if(sweepup){
                        selection.sweepupInset[thisInstrument.name] = thisInstrument.components.filter.a;
                    }


                    synth.add_instrument(
                        thisInstrument.name,
                        thisInstrument.options,
                        components
                    )
                    // }
                    i++;
                }

            }

            return selection;
        }
        function generate_properties(){
            function generate_lengths(){
                const lengths = {
                    'intro':        Rint(2,4),
                    'outro':        Rint(2,4),

                    'breakdown':    Rint(2,3),

                    'buildup':      Rint(1,2),

                    'bridge':       Rint(3,4),
                    'main-section': Rint(3,4),

                    'chorus':       Rint(3,4),
                    'pre-chorus':   0,  //From buildup,

                    'solo':         Rint(4,5),
                    'drop':         0,  //From breakdown
                    'pre-drop':     0,

                    'tension':      0, //From buildup
                    'release':      0, //From buildup

                    'verse':        Rint(3,4),
                }

                let l = lengths['solo'];

                let subtractor = 1;
                function subtract(){
                    if(subtractor === 0){
                        return 0;
                    }
                    if(Chance(0.5)){
                        subtractor--
                        return 1;
                    }
                    return 0;
                }
                if(lengths['main-section'] > l){
                    lengths['main-section'] = l - 1;
                }
                l = lengths['main-section'];
                lengths['bridge'] =
                    lengths['verse'] =
                        lengths['chorus'] = l;

                if(lengths['bridge'] > l){
                    lengths['bridge'] = l - subtract();
                }
                l = lengths['bridge'];

                // if(lengths['verse'] > l){
                //     lengths['verse'] = l - subtract();
                // }
                // l = lengths['verse'];
                //
                //
                // if(lengths['chorus'] > l){
                //     lengths['chorus'] = l - 1;
                // }
                // l = lengths['chorus'];

                if(lengths['intro'] >= l){
                    lengths['intro'] --;
                }
                lengths['outro'] = lengths['intro'];
                l = lengths['outro'];

                if(lengths['breakdown'] >= l){
                    lengths['breakdown'] = Math.max(2,l-1);
                }
                lengths['drop'] = lengths['breakdown'];
                l = lengths['breakdown'];

                // if(lengths['buildup'] >= l){
                //     lengths['buildup'] = Math.max(1,l-1);
                // }
                lengths['pre-chorus'] =
                    lengths['tension'] =
                        lengths['release'] = lengths['buildup'];

                for(let section in lengths){
                    lengths[section] = Math.pow(2,lengths[section]);
                }
                return lengths;
            }

            const scale = randomScale();
            const shifts = get_quantised_shifts(scale);

            return {
                key: {
                    note: randomKey(),
                    octave: Rint(2,4),
                    mid_shift: shifts[Rset(2,4,6)],
                    bridge_shift: Rarray(shifts),
                },
                timeSignature: [
                    Rint(4,4),  //beats per bar (because of rhythm stuff)
                    4   //note value of 1 beat (1/n, ie quarter)
                ],
                // base_division: 1/4,//Chance(0.5)?1/4:1/3,
                scale: scale,
                tempo: tempo,
                lengths: generate_lengths(),
            }
        }

        function generate_elements(instruments,properties,structure){

            // Console.log(instruments);
            // Console.log(structure);

            function get_quantised_chord_shifts(scale){
                const quantised = get_quantised_shifts(scale);

                let shifts = [];
                for(let i = 0; i < 2; i++){
                    quantised.map( j => {
                        if(!shifts.includes(j + i * 12)){
                            shifts.push(j + i * 12);
                        }
                    });
                }
                return shifts;
            }
            function pick_chord(first,scale){
                function chord_position(first,num,scale){
                    const shifts = get_quantised_chord_shifts(scale);
                    let i = shifts.indexOf(first);
                    return shifts[i + num - 1];
                }
                let chance = R(0,1);
                const shifts = [first];
                if(chance < 0.85){
                    //Major/minor
                    shifts.push (
                        chord_position(first,3,scale),
                        chord_position(first,5,scale),
                    );
                }else if(chance < 0.90){
                    //Diminished
                    shifts.push (
                        chord_position(first,3,scale) - 1,
                        chord_position(first,5,scale) - 1,
                    );
                }else if(chance < 0.95){
                    //Augmented
                    shifts.push (
                        chord_position(first,3,scale),
                        chord_position(first,5,scale) + 1,
                    );
                }else{
                    //Descended
                    shifts.push (
                        chord_position(first,3,scale),
                    );
                    if(R(0,1) < 0.5){
                        shifts.push(
                            chord_position(first,2,scale)
                        );
                    }else{
                        shifts.push(
                            chord_position(first,4,scale)
                        );
                    }
                }
                chance = R(0,1);
                if(chance < 0.08){
                    //7th
                    shifts.push(
                        chord_position(first,7,scale)
                    );
                }else if(chance < 0.12){
                    //9th
                    shifts.push(
                        chord_position(first,9,scale)
                    );
                }else if(chance < 0.14){
                    //6th
                    shifts.push(
                        chord_position(first,6,scale)
                    );
                }
                return shifts;
            }


            function euclidian_sequence(
                step_length,    //total possible events (each one is 1 * note interval)
                events,         //how many are hits
                offset,         //start offset
                note_interval,  //relative to whole note
                length          //number of whole notes
            ){
                const hits = [];
                for(let i = 0; i < events; i++){
                    hits.push((Math.floor(i/events*step_length)+offset)%step_length)
                }

                // Console.log('            length:',length);
                // Console.log('     note_interval:',note_interval);
                // Console.log('                  >>',length/note_interval)



                const sequence = [];
                for(let step = 0; step < length/note_interval; step++){
                    if(hits.includes(step%step_length)){
                        sequence.push(step * note_interval)
                    }
                }
                return sequence;
            }
            function euclidian_melody(
                scale,
                unique_notes,      //number of notes for which to create sequences
                min_step_length,   //randomly picks step length, 0 = 1 step
                max_step_length,   //randomly picks step length, 1 = can be full length
                min_events,        //randomly picks event count, 0 = no step is event
                max_events,        //randomly picks event count, 1 = every step is event
                note_interval,     //relative to whole note
                length             //number of whole notes
            ){
                const max_possible_steps = Math.round(length / note_interval);

                const shifts = get_quantised_shifts(scale);
                const melody = {};
                while(shifts.length > unique_notes){
                    shifts.splice(Rint(0,shifts.length - 1),1);
                }

                shifts.map(shift => {
                    //shorter step length means greater chance of repetition
                    //more events relative to step length = fuller
                    const step_length = 1 + Math.round(R(min_step_length,max_step_length) * (max_possible_steps - 1))
                    const events = Rint(
                        Math.round(step_length * min_events),
                        Math.round(step_length * max_events)
                    );
                    const offset = Rint(0,step_length);
                    //mix it up even the other tho are the same

                    melody[shift] = euclidian_sequence(
                        step_length,    //total possible events (each one is 1 * note interval)
                        events,         //how many are hits
                        offset,         //start offset
                        note_interval,  //relative to whole note
                        length          //number of whole notes
                    );

                });

                return melody;
            }
            function euclidian_rhythm(
                scale,
                unique_notes,
                min_length_notes,
                max_length_notes,
                min_events,
                max_events,
                offset_range,
                subsequence_count_min,
                subsequence_count_max
            ){
                const shifts = get_quantised_shifts(scale);
                while(shifts.length > unique_notes){
                    shifts.splice(Rint(0,shifts.length - 1),1);
                }
                // Console.log(' SHIFTS:',shifts.length);
                const step_duration = 1/16;

                const subsequence_count = 2*Math.round(Rint(subsequence_count_min,subsequence_count_max)/2);

                // Console.log('   SUBSEQUENCE COUNT:',subsequence_count);
                const rhythm = {};
                shifts.map(shift => {
                    rhythm[shift] = [];
                })

                function subsequence(
                    scale,
                    unique_notes,
                    min_length_notes,
                    max_length_notes,
                    min_events,
                    max_events,
                    offset_range
                ){

                    const note_length = Rint(min_length_notes,max_length_notes);
                    // Console.log('      NOTE LENGTH:',note_length);
                    const step_length = note_length * 32 / 4;
                    // Console.log('      STEP LENGTH:',step_length);

                    const subsequence = {};
                    shifts.map(shift => {
                        // Console.log('        SHIFT:',shift);
                        const event_count = Rint(min_events,max_events);
                        const offset = Math.round(R(0,offset_range) * step_length);
                        // Console.log('         EVENT COUNT',event_count);
                        // Console.log('         OFFSET',offset);
                        subsequence[shift] = euclidian_sequence(
                            step_length,        //total possible events (each one is 1 * note interval)
                            event_count,         //how many are hits
                            offset,             //start offset
                            step_duration,      //relative to whole note
                            note_length /4         //number of whole notes
                        );
                        // Console.log(subsequence[shift]);
                    });
                    return {
                        note_length,
                        sequence: subsequence
                    }
                }

                let start_time = 0;
                for(let i = 0; i < subsequence_count; i++){
                    // Console.log('   SUBSEQUENCE:')
                    const sub = subsequence(
                        scale,
                        unique_notes,
                        min_length_notes,
                        max_length_notes,
                        min_events,
                        max_events,
                        offset_range
                    );
                    // Console.log(sub.sequence);
                    for(let shift in sub.sequence){
                        sub.sequence[shift].map( hit => {
                            rhythm[shift].push(start_time + hit);
                        });
                        start_time += sub.note_length;
                    }
                }

                // Console.log(rhythm);

                return rhythm;
            }


            function arpeggiator(
                scale,
                first_shift,    //first note (as a shift)
                note_interval,  //relative to whole note
                length,          //number of whole notes
                force_ascent,
                octave_lock
            ){
                // Console.log('ARPEGGIATE:',note_interval,length)
                const chord = pick_chord(first_shift,scale);

                // Console.log('chord:',chord);

                //select pattern
                let pattern = [];
                if(!force_ascent){
                    while(chord.length > 0){
                        let shift;
                        if(pattern.length === 0){
                            shift = chord.splice(
                                0,1
                            )[0];
                        }else{
                            shift = chord.splice(
                                Rint(0,chord.length - 1),1
                            )[0];
                        }

                        if(typeof shift !== 'undefined'){
                            pattern.push(
                                shift
                            );
                        }

                    }
                    if(R(0,1) < 0.3){
                        //boomerang
                        const pattern_reversed = [];

                        pattern.map( shift => {
                            pattern_reversed.splice(0,0,shift);
                        });
                        pattern_reversed.splice(0,1);
                        pattern_reversed.pop();

                        pattern.push(...pattern_reversed);


                        // for(let i = pattern.length - 2; i > 0; i--){
                        //     pattern.push(pattern[i]);
                        // }
                    }
                }else{
                    chord.map(shift => {
                        if(typeof shift !== 'undefined'){
                            pattern.push(shift);
                        }
                    })
                    if(force_ascent === -1){
                        pattern.reverse();
                    }


                }


                //octave step
                const extra_octaves = octave_lock?0:Rint(1,2);
                const descend_octaves = (R(0,1) < 0.8);

                // Console.log('extra octaves:',extra_octaves);
                // Console.log('descend:',descend_octaves);

                //multiple runs before step up
                const repeat_octave = R(0,2);

                // Console.log('Arpeggiate pattern:');
                // Console.log(pattern);

                const arpeggio = {};
                let position = 0;

                let half = false;
                let third = 0;
                for(let step = 0; step < length/note_interval; step){
                    for(let o = 0; o <= extra_octaves; o++){
                        const octave = !descend_octaves?o* 12:(extra_octaves - o)* 12;
                        for(let r = 0; r <= repeat_octave; r++){
                            for(let s = 0; s < pattern.length; s++){
                                const shift = pattern[s];
                                const thisShift = shift*1 + octave;

                                if(isNaN(thisShift)){
                                    console.error('ERROR:',shift,octave);
                                }

                                if(!arpeggio[thisShift]) arpeggio[thisShift] = [];

                                arpeggio[thisShift].push(step * note_interval);

                                if(half) {
                                    step += 0.5
                                    half = false;
                                }else if(third){
                                    third++
                                    step += 1/3;
                                    if(third >= 3) third = false;
                                }else{
                                    const thisStep = Rset(
                                        // 'third',
                                        0.5,0.5,0.5,
                                        1,1,1,1,1,1,1,1,1,1,1,1,1,
                                        2,2,2);
                                    if(thisStep === 'third'){
                                        step += 1/3;
                                        third++;
                                    }else{
                                        step += thisStep;
                                        half = thisStep === 0.5;
                                    }
                                }

                                if(step >= length/note_interval){
                                    return arpeggio;
                                }


                                // position += note_interval;
                                // position = roundTo(position,5);
                                // if(position >= length){
                                //     return arpeggio;
                                // }
                            }
                        }
                    }
                }
                // while(position < length){
                //     for(let o = 0; o <= extra_octaves; o++){
                //         const octave = !descend_octaves?o* 12:(extra_octaves - o)* 12;
                //         for(let r = 0; r <= repeat_octave; r++){
                //             for(let s = 0; s < pattern.length; s++){
                //                 const shift = pattern[s];
                //                 const thisShift = shift*1 + octave;
                //
                //                 if(isNaN(thisShift)){
                //                     Console.log('ERROR:',shift,octave);
                //                 }
                //
                //                 if(!arpeggio[thisShift]) arpeggio[thisShift] = [];
                //                 // Console.log('>>',position);
                //                 arpeggio[thisShift].push(position);
                //                 // Console.log(position,':',thisShift + octave * 12);
                //                 position += note_interval;
                //                 position = roundTo(position,5);
                //                 if(position >= length){
                //                     return arpeggio;
                //                 }
                //                 // else{
                //                 //     Console.log(position,'is less than',length);
                //                 // }
                //             }
                //         }
                //     }
                // }
                return arpeggio;
            }
            function random_melody(
                scale,
                unique_notes,   //number of notes for which to create sequences
                quiet_ratio,    //ratio of notes that arent assigned (1 = no notes)
                note_interval,  //relative to whole note
                length,          //number of whole notes
                descending,         //is descending
                octave_lock = false
            ){
                const shifts = get_quantised_shifts(scale);
                const melody = {};
                while(shifts.length > unique_notes){
                    shifts.splice(Rint(0,shifts.length - 1),1);
                }


                let half = false;
                let third = 0;
                let d = shifts.length - 1;
                let shift;// = Rarray(shifts);

                let up_octave = descending?true:Chance(0.5); //initial state of up_octave, makes sense for descending to start up
                if(octave_lock) up_octave = false;


                for(let step = 0; step < length/note_interval; step){
                    if(descending){
                        shift = shifts[d];
                        if(Chance(0.6)) d--;

                        if(d < 0){
                            d += shifts.length;
                        }
                    }else{
                        shift = Rarray(shifts);
                    }
                    if(Chance(0.1) && !octave_lock) up_octave = !up_octave;
                    shift = shift + 12 * up_octave;

                    if(R(0,1) < quiet_ratio) continue;
                    if(!melody[shift]) melody[shift] = [];
                    melody[shift].push(step * note_interval);

                    if(half) {
                        step += 0.5
                        half = false;
                    }else if(third){
                        third++
                        step += 1/3;
                        if(third >= 3) third = false;
                    }else{
                        const thisStep = Rset(
                            // 'third',
                            0.5,0.5,0.5,
                            1,1,1,1,1,1,1,1,1,1,1,1,1,
                            2,2,2);
                        if(thisStep === 'third'){
                            step += 1/3;
                            third++;
                        }else{
                            step += thisStep;
                            half = thisStep === 0.5;
                        }
                    }

                }

                return melody;
            }

            function arpeggio_melody(
                scale,
                note_interval,  //relative to whole note
                length,          //number of whole notes
                force_root_note,
                force_ascent,
                octave_lock
            ){
                return arpeggiator(
                    scale,
                    force_root_note?0:Rarray(get_quantised_shifts(scale)),
                    note_interval,
                    length,
                    force_ascent,
                    octave_lock
                )
            }

            function random_leader(
                scale,
                unique_notes,           //number of notes for which to create sequences
                repetition_ratio,       //how often a note is repeated (1 = always same note)
                note_interval,          //relative to whole note
                length                  //number of whole notes
            ){
                const shifts = get_quantised_shifts(scale);
                const melody = {};
                const melody_half = {};
                while(shifts.length > unique_notes){
                    shifts.splice(Rint(0,shifts.length - 1),1);
                }

                let shift;
                for(let step = 0; step < length/note_interval; step ++){
                    if(!(shift && R(0,1) < repetition_ratio)){
                        shift = Rarray(shifts);
                    }
                    if(!melody[shift]) melody[shift] = [];
                    melody[shift].push(step * note_interval);
                    if(step%2 === 0){
                        if(!melody_half[shift]) melody_half[shift] = [];
                        melody_half[shift].push(step * note_interval);
                    }

                }
                return [melody_half,melody];
            }

            function arpeggiate_leader(
                scale,
                leader,
                note_interval,          //relative to whole note
            ){

                const leader_melody = leader;

                let leader_sorted = [];
                for(let shift in leader_melody){
                    leader_melody[shift].map(note_time => {
                        leader_sorted.push({
                            note_time,
                            shift
                        })
                    });
                }
                leader_sorted.sort((a,b)=>{
                    return (a.note_time < b.note_time)?-1:1;
                });

                const arpeggiated = {};

                let length;
                if(leader_sorted.length > 1){
                    length = (leader_sorted[1].note_time - leader_sorted[0].note_time);
                }else{
                    length = 2; //TODO: based on two bars
                }

                // Console.log(leader_sorted);
                // Console.log('length:',length);
                // Console.log(note_interval);

                for(let b = 0; b < leader_sorted.length; b++){
                    const leader_time = leader_sorted[b].note_time;
                    const A = arpeggiator(
                        scale,
                        leader_sorted[b].shift,    //first note (as a shift)
                        note_interval,             //relative to whole note
                        length                     //number of whole notes
                    );

                    for(let shift in A){
                        if(!arpeggiated[shift]) arpeggiated[shift] = [];
                        A[shift].map(time => {
                            if(time >= length) return;
                            arpeggiated[shift].push(time+leader_time);
                        });
                        // arpeggiated[shift].push(...A[shift]);
                    }
                }
// ``            Console.log('>>>???')
//             Console.log(arpeggiated);

                return arpeggiated;

            }

            function walk(
                scale,
                leader,
                interval_variation,     //how often it adds a 1/2 or 1/4 in
                note_interval,          //relative to whole note
            ){
                //infers length from leader //number of whole notes

                const shifts_scaled = get_quantised_shifts(scale);
                function quantise_shift(shift){
                    if(shift > 12){
                        // Console.log('gt');
                        return shifts_scaled[shift%12] + 12;
                    }else if(shift < 0){
                        // Console.log('lt');
                        return -12 + shifts_scaled[12 + (shift%12)];
                    }else{
                        // Console.log('in',shift);
                        return shifts_scaled[shift];
                    }
                }
                function steps(start,target,start_beat,length,note_interval,interval_variation){
                    start = parseInt(start);
                    target = parseInt(target);
                    const sequence = {};
                    sequence[start] = [start_beat];
                    let step_last = start;
                    function do_step(pos){
                        let step = quantise_shift(
                            start +
                            Math.round(pos/length * (target - start) ));
                        if(step === step_last){
                            if(R(0,1) < 0.5){
                                step += Rset(-1,1);
                            }
                        }
                        step_last = step;
                        if(!sequence[step]) sequence[step] = [];
                        sequence[step].push(start_beat + pos);
                    }
                    for(let b = note_interval; b < length; b += note_interval){
                        do_step(b);
                        if(Chance(interval_variation)){
                            do_step(
                                b + note_interval * Rset(-0.25,0.25,0.5)
                            )
                        }
                    }
                    return sequence;
                }

                const leader_melody = leader;

                let leader_sorted = [];
                for(let shift in leader_melody){
                    leader_melody[shift].map( beat => {
                        leader_sorted.push({
                            beat,
                            shift
                        })
                    });
                }
                leader_sorted.sort((a,b)=>{
                    return (a.beat < b.beat)?-1:1;
                });

                let all_steps = {};
                for(let b = 0; b < leader_sorted.length - 1; b++){
                    const S = steps(
                        leader_sorted[b].shift,
                        leader_sorted[b + 1].shift,
                        leader_sorted[b].beat,
                        leader_sorted[b + 1].beat - leader_sorted[b].beat,
                        note_interval
                    );
                    for(let shift in S){
                        if(!all_steps[shift]) all_steps[shift] = [];
                        all_steps[shift].push(...S[shift]);
                    }
                }

                return all_steps;

            }

            function chords(
                scale,
                leader
            ){
                const leader_melody = leader;
                let chorded = {};
                for(let shift in leader_melody){
                    const chord = pick_chord(shift,scale);
                    chord.map(s => {
                        if(!chorded[s]) chorded[s] = [];
                        leader_melody[shift].map( beat => {
                            if(!chorded[s].includes(beat)){
                                chorded[s].push(beat);
                            }
                        });
                    });
                }
                return chorded;
            }
            function pulsed_chords(
                scale,
                leader
            ){
                const leader_melody = leader;
                let chorded = {};
                for(let shift in leader_melody){
                    const chord = pick_chord(shift,scale);
                    chord.map(s => {
                        if(!chorded[s]) chorded[s] = [];
                        leader_melody[shift].map( beat => {
                            for(let b = 0; b < oneBar(); b += oneBeat()){
                                if(!chorded[s].includes(beat + b)){
                                    chorded[s].push(beat + b);
                                }
                            }


                        });
                    });
                }
                return chorded;
            }




            function oneBeat(){
                return 1/properties.timeSignature[1];
            }
            function oneBar(){
                return properties.timeSignature[0] /properties.timeSignature[1];
            }
            function bars(count){
                return oneBar() * count;
            }

            function crash(section){
                if(['chorus','main-section','solo','drop'].includes(section)){
                    return {
                        0: [0]
                    }
                }else{
                    return {}
                }
            }

            const elements = {

                leaders:   {},            //one per  section
                leaders2x: {},           //one per  section
                chords:  {},            //one per  section
                chords2x:  {},            //one per  section
                pulsed_chords:  {},     //one per  section
                arpeggiated_leaders: {},//one per  section
                walks: {},              //one per  section

                crashes: {},            //one per section

                sweeps: {
                    up:     {}, //one per sweepup instrument
                    down:   null, //one per sweepdown
                },
                stabs:  [], //2x number of unique sections

                fills: {

                },  //2x number of unique sections per instrument


                rhythms: {
                    a: {},
                    b: {},
                    c: {},
                    d: {},
                    e: {},
                    f: {},
                },            //six per instrument
                melodies: {
                    //melodies
                    // a: [
                    //  {},
                    //  {}
                    // ],
                    // b: {},
                    // c: {},
                    // d: {},
                    // e: {},
                    // f: {},
                },

                leads: {

                },

                arpeggios:{
                    // a: {},
                    // b: {},
                    // c: {},
                    // d: {},
                },
                bass: {
                    // a: {},
                    // b: {},
                    // c: {},
                    // d: {},
                    // e: {},
                },
                pads: {
                    a: Rset('leaders',null),
                    b: Rset('leaders',null),
                    c: Rset('chords'),
                    d: Rset('chords'),
                    // e: Chance(0.5)?'leaders':null,
                    e: Rset('leaders',null),
                    f: Rset('chords'),
                },

                trimEnds: {
                    //sections if applicable
                    breakdown:      Chance(0.1),
                    chorus:         Chance(0.1),
                    solo:           Chance(0.1),
                    'main-section': Chance(0.1),
                }
            }

            const sections = {};
            //TODO:
            const division = 1/properties.timeSignature[0]/2;


            //init sections & Generate Leaders & chords
            structure.sections.map( section => {

                sections[section] = {
                    lead: null,
                    pads: null,
                    bass: null,
                };

                elements.lengths = {};

                // elements.leaders[section] =
                //     random_leader(
                //         properties.scale,
                //         Rint(4,8),                          //number of notes for which to create sequences
                //         R(0.1,0.3),                         //how often a note is repeated (1 = always same note)
                //         oneBar(),                           //relative to whole note
                //         bars(properties.lengths[section])   //number of whole notes
                //     );
                const leader = random_leader(
                    properties.scale,
                    Rint(4,8),                          //number of notes for which to create sequences
                    R(0.1,0.3),                         //how often a note is repeated (1 = always same note)
                    oneBar()/2,               //relative to whole note
                    bars(properties.lengths[section])   //number of whole notes
                );

                elements.leaders[section]   = leader[0];
                elements.leaders2x[section] = leader[1];

                elements.crashes[section] = crash(section);

                elements.chords[section] =
                    chords(
                        properties.scale,
                        elements.leaders[section]
                    );
                elements.chords2x[section] =
                    chords(
                        properties.scale,
                        elements.leaders2x[section]
                    );


                elements.pulsed_chords[section] =
                    pulsed_chords(
                        properties.scale,
                        elements.leaders[section]
                    );



                elements.arpeggiated_leaders[section] =
                    arpeggiate_leader(
                        properties.scale,
                        elements.leaders[section],
                        // oneBeat()/2
                        division
                    );

                elements.walks[section] =
                    walk(
                        properties.scale,
                        elements.leaders[section],
                        0.3,
                        // oneBeat()
                        division
                    )


            });

            //Assign sections
            for(let section in sections){
                switch(section){
                    case 'intro':
                        sections[section].lead = Rset('ma','aa','ab');
                        // sections[section].bass = 'a'; //added
                        sections[section].pads = 'd';
                        break;
                    case 'outro':
                        sections[section].lead = Rset('mb','aa','ab');
                        // sections[section].bass = 'a'; //added
                        sections[section].pads = 'd';
                        break;
                    case 'breakdown':
                        sections[section].lead = Rset('md','ab');
                        // sections[section].bass = 'a'; //added
                        sections[section].pads = 'd';
                        break;
                    case 'buildup':
                        sections[section].lead = 'mc';
                        sections[section].pads = 'c';
                        sections[section].bass = 'd';
                        break;
                    case 'bridge':
                        sections[section].lead = Rset('mf','ab');
                        sections[section].pads = 'c';
                        sections[section].bass = 'c';
                        break;
                    case 'main-section':
                        sections[section].lead = Rset('mb','aa');
                        sections[section].pads = 'a';
                        sections[section].bass = 'a';
                        break;
                    case 'chorus':
                        sections[section].lead = Rset('ma','aa','ab');
                        sections[section].pads = 'a';
                        sections[section].bass = 'a';
                        break;
                    case 'pre-chorus':
                        sections[section].lead = 'mc';
                        sections[section].bass = 'd';
                        break;
                    case 'solo':
                        sections[section].lead = Rset('aa','ac');
                        sections[section].pads = 'b';
                        sections[section].bass = 'b';
                        break;
                    case 'drop':
                        sections[section].lead = Rset('ma','aa','ad');
                        sections[section].pads = 'a';
                        sections[section].bass = 'a';
                        break;
                    case 'pre-drop':

                        break;
                    case 'tension':
                        sections[section].lead = 'mc';
                        sections[section].pads = 'c';
                        sections[section].bass = 'e';
                        break;
                    case 'release':
                        sections[section].lead = 'md';
                        sections[section].pads = 'c';
                        sections[section].bass = 'f';
                        break;
                    case 'verse':
                        sections[section].lead = 'me';
                        sections[section].pads = 'b';
                        sections[section].bass = 'b';
                        break;
                }
            }



            //Sweeps
            //Down
            elements.sweeps.down = generate_sweepdown();

            // Console.log(instruments.fx);
            // Console.log( instruments.fxs.sweepup);

            //Up
            instruments.fxs.sweepup.map ( instrument => {
                // Console.log('>>',instrument)
                elements.sweeps.up[instrument] = generate_sweepup(
                    instruments.sweepupInset[instrument]
                    // instruments.fx[instrument].options
                );
            });

            //Stabs

            for(let i = 0; i < structure.unique * 1.5; i++){
                elements.stabs.push(
                    generate_stab()
                );
            }



            // function melody_length(m){
            //     return lead_length(m,'mel');
            // }
            // function arpeggio_length(m){
            //     return lead_length(m,'arp');
            // }
            function lead_length(m){
                let lengths = {};
                // Console.log(sections,m,type);
                for(let section in sections){
                    const lead = sections[section].lead;
                    if( lead && lead === m){
                        // Console.log(lead);
                        const length = properties.lengths[section];
                        lengths[length] = true;
                    }
                }


                const length_names = Object.keys(lengths);
                lengths = [];
                length_names.map(length => {
                    lengths.push(parseInt(length));
                })
                lengths.sort((a,b)=>a<b?-1:1);

                if(lengths.length === 0){
                    return 0;
                }else if(lengths.length === 1) {
                    return lengths[0] * 1;
                }else if(lengths.length === 2){
                    return lengths[1] * 1;
                }else if(lengths.length % 2 === 0){
                    return lengths[lengths.length/2 - 1] * 1;
                    // return lengths[lengths.length/2] * 1;
                }else{
                    return lengths[Math.floor(lengths.length/2)] * 1;
                    // return lengths[Math.ceil(lengths.length/2)] * 1;
                }
            }
            function bass_length(m){
                let lengths = {};
                for(let section in sections){
                    const bass = sections[section].bass;
                    if( bass && bass === m){
                        const length = properties.lengths[section];
                        lengths[length] = true;
                    }
                }

                // lengths = Object.keys(lengths);
                // lengths.sort();
                const length_names = Object.keys(lengths);
                lengths = [];
                length_names.map(length => {
                    lengths.push(parseInt(length));
                })
                lengths.sort((a,b)=>a<b?-1:1);

                if(lengths.length === 0){
                    return 0;
                }else if(lengths.length === 1) {
                    return lengths[0] * 1;
                }else if(lengths.length === 2){
                    return lengths[1] * 1;
                }else if(lengths.length % 2 === 0){
                    return lengths[lengths.length/2 - 1] * 1;
                }else{
                    return lengths[Math.floor(lengths.length/2)] * 1;
                }
            }


            //Generate Melodies and arpeggios and bass
            for(let section in sections){

                elements.lengths[section] = {};



                const lead = sections[section].lead;
                if(lead){
                    let length_bars = lead_length(lead);

                    if(!elements.leads[lead]) {
                        elements.leads[lead] = generate_leads(lead,length_bars);
                    }
                    elements.lengths[section].lead = length_bars;
                }
                const bass = sections[section].bass;
                if(bass){
                    let length_bars = bass_length(bass);

                    if(!elements.bass[bass]){
                        elements.bass[bass] = generate_bass(bass,length_bars);
                    }
                    elements.lengths[section].bass = length_bars;
                }
            }
            // Console.log(el)

            function secondsToBeats(seconds){
                return seconds/60 * properties.tempo;

            }
            function generate_sweepdown(){
                return {
                    0:[0]
                }
            }
            function generate_sweepup(inset){
                if(inset.length){
                    inset = inset[0];
                }else{
                    inset = secondsToBeats(inset);
                }

                // if(!instrument.useSeconds){
                //     inset = instrument.duration;
                // }else{
                //     inset = secondsToBeats(instrument.duration);
                // }

                return {
                    // 0:[0]
                    // 0:[properties.timeSignature[0] - inset]
                    0:[-inset]
                }
            }
            function generate_stab(){
                if(Chance(0.5)){
                    return euclidian_melody(
                        properties.scale,
                        5,
                        0.5,
                        1,
                        0.1,
                        0.5,
                        division/2,
                        bars(1)
                    )
                }else{
                    return random_melody(
                        properties.scale,
                        6,                       //number of notes for which to create sequences
                        0.4,                       //ratio of notes that arent assigned (1 = no notes)
                        // oneBeat()/2,                     //relative to whole note
                        division/2,                           //relative to whole note
                        bars(1)   //number of whole notes
                    );
                }


            }


            function generate_melody_lead(length_bars){
                if(Chance(0.5)){
                    return random_melody(
                        properties.scale,
                        6,                       //number of notes for which to create sequences
                        0.2,                       //ratio of notes that arent assigned (1 = no notes)
                        // oneBeat()/2,                     //relative to whole note
                        division,                           //relative to whole note
                        bars(length_bars)   //number of whole notes
                    );
                }else{
                    return euclidian_melody(
                        properties.scale,
                        5,
                        0.5,
                        1,
                        0.2,
                        0.6,
                        division,
                        bars(length_bars)
                    );
                }
            }
            function split_lead(melody,length_bars,pattern){
                const leads = [
                    {},
                    {},
                ]
                function append_melody(lead,melody,start_bar){
                    for(let shift in melody){
                        if(!lead[shift]) lead[shift] = [];
                        // Console.log(melody);
                        melody[shift].map(step => {
                            lead[shift].push(
                                step + bars(start_bar)
                            );
                        });
                    }
                    return lead;
                }

                const modulo = pattern===0?2:4;
                for(let i = 0; i < length_bars; i++){
                    if(modulo === 2){
                        if(i%modulo === 0){
                            leads[0] = append_melody(
                                leads[0],
                                melody,
                                i
                            );
                        }else {
                            leads[1] = append_melody(
                                leads[1],
                                melody,
                                i
                            );
                        }
                    }else{
                        if(i%modulo === 0){
                            leads[0] = append_melody(
                                leads[0],
                                melody,
                                i
                            );
                        }else if((i - 2)%modulo === 0){
                            leads[1] = append_melody(
                                leads[1],
                                melody,
                                i
                            );
                        }
                    }
                }
                return leads;
            }
            function generate_melody_call(length_bars,pattern,key){
                if(length_bars === 0){
                    return {};
                }else if(length_bars === 1){
                    return generate_melody_lead(1);
                }else{
                    const modulo = pattern===0?2:4;
                    const shifts = {};
                    for(let i = 0; i < length_bars; i++){
                        if(i%modulo === 0){
                            const thisBar = generate_melody_lead(1);
                            for(let shift in thisBar){
                                if(!shifts[shift]) shifts[shift] = [];
                                shifts[shift].push(...thisBar[shift]);
                            }
                        }
                    }
                    return shifts;
                }
            }
            function generate_melody_response(length_bars,pattern,key){
                if(length_bars === 0){
                    return {};
                }else if(length_bars === 1){
                    return generate_melody_lead(1);
                }else{
                    const modulo = pattern===0?2:4;
                    const offset = modulo/2;
                    const shifts = {};
                    for(let i = 0; i < length_bars; i++){
                        if((i-offset)%modulo === 0){
                            const thisBar = generate_melody_lead(1);
                            for(let shift in thisBar){
                                if(!shifts[shift]) shifts[shift] = [];
                                shifts[shift].push(...thisBar[shift]);
                            }
                        }
                    }
                    return shifts;
                }
            }

            function generate_melodies(m,length_bars){
                const pattern = Rint(0,1);
                switch (m){
                    case 'a':
                        return [
                            generate_melody_lead(length_bars),
                            Chance(0.5)?'chords':'arpeggiate_leader'
                            // Rset('chords','arpeggiate_leader','pulsed_chords')
                        ]
                    case 'b':
                        return [
                            Chance(0.5)?'chords':'arpeggiate_leader',
                            // Rset('chords','arpeggiate_leader','pulsed_chords'),
                            generate_melody_lead(length_bars),
                        ]
                    case 'c':
                        return [
                            generate_melody_call(length_bars,pattern),
                            generate_melody_response(length_bars,pattern)
                        ];
                    case 'd':
                        return [
                            generate_melody_response(length_bars,pattern),
                            generate_melody_call(length_bars,pattern)
                        ];
                    case 'e':
                        const melody = generate_melody_lead(1);
                        return split_lead(melody,length_bars,pattern);
                    case 'f':
                        return [
                            generate_melody_lead(length_bars),
                            null,
                            // Rset('arpeggiate_leader','pulsed_chords'),//was null,
                        ]
                }
            }


            function generate_arpeggio_lead(length_bars){
                if(Chance(0.5)){
                    return 'arpeggiate_leader';
                }else{
                    return arpeggio_melody(
                        properties.scale,
                        // oneBeat()/2,                //relative to whole note
                        division,                      //relative to whole note
                        bars(length_bars)               //number of whole notes
                    )
                }
            }
            function generate_arpeggio_call(length_bars,pattern,key){
                //root note
                if(length_bars === 0){
                    return {};
                }else if(length_bars === 1){
                    return arpeggio_melody(
                        properties.scale,
                        division,                      //relative to whole note
                        bars(1),               //number of whole notes
                        true                        //force root note
                    )
                }else{
                    const modulo = pattern===0?2:4;
                    const shifts = {};
                    for(let i = 0; i < length_bars; i++){
                        if(i%modulo === 0){
                            const thisBar = arpeggio_melody(
                                properties.scale,
                                division,                      //relative to whole note
                                bars(1),               //number of whole notes
                                true                        //force root note
                            );
                            for(let shift in thisBar){
                                if(!shifts[shift]) shifts[shift] = [];
                                shifts[shift].push(...thisBar[shift]);
                            }
                        }
                    }
                    return shifts;
                }
            }
            function generate_arpeggio_response(length_bars,pattern,key){
                //root note
                if(length_bars === 0){
                    return {};
                }else if(length_bars === 1){
                    return arpeggio_melody(
                        properties.scale,
                        division,                      //relative to whole note
                        bars(1),               //number of whole notes
                        false                        //force root note
                    )
                }else{
                    const modulo = pattern===0?2:4;
                    const offset = modulo/2;
                    const shifts = {};
                    for(let i = 0; i < length_bars; i++){
                        if((i-offset)%modulo === 0){
                            const thisBar = arpeggio_melody(
                                properties.scale,
                                division,                      //relative to whole note
                                bars(1),               //number of whole notes
                                false                        //force root note
                            );
                            for(let shift in thisBar){
                                if(!shifts[shift]) shifts[shift] = [];
                                shifts[shift].push(...thisBar[shift]);
                            }
                        }
                    }
                    return shifts;
                }
            }

            function generate_arpeggios(m,length_bars){
                const pattern = Rint(0,1);
                switch (m){
                    case 'a':
                        return [
                            generate_arpeggio_lead(length_bars),
                            generate_melody_lead(length_bars), //was null
                        ]
                    case 'b':
                        return [
                            generate_arpeggio_call(length_bars,pattern),
                            generate_arpeggio_response(length_bars,pattern)
                        ];
                    case 'c':
                        return [
                            generate_arpeggio_response(length_bars,pattern),
                            generate_arpeggio_call(length_bars,pattern)
                        ];
                    case 'd':
                        return [
                            generate_melody_lead(length_bars),
                            generate_arpeggio_lead(length_bars,pattern)
                        ];
                }
            }

            // function generate_lead(length_bars,intervals,silences,modulo_offset){
            //     //intervals: [start,finish], based on division = Math.pow(2,n)
            //     //silences
            //
            //     if(length_bars === 0){
            //         return {};
            //     }else {
            //         const shifts = {};
            //         if(!modulo_offset) modulo_offset = 0;
            //
            //
            //
            //
            //         for(let i = 0; i < length_bars; i++){
            //             let thisDivision;
            //             if(!intervals){
            //                 thisDivision = division;
            //             }else{
            //                 thisDivision = division / Math.pow(2,
            //                     Math.floor(intervals[0] + (intervals[1] - intervals[0]) * i/(length_bars-1))
            //                     );
            //             }
            //             if(silences && (i - modulo_offset)%silences === 0){
            //                 //skip
            //             }else{
            //                 const selection = Rarray([0,1,2,3,4,5,6]);
            //                 let thisBar;
            //                 switch(selection){
            //                     case 0:
            //                         thisBar = arpeggio_melody(
            //                             properties.scale,
            //                             thisDivision,                      //relative to whole note
            //                             bars(1),               //number of whole notes
            //                             false                        //force root note
            //                         );
            //                         break;
            //                     case 1:
            //                         thisBar = arpeggio_melody(
            //                             properties.scale,
            //                             thisDivision,                      //relative to whole note
            //                             bars(1),               //number of whole notes
            //                             true             //force root note
            //                         );
            //                         break;
            //                     case 2:
            //                         thisBar = random_melody(
            //                             properties.scale,
            //                             6,                       //number of notes for which to create sequences
            //                             0.2,                       //ratio of notes that arent assigned (1 = no notes)
            //                             // oneBeat()/2,                     //relative to whole note
            //                             thisDivision,                           //relative to whole note
            //                             bars(1)   //number of whole notes
            //                         );
            //                         break;
            //                     case 3:
            //                         thisBar = euclidian_melody(
            //                             properties.scale,
            //                             5,
            //                             0.5,
            //                             1,
            //                             0.2,
            //                             0.6,
            //                             thisDivision,
            //                             bars(1)
            //                         );
            //                         break;
            //                 }
            //                 for(let shift in thisBar){
            //                     if(!shifts[shift]) shifts[shift] = [];
            //                     thisBar[shift].map( event => {
            //                         shifts[shift].push(event + oneBar() * i);
            //                     });
            //                 }
            //             }
            //         }
            //         return shifts;
            //     }
            // }

            function alternate_melody(length_bars,melody,melody_length_bars,modulo_offset){
                if(length_bars === 0){
                    return {};
                }else {
                    if(!modulo_offset) modulo_offset = 0;

                    const shifts = {};
                    for(let shift in melody){
                        shifts[shift] = [];
                    }
                    for(let i = 0; i < length_bars/melody_length_bars; i++){
                        if((i-modulo_offset)%2 === 0){
                            for(let shift in melody){
                                melody[shift].map( event => {
                                    const time_adjusted = event + bars(i *melody_length_bars);
                                    if(time_adjusted < bars(length_bars)){
                                        shifts[shift].push(time_adjusted);
                                    }
                                });
                            }
                        }
                    }
                    return shifts;
                }

            }

            function generate_lead(length_bars,type,interval,silences,modulo_offset,invert_silences, modulo_length_bars = 1){
                //intervals: [start,finish], based on division = Math.pow(2,n)
                //silences

                if(length_bars === 0){
                    return {};
                }else {

                    if(!modulo_offset) modulo_offset = 0;

                    let full_melody;
                    switch(type){
                        case 'descent0':
                            full_melody =
                                arpeggio_melody(
                                    properties.scale,
                                    interval,
                                    bars(length_bars/2),
                                    false,
                                    -1,
                                    false
                                )


                            // random_melody(
                            //     properties.scale,
                            //     6,                       //number of notes for which to create sequences
                            //     0.2,                       //ratio of notes that arent assigned (1 = no notes)
                            //     // oneBeat()/2,                     //relative to whole note
                            //     interval,                           //relative to whole note
                            //     bars(length_bars/2),               //number of whole notes
                            //     true,                           //descend
                            // );



                            break;
                        case 'descent':
                            if(Chance(0.95)){
                                full_melody = {};
                                for(let k = 0; k <= Math.log2(length_bars); k++){
                                    // const thisInterval = interval/Math.pow(2,k);
                                    const thisInterval = interval * 2 * Math.pow(2,k);
                                    let thisLength_bars = length_bars / 2;//Math.pow(2,k + 1);
                                    // Math.pow(2,Math.log2(length_bars) - k);
                                    // if(length_bars === 4 && k === 0){
                                    //     thisLength_bars --;
                                    // }
                                    let component;
                                    switch(k){
                                        case 0:
                                            component =
                                                arpeggio_melody(
                                                    properties.scale,
                                                    thisInterval,
                                                    bars(thisLength_bars),
                                                    false,
                                                    -1,
                                                    false
                                                )
                                            // arpeggio_melody(
                                            //     properties.scale,
                                            //     thisInterval * 2,
                                            //     bars(thisLength_bars),
                                            //     false,
                                            //     true
                                            // );
                                            // euclidian_melody(
                                            //     properties.scale,
                                            //     3,
                                            //     0.1,
                                            //     0.3,
                                            //     0.01,
                                            //     0.1,
                                            //     thisInterval,
                                            //     bars(thisLength_bars)
                                            // );
                                            // random_melody(
                                            //     properties.scale,
                                            //     4,                       //number of notes for which to create sequences
                                            //     0.3,                       //ratio of notes that arent assigned (1 = no notes)
                                            //     // oneBeat()/2,                     //relative to whole note
                                            //     thisInterval,                           //relative to whole note
                                            //     bars(thisLength_bars)                   //number of whole notes
                                            // );

                                            break;
                                        default:
                                            component =
                                                // arpeggio_melody(
                                                //     properties.scale,
                                                //     thisInterval,
                                                //     bars(thisLength_bars),
                                                //     false,
                                                //     true,
                                                //     false
                                                // );
                                                random_melody(
                                                    properties.scale,
                                                    4,                       //number of notes for which to create sequences
                                                    0.8,                       //ratio of notes that arent assigned (1 = no notes)
                                                    // oneBeat()/2,                     //relative to whole note
                                                    thisInterval,                           //relative to whole note
                                                    bars(thisLength_bars),                   //number of whole notes
                                                    true
                                                );

                                            break;
                                    }

                                    const start_time = bars(k);
                                    // bars(length_bars - thisLength_bars);
                                    // const start_time = bars(Math.pow(2,k) - 1);

                                    for(let shift in component){
                                        if(!full_melody[shift]) full_melody[shift] = [];
                                        component[shift].map( time => {
                                            const thisTime = time + start_time;
                                            if(!full_melody[shift].includes(thisTime)) full_melody[shift].push(thisTime);
                                        });
                                    }

                                }
                            }else{
                                full_melody = random_melody(
                                    properties.scale,
                                    6,                       //number of notes for which to create sequences
                                    0.2,                       //ratio of notes that arent assigned (1 = no notes)
                                    // oneBeat()/2,                     //relative to whole note
                                    interval,                           //relative to whole note
                                    bars(length_bars),               //number of whole notes
                                    true,                           //descend
                                );
                            }
                            break;
                        case 'ascent':
                            full_melody = {};
                            for(let k = 0; k <= Math.log2(length_bars); k++){
                                // const thisInterval = interval/Math.pow(2,k);
                                const thisInterval = interval * 4 / Math.pow(2,k);
                                let thisLength_bars = Math.pow(2,Math.log2(length_bars) - k);
                                // if(length_bars === 4 && k === 0){
                                //     thisLength_bars --;
                                // }
                                let component;
                                switch(k){
                                    case 0:
                                        component =
                                            arpeggio_melody(
                                                properties.scale,
                                                thisInterval,
                                                bars(thisLength_bars),
                                                true,
                                                true,
                                                false
                                            )
                                        // arpeggio_melody(
                                        //     properties.scale,
                                        //     thisInterval * 2,
                                        //     bars(thisLength_bars),
                                        //     false,
                                        //     true
                                        // );
                                        // euclidian_melody(
                                        //     properties.scale,
                                        //     3,
                                        //     0.1,
                                        //     0.3,
                                        //     0.01,
                                        //     0.1,
                                        //     thisInterval,
                                        //     bars(thisLength_bars)
                                        // );
                                        // random_melody(
                                        //     properties.scale,
                                        //     4,                       //number of notes for which to create sequences
                                        //     0.3,                       //ratio of notes that arent assigned (1 = no notes)
                                        //     // oneBeat()/2,                     //relative to whole note
                                        //     thisInterval,                           //relative to whole note
                                        //     bars(thisLength_bars)                   //number of whole notes
                                        // );

                                        break;
                                    default:
                                        component =
                                            // arpeggio_melody(
                                            //     properties.scale,
                                            //     thisInterval,
                                            //     bars(thisLength_bars),
                                            //     false,
                                            //     true,
                                            //     false
                                            // );
                                            random_melody(
                                                properties.scale,
                                                4,                       //number of notes for which to create sequences
                                                0.8,                       //ratio of notes that arent assigned (1 = no notes)
                                                // oneBeat()/2,                     //relative to whole note
                                                thisInterval,                           //relative to whole note
                                                bars(thisLength_bars)                   //number of whole notes
                                            );

                                        break;
                                }

                                const start_time = bars(length_bars - thisLength_bars);
                                // const start_time = bars(Math.pow(2,k) - 1);

                                for(let shift in component){
                                    if(!full_melody[shift]) full_melody[shift] = [];
                                    component[shift].map( time => {
                                        const thisTime = time + start_time;
                                        if(!full_melody[shift].includes(thisTime)) full_melody[shift].push(thisTime);
                                    });
                                }

                            }

                            break;
                        case 'arpeggio_melody':
                            full_melody = arpeggio_melody(
                                properties.scale,
                                interval,                      //relative to whole note
                                bars(length_bars),               //number of whole notes
                                false                        //force root note
                            );
                            break;
                        case 'arpeggio_root':
                            full_melody = arpeggio_melody(
                                properties.scale,
                                interval,                      //relative to whole note
                                bars(length_bars),               //number of whole notes
                                true             //force root note
                            );
                            break;
                        case 'random_melody':
                            full_melody = random_melody(
                                properties.scale,
                                6,                       //number of notes for which to create sequences
                                0.2,                       //ratio of notes that arent assigned (1 = no notes)
                                // oneBeat()/2,                     //relative to whole note
                                interval,                           //relative to whole note
                                bars(length_bars)   //number of whole notes
                            );
                            break;
                        case 'euclidian_melody':
                            full_melody =  euclidian_melody(
                                properties.scale,
                                5,
                                0.5,
                                1,
                                0.2,
                                0.6,
                                interval,
                                bars(length_bars)
                            );
                            break;
                    }

                    if(!silences) return full_melody;

                    const shifts = {};
                    for(let shift in full_melody){
                        shifts[shift] = [];
                    }
                    for(let i = 0; i < length_bars/modulo_length_bars; i++){
                        let play_bar = (i - modulo_offset)%silences === 0;
                        if(invert_silences) play_bar = !play_bar;
                        if(play_bar) {
                            const bar_start_time = bars(i*modulo_length_bars);
                            const bar_finish_time = bars((i + 1)*modulo_length_bars);

                            for (let shift in full_melody) {
                                for (let j = 0; j < full_melody[shift].length; j++) {
                                    if (full_melody[shift][j] >= bar_finish_time) break;
                                    if (full_melody[shift][j] >= bar_start_time) {
                                        shifts[shift].push(
                                            full_melody[shift][j]
                                        );
                                    }
                                }
                            }
                        }
                    }
                    return shifts;
                }
            }


            // length_bars,type,interval,silences,modulo_offset
            function generate_leads(m,length_bars){
                // Console.log('----Generate leads',m+':');
                const modulo = Rset(2,4);
                let invert_silences = modulo===2?false:Rset(true,false);
                let modulo_length_bars = Rset(1,2,Math.max(1,length_bars/4));
                let modulo_inset = 0;
                if(modulo === 4 && invert_silences){
                    modulo_inset = 1;
                    modulo_length_bars = Math.max(1,length_bars/4);
                }


                //For variety improvements
                const melody_length_bars = Rset(1,2,4);
                const leads = [
                    {},
                    {}
                ];
                // Console.log('MELODY LENGTH BARS:',melody_length_bars)
                // Console.log('ELEMENT LENGTH BARS:',length_bars)
                const unique_section_length_bars = length_bars*melody_length_bars/4;
                // Console.log('UNIQUE SECTION LENGTH BARS:',unique_section_length_bars);

                switch (m){
                    case 'ma':
                        // Console.log('Melody A - lead1');

                        leads[1] = Rset('chords','double_chords',null);
                        // for(let i = 0; i <  unique_section_length_bars/4; i++){
                        for(let i = 0; i <  length_bars/unique_section_length_bars; i++ ){
                            // Console.log('====i:::',i);
                            // const melody = generate_lead(unique_section_length_bars,
                            //     // Rset('arpeggio_melody','arpeggio_root'),
                            //     Rset('arpeggio_melody','arpeggio_root'),
                            //     division
                            // )
                            const melody = generate_lead(unique_section_length_bars,
                                // Rset('random_melody','euclidian_melody'),
                                'random_melody',
                                division
                            );


                            // const thisLeads = [
                            //     alternate_melody(unique_section_length_bars,
                            //         melody,
                            //         melody_length_bars,
                            //         0,
                            //         invert_silences,
                            //         modulo_length_bars
                            //     ),
                            //     alternate_melody(unique_section_length_bars,
                            //         melody,
                            //         melody_length_bars,
                            //         1,
                            //         invert_silences,
                            //         modulo_length_bars
                            //     ),
                            // ];

                            // for(let j = 0; j < leads.length; j++){
                            const thisLead = melody
                            for(let shift in thisLead){
                                if(!leads[0][shift]) leads[0][shift] = [];

                                thisLead[shift].map( event => {
                                    leads[0][shift].push( event + bars(i * unique_section_length_bars));
                                });
                            }
                            // }
                        }

                        return leads;

                        return [
                            generate_lead(length_bars,
                                // Rset('random_melody','euclidian_melody'),
                                'random_melody',
                                division
                            ),
                            Rset('chords','double_chords',null)
                        ];
                    case 'mb':
                        // Console.log('Melody B -lead2');
                        return [
                            Rset('chords','double_chords',null),
                            generate_lead(length_bars,
                                'random_melody',
                                division
                            ),
                        ];
                    case 'mc':
                        // Console.log('Melody C - lead ascent');
                        return [
                            generate_lead(length_bars,
                                'ascent',
                                division
                            ),
                            generate_lead(length_bars,
                                'ascent',
                                division
                            ),
                        ];
                    case 'md':
                        // Console.log('Melody D - reponse call');
                        // Console.log('Falling');
                        return [
                            generate_lead(length_bars,
                                'descent',
                                division,
                                modulo,
                                modulo/2 - modulo_inset,
                                invert_silences,
                                modulo_length_bars,
                            ),
                            generate_lead(length_bars,
                                'descent',
                                division,
                                modulo,
                                0,
                                invert_silences,
                                modulo_length_bars,
                            ),
                        ];
                    case 'me':
                        // Console.log('Melody E - (taking turns)');
                        // Console.log('~~~~',unique_section_length_bars);
                        // for(let i = 0; i <  unique_section_length_bars/4; i++){
                        for(let i = 0; i <  length_bars/unique_section_length_bars; i++ ){
                            // Console.log('====i:::',i);
                            const melody = generate_lead(melody_length_bars,
                                'random_melody',
                                division,
                            );
                            const thisLeads = [
                                alternate_melody(unique_section_length_bars,
                                    melody,
                                    melody_length_bars,
                                    0,
                                    invert_silences,
                                    modulo_length_bars
                                ),
                                alternate_melody(unique_section_length_bars,
                                    melody,
                                    melody_length_bars,
                                    1,
                                    invert_silences,
                                    modulo_length_bars
                                ),
                            ];

                            for(let j = 0; j < leads.length; j++){
                                const thisLead = thisLeads[j];
                                for(let shift in thisLead){
                                    if(!leads[j][shift]) leads[j][shift] = [];

                                    thisLead[shift].map( event => {
                                        leads[j][shift].push( event + bars(i * unique_section_length_bars));
                                    });
                                }
                            }
                        }
                        return leads;

                    case 'mf':
                        // Console.log('Melody F - bridge');
                        return [
                            Rset('chords','double_chords',null),
                            generate_lead(length_bars,
                                'euclidian_melody',
                                division
                            ),
                        ];
                    case 'aa':
                        // Console.log('Arpeggio A - lead1');
                        // Console.log('ARP A');

                        leads[1] = Rset('chords','double_chords',null);


                        // for(let i = 0; i <  unique_section_length_bars/4; i++){
                        for(let i = 0; i <  length_bars/unique_section_length_bars; i++ ){
                            // Console.log('====i:::',i);
                            const melody = generate_lead(unique_section_length_bars,
                                // Rset('arpeggio_melody','arpeggio_root'),
                                Rset('arpeggio_melody','arpeggio_root'),
                                division
                            )

                            // const thisLeads = [
                            //     alternate_melody(unique_section_length_bars,
                            //         melody,
                            //         melody_length_bars,
                            //         0,
                            //         invert_silences,
                            //         modulo_length_bars
                            //     ),
                            //     alternate_melody(unique_section_length_bars,
                            //         melody,
                            //         melody_length_bars,
                            //         1,
                            //         invert_silences,
                            //         modulo_length_bars
                            //     ),
                            // ];

                            // for(let j = 0; j < leads.length; j++){
                            const thisLead = melody
                            for(let shift in thisLead){
                                if(!leads[0][shift]) leads[0][shift] = [];

                                thisLead[shift].map( event => {
                                    leads[0][shift].push( event + bars(i * unique_section_length_bars));
                                });
                            }
                            // }
                        }

                        return leads;



                    // return [
                    //     generate_lead(length_bars,
                    //         // Rset('arpeggio_melody','arpeggio_root'),
                    //         Rset('arpeggio_melody','arpeggio_root'),
                    //         division
                    //     ),
                    //     Rset('chords','double_chords',null)
                    // ];
                    case 'ab':
                        // Console.log('Arpeggio B - call response');
                        // Console.log('modulo:',modulo);

                        // for(let i = 0; i <  unique_section_length_bars/4; i++){
                        for(let i = 0; i <  length_bars/unique_section_length_bars; i++ ){
                            // Console.log('====i:::',i);
                            const melody = generate_lead(melody_length_bars,
                                'random_melody',
                                division,
                            );
                            const thisLeads = [
                                generate_lead(unique_section_length_bars,
                                    Rset('arpeggio_melody','arpeggio_root'),
                                    division,
                                    modulo,
                                    0,
                                    invert_silences,
                                    modulo_length_bars
                                ),
                                generate_lead(unique_section_length_bars,
                                    Rset('arpeggio_melody','arpeggio_root'),
                                    division,
                                    modulo,
                                    modulo/2  - modulo_inset,
                                    invert_silences,
                                    modulo_length_bars
                                ),
                            ];

                            for(let j = 0; j < leads.length; j++){
                                const thisLead = thisLeads[j];
                                for(let shift in thisLead){
                                    if(!leads[j][shift]) leads[j][shift] = [];

                                    thisLead[shift].map( event => {
                                        leads[j][shift].push( event + bars(i * unique_section_length_bars));
                                    });
                                }
                            }
                        }
                        return leads;




                        return [
                            generate_lead(length_bars,
                                Rset('arpeggio_melody','arpeggio_root'),
                                division,
                                modulo,
                                0,
                                invert_silences,
                                modulo_length_bars
                            ),
                            generate_lead(length_bars,
                                Rset('arpeggio_melody','arpeggio_root'),
                                division,
                                modulo,
                                modulo/2  - modulo_inset,
                                invert_silences,
                                modulo_length_bars
                            ),
                        ];
                    case 'ac':
                        // Console.log('Arpeggio C - response call');

                        // for(let i = 0; i <  unique_section_length_bars/4; i++){
                        for(let i = 0; i <  length_bars/unique_section_length_bars; i++ ){
                            // Console.log('====i:::',i);
                            const melody = generate_lead(melody_length_bars,
                                'random_melody',
                                division,
                            );
                            const thisLeads = [
                                generate_lead(unique_section_length_bars,
                                    Rset('arpeggio_melody','arpeggio_root'),
                                    division,
                                    modulo,
                                    modulo/2  - modulo_inset,
                                    invert_silences,
                                    modulo_length_bars
                                ),
                                generate_lead(unique_section_length_bars,
                                    Rset('arpeggio_melody','arpeggio_root'),
                                    division,
                                    modulo,
                                    0,
                                    invert_silences,
                                    modulo_length_bars
                                ),
                            ];

                            for(let j = 0; j < leads.length; j++){
                                const thisLead = thisLeads[j];
                                for(let shift in thisLead){
                                    if(!leads[j][shift]) leads[j][shift] = [];

                                    thisLead[shift].map( event => {
                                        leads[j][shift].push( event + bars(i * unique_section_length_bars));
                                    });
                                }
                            }
                        }
                        return leads;


                        return [
                            generate_lead(length_bars,
                                Rset('arpeggio_melody','arpeggio_root'),
                                division,
                                modulo,
                                modulo/2  - modulo_inset,
                                invert_silences,
                                modulo_length_bars
                            ),
                            generate_lead(length_bars,
                                Rset('arpeggio_melody','arpeggio_root'),
                                division,
                                modulo,
                                0,
                                invert_silences,
                                modulo_length_bars
                            ),
                        ];
                    case 'ad':
                        // Console.log('Arpeggio D - Lead2');

                        leads[0] = Rset('chords','double_chords',null);


                        // for(let i = 0; i <  unique_section_length_bars/4; i++){
                        for(let i = 0; i <  length_bars/unique_section_length_bars; i++ ){
                            // Console.log('====i:::',i);
                            const melody = generate_lead(melody_length_bars,
                                // Rset('arpeggio_melody','arpeggio_root'),
                                Rset('arpeggio_melody','arpeggio_root'),
                                division
                            )

                            // const thisLeads = [
                            //     alternate_melody(unique_section_length_bars,
                            //         melody,
                            //         melody_length_bars,
                            //         0,
                            //         invert_silences,
                            //         modulo_length_bars
                            //     ),
                            //     alternate_melody(unique_section_length_bars,
                            //         melody,
                            //         melody_length_bars,
                            //         1,
                            //         invert_silences,
                            //         modulo_length_bars
                            //     ),
                            // ];

                            // for(let j = 0; j < leads.length; j++){
                            const thisLead = melody
                            for(let shift in thisLead){
                                if(!leads[1][shift]) leads[1][shift] = [];

                                thisLead[shift].map( event => {
                                    leads[1][shift].push( event + bars(i * unique_section_length_bars));
                                });
                            }
                            // }
                        }

                        return leads;


                        return [
                            Rset('chords','double_chords',null),
                            generate_lead(length_bars,
                                Rset('arpeggio_melody','arpeggio_root'),
                                division
                            )
                        ];

                }
            }

            function generate_bass(m,length_bars){
                switch(m){
                    case 'a':
                        return 'walk';
                    case 'b':
                    case 'e':
                        //random melody
                        return random_melody(
                            properties.scale,
                            6,                       //number of notes for which to create sequences
                            0.2,                       //ratio of notes that arent assigned (1 = no notes)
                            // oneBeat()/2,                     //relative to whole note
                            division,                           //relative to whole note
                            bars(length_bars) ,  //number of whole notes
                            false,
                            false
                        );
                    case 'c':
                        //arpeggio_melody
                        return arpeggio_melody(
                            properties.scale,
                            // oneBeat()/2,                //relative to whole note
                            division,                      //relative to whole note
                            bars(length_bars),               //number of whole notes
                            false,
                            false,
                            false

                        );
                    case 'd':
                        //arpeggiated_leader
                        return 'arpeggiate_leader';
                    // case 'e':
                    //     //euclidian_melody
                    //     return euclidian_melody(
                    //         properties.scale,
                    //         5,
                    //         0.5,
                    //         1,
                    //         0.2,
                    //         0.6,
                    //         division,
                    //         bars(length_bars)
                    //     );
                }
            }

            function generate_percussion_fills(){
                for(let instrument in instruments.percussion){
                    elements.fills[instrument] = [];
                    for(let i = 0; i < structure.unique * 2; i++){
                        switch (instruments.percussion[instrument].options.category) {
                            //kick
                            case 'kick':
                                elements.fills[instrument].push(
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        2,
                                        4,
                                        2,
                                        6,
                                        0.5,
                                        1,
                                        1
                                    )
                                );


                                break;
                            //snare
                            case 'snare':
                                elements.fills[instrument].push(
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        2,
                                        8,
                                        1,
                                        5,
                                        0.1,
                                        1,
                                        1
                                    )
                                );
                                break;
                            //clap
                            case 'clap':
                                elements.fills[instrument].push(
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        2,
                                        8,
                                        1,
                                        6,
                                        0.2,
                                        1,
                                        1
                                    )
                                )
                                break;
                            //hat
                            case 'hat':
                                elements.fills[instrument].push(
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        4,
                                        16,
                                        4,
                                        16,
                                        1,
                                        1,
                                        1
                                    )
                                )
                                break;

                            //perc?
                            case 'perc':
                            default:
                                elements.fills[instrument].push(
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        4,
                                        12,
                                        1,
                                        4,
                                        1,
                                        1,
                                        1
                                    )
                                )
                                break;

                        }


                    }
                }
            }

            const crazy_percussion = Chance(0.10);

            function Percuss(beats){
                for(let beat in beats){
                    beats[beat] /= 4;
                }
                return beats;
            }

            //Percussion
            for(let instrument in instruments.percussion){
                for(let variant in elements.rhythms) {
                    // Console.log('>>>', instrument);
                    switch (instruments.percussion[instrument].options.category) {
                        //kick
                        case 'kick':
                            elements.rhythms[variant][instrument] =
                                !crazy_percussion?
                                    Rset(
                                        {
                                            0: Percuss([0,1,2,3])
                                        },
                                        {
                                            0: Percuss([0,2,3])
                                        },
                                        {
                                            0: Percuss([0,2])
                                        },
                                        {
                                            0: Percuss([0,2.5])
                                        },
                                        {
                                            0: Percuss([2.5])
                                        },
                                    ) :
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        4,
                                        4,
                                        2,
                                        6,
                                        0.5,
                                        1,
                                        2
                                    );
                            break;
                        //snare



                        case 'snare':
                            elements.rhythms[variant][instrument] =
                                !crazy_percussion?
                                    Rset(
                                        {
                                            0: Percuss([1]),
                                        },
                                        {
                                            0: Percuss([3]),
                                        },
                                        {
                                            0: Percuss([1,3]),
                                        },
                                        {
                                            0: Percuss([1,2.25,3]),
                                        },
                                        {
                                            0: Percuss([1,1.75,3]),
                                        },
                                        {
                                            0: Percuss([1,3,3.75]),
                                        },
                                        {
                                            0: Percuss([1,3.75]),
                                        },
                                        {
                                            0: Percuss([1.75,3]),
                                        },
                                        {
                                            0: Percuss([1,1.25,2.75,3.5]),
                                        },
                                        {
                                            0: Percuss([1,1.75,3]),
                                        },

                                        {
                                            0: Percuss([1.25,1,3]),
                                        },

                                    ) :
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        2,
                                        8,
                                        1,
                                        5,
                                        0.1,
                                        1,
                                        4
                                    );
                            break;
                        //clap
                        case 'clap':
                            elements.rhythms[variant][instrument] =
                                euclidian_rhythm(
                                    properties.scale,
                                    1,
                                    2,
                                    8,
                                    1,
                                    6,
                                    0.2,
                                    1,
                                    4
                                );
                            break;
                        //hat
                        case 'hat':
                            elements.rhythms[variant][instrument] =
                                !crazy_percussion ?
                                    Rset(
                                        {
                                            0: Percuss([
                                                0, 0.25, 0.5, 0.75,
                                                1, 1.25, 1.5, 1.75,
                                                2, 2.25, 2.5, 2.75,
                                                3, 3.25, 3.5, 3.75,
                                            ]),
                                        },
                                        {
                                            0: Percuss([
                                                0,  0.5,
                                                1,  1.5,
                                                2,  2.5,
                                                3,  3.5,
                                            ]),
                                        },
                                        {
                                            0: Percuss([
                                                0,
                                                1,
                                                2,
                                                3,
                                            ]),
                                        },
                                    ) :
                                    euclidian_rhythm(
                                        properties.scale,
                                        1,
                                        4,
                                        16,
                                        4,
                                        16,
                                        1,
                                        1,
                                        2
                                    );
                            break;

                        //perc?
                        case 'perc':
                        default:
                            elements.rhythms[variant][instrument] =
                                euclidian_rhythm(
                                    properties.scale,
                                    1,
                                    4,
                                    12,
                                    1,
                                    4,
                                    1,
                                    1,
                                    8
                                );
                            break;

                    }
                }
                // euclidian_melody(
                //     properties.scale,
                //     Rint(1,3),          //number of notes for which to create sequences
                //     0.5,     //randomly picks step length, 0 = 1 step
                //     1,      //randomly picks step length, 1 = can be full length
                //     R(0.1,0.4),          //randomly picks event count, 0 = no step is event
                //     0.8,         //randomly picks event count, 1 = every step is event
                //     // 1/4 /Rint(1,4),     //relative to whole note
                //     oneBeat(),     //relative to whole note
                //     oneBar() //* Rint(1,2)   //number of whole notes
                // );
                // Console.log(elements.rhythms[instrument]);
            }
            generate_percussion_fills();




            elements.assignments = sections;
            return elements;
        }

        function generate_section(score,section,first_beat,properties,instruments,elements){

            let key;
            if(['buildup','pre-chorus','pre-drop','tension','release'].includes(section)){
                key = change_key(
                    properties.key.note,
                    properties.key.octave,
                    properties.key.mid_shift)
            }else if(section === 'bridge'){
                key = change_key(
                    properties.key.note,
                    properties.key.octave,
                    properties.key.bridge_shift)
            }else{
                key = properties.key;
            }
            // Console.log('=====]]',section+':',key.note,key.octave);

            function change_key(note_name,octave,shift){

                const note_names =['B','A#','A','G#','G','F#','F','E','D#','D','C#','C'].reverse();
                const index = note_names.indexOf(note_name);

                let index_final = index + shift;
                if(shift > 0){
                    while (index_final >= note_names.length){
                        octave++
                        index_final -= note_names.length;
                    }
                }else{
                    while (index_final < 0){
                        octave--
                        index_final += note_names.length;
                    }
                }
                return {
                    note: note_names[index_final],
                    octave: octave
                }
            }

            function transposeNote(note,shift){
                if(typeof shift !== 'number'){
                    shift = parseInt(shift);
                }
                note = note.toUpperCase();
                const note_names =['B','A#','A','G#','G','F#','F','E','D#','D','C#','C'].reverse();
                const octave = parseInt(note.substr(-1,1));
                const name = note.substr(0,note.length - 1);
                const index = note_names.indexOf(name);

                let index_final = index + shift;

                let note_final, octave_final;

                if(index_final < 0){
                    note_final = note_names[note_names.length - 1 + index_final%note_names.length];
                    octave_final = (octave + Math.floor(index_final/note_names.length));
                    // Console.log('< 0');
                }else if(index_final >= note_names.length){
                    note_final = note_names[index_final%note_names.length];
                    octave_final = (octave + Math.ceil(index_final/note_names.length) - 1);
                    // Console.log(' >= names_length',index_final);
                }else{
                    note_final = note_names[index_final]
                    octave_final = octave;
                }
                if(octave_final > 8){
                    // Console.log('transpose error',note_final,octave_final);
                    // Console.log(note,shift);
                    return note_final+octave;
                }
                return note_final+octave_final;

            }

            function Note(note,start_beat){
                return {
                    event: 'note',
                    note: note,
                    start_beat: start_beat,
                }
            }

            function translate_sequence(sequence,key,octave,start_beat,beat_length) {
                //TODO: check beat_length doesn't refer to the duration of this particular sequence,
                // rather than time signature

                // Console.log(sequence);

                const translated = [];
                // Console.log(sequence);
                for(let shift in sequence){
                    const note = transposeNote(key+octave,shift);


                    // if(Math.abs(shift) > 12){
                    //     Console.log(sequence,key,octave,shift);
                    // }
                    sequence[shift].map(event =>{
                        // Console.log('}',event/beat_length,start_beat);
                        if(note.length > 2 && note[1] !== '#'){
                            // if(isNaN(note)){
                            console.error('!!',note);
                        }else if(typeof note === 'number' && isNaN(note)){
                            console.error('??',note);
                        }
                        translated.push(
                            Note(
                                note,
                                event*beat_length + start_beat
                            )
                        );
                    });
                }
                return translated;

            }
            const length_bars = properties.lengths[section];
            const length_beats = properties.timeSignature[0] * length_bars;
            const next_section_start = first_beat + length_beats;
            const last_beat = next_section_start - 1;
            const one_bar = properties.timeSignature[0] * 1;

            // generate_percussion();
            // generate_metronome();
            // return next_section_start;

            function update_duration(instrument,duration,beat){
                // Console.log('update duration:',duration,typeof duration);
                score[instrument].push({
                    event: 'duration',
                    duration: duration,
                    beat
                })
                // Console.log(
                //     score[instrument][score[instrument].length - 1]
                // )
            }
            function set_mixer(instrument,gain,beat){
                // Console.log(instrument,gain,beat);
                score[instrument].push({
                    event: 'mixer',
                    gain,
                    beat
                })
            }
            function transition_mixer(instrument,gain,startBeat,endBeat){
                // Console.log(instrument,gain,startBeat,endBeat);
                score[instrument].push({
                    event: 'mixerGradual',
                    gain,
                    startBeat,
                    endBeat
                })
            }


            //start: start level
            //mid:   middle level
            //target: target level
            //until: final beat
            function Mix(instrument,mix){


                //TODO: mixer
                return;
                let mix_from = first_beat;
                if(mix){
                    // if(typeof mix.start === 'undefined'){
                    //     mix.start = 1;
                    // }
                    if(typeof mix.start === 'number'){
                        set_mixer(instrument,mix.start,first_beat);
                    }
                    if(typeof mix.mid === 'number'){
                        transition_mixer(instrument,mix.mid,mix_from,
                            (first_beat + last_beat)/2
                        );
                        mix_from = (first_beat + last_beat)/2;
                    }

                    if(typeof mix.target !== 'number') return;
                    let mix_end;
                    if(typeof mix.until === 'number') {
                        mix_end = Math.max(mix_from,Math.min(mix.until,last_beat));
                    }else{
                        mix_end = last_beat;
                    }
                    transition_mixer(instrument,mix.target,first_beat,mix_end);
                }else{
                    transition_mixer(instrument,1,first_beat,first_beat+one_bar);
                }
            }

            function sectionIs(){
                for(let i in arguments){
                    if(arguments[i] === section) return true;
                }
                return false;
            }

            function generate_percussion(mixes){
                // Console.log('generate percussion');

                let beat = first_beat;
                let fills = [];
                for(let f = 0; f < length_bars; f++){
                    fills[f] = Chance(0.3);
                }

                // instrument.category
                let variant = false;
                for(let instrument in instruments.percussion){
                    // Console.log(instrument);
                    const category = instruments.percussion[instrument].options.category;


                    switch(category){
                        case 'kick':
                            if(sectionIs('intro','bridge')){
                                variant = false;
                            }else if(sectionIs('outro','main-section','chorus','drop')){
                                variant = 'a';
                            }else if(sectionIs('breakdown','solo','verse')){
                                variant = 'b';
                            }else if(sectionIs('pre-chorus','pre-drop','release')){
                                variant = 'c';
                            }else if(sectionIs('buildup','tension')){
                                variant = 'd';
                            }else{
                                // Console.log('MISSING VARIANT!',section,'kick');
                            }
                            break;
                        case 'snare':
                            if(sectionIs('intro','bridge','drop','release','outro')){
                                variant = false;
                            }else if(sectionIs('main-section','chorus')){
                                variant = 'a';
                            }else if(sectionIs('verse')){
                                variant = 'b';
                            }else if(sectionIs('solo')){
                                variant = Chance(0.5)?'b':'d';
                            }else if(sectionIs('buildup','tension')){
                                variant = 'c';
                            }else if(sectionIs('breakdown')){
                                variant = 'd';
                            }else if(sectionIs('pre-drop','pre-chorus')){
                                variant = 'e';
                            }else{
                                // Console.log('MISSING VARIANT!',section,'snare');
                            }
                            break;
                        case 'hat':
                            if(sectionIs('bridge','pre-chorus','drop','pre-drop')){
                                variant = false;
                            }else if(sectionIs('outro','solo','verse')){
                                variant = 'a';
                            }else if(sectionIs('chorus')){
                                variant = Chance(0.5)?'a':'b';
                            }else if(sectionIs('main-section')){
                                variant = 'b';
                            }else if(sectionIs('buildup','tension')){
                                variant = 'c';
                            }else if(sectionIs('breakdown')){
                                variant = 'd';
                            }else if(sectionIs('intro')){
                                variant = 'e';
                            }else if(sectionIs('tension','release')){
                                variant = 'f';
                            }else{
                                // Console.log('MISSING VARIANT!',section,'hat');
                            }
                            break;
                        case 'clap':
                            if(sectionIs('intro','outro','breakdown','bridge','pre-chorus','drop','tension','release')){
                                variant = false;
                            }else if(sectionIs('solo','verse')){
                                variant = 'a';
                            }else if(sectionIs('buildup','pre-drop')){
                                variant = 'b';
                            }else if(sectionIs('main-section','chorus')){
                                variant = 'c';
                            }else{
                                // Console.log('MISSING VARIANT!',section,'clap');
                            }
                            break;
                        case 'perc':
                            if(sectionIs('main-section','chorus')){
                                variant = 'a';
                            }else if(sectionIs('solo','drop','verse')){
                                variant = 'b';
                            }else if(sectionIs('buildup','pre-chorus','pre-drop')){
                                variant = 'c';
                            }else if(sectionIs('breakdown','bridge')){
                                variant = 'd';
                            }else if(sectionIs('intro','tension')){
                                variant = 'e';
                            }else if(sectionIs('outro','release')){
                                variant = 'f';
                            }else{
                                // Console.log('MISSING VARIANT!',section,'perc');
                            }
                            break;
                    }

                    if(!variant) continue;
                    if(mixes && mixes[category]){
                        Mix(instrument,mixes[category]);
                    }


                    let include_fills = sectionIs('breakdown','buildup','pre-chorus','pre-drop','bridge');
                    let only_fills = !include_fills?false:Chance(0.5);



                    // Mix(instrument,mix);

                    // update_duration(
                    //     instrument,
                    //     elements.rhythms[instrument].interval,
                    //     beat
                    // );

                    // let beat_local = 0;
                    // while(beat_local < length_beats){
                    //     const translated = translate_sequence(
                    //         elements.rhythms[variant][instrument].melody,
                    //         properties.key.note,
                    //         properties.key.octave,
                    //         beat + beat_local,
                    //         properties.timeSignature[1]
                    //     )
                    //
                    //     translated.map( note => {
                    //         if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                    //             score[instrument].push(note);
                    //         }
                    //     });
                    //     beat_local += elements.rhythms[variant][instrument].length_beats
                    // }

                    // Console.log(elements.rhythms[variant][instrument].melody);
                    // Console.log(elements.rhythms[variant][instrument].length_beats);
                    //


                    const isAscent = sectionIs('buildup','pre-chorus','pre-drop','tension');
                    const isDescent = sectionIs('release');
                    const trimEnds = elements.trimEnds[section];

                    const bar_start = 0 ;//+ isDescent;
                    let bar_end = length_bars;
                    // if(isAscent && length_bars > 1 && !sectionIs('pre-drop')){
                    //     bar_end--;
                    // }else
                    if(trimEnds){
                        bar_end -= 2;
                    }

                    // Console.log(elements.rhythms[variant][instrument].melody);

                    let a = 0;
                    for(let bar = bar_start; bar < bar_end; bar++){
                        let melody;
                        if(!include_fills){
                            melody = elements.rhythms[variant][instrument];
                        }else{
                            if(fills[bar]){
                                //use fill
                                // console.log('use fill!',section);
                                melody = Rarray(elements.fills[instrument]);
                            }else{
                                if(only_fills) continue;
                                melody = elements.rhythms[variant][instrument];
                            }
                        }



                        let intervalDiv = 1;
                        if(isAscent) intervalDiv = [1,1,2,4][a]/4 / Chance(0.1)?1:2;
                        if(isDescent) intervalDiv = [4,2,1,1][a]/4 / Chance(0.1)?1:2;



                        for(let i = 0; i < intervalDiv; i++){
                            const translated = translate_sequence(
                                melody,
                                key.note,
                                key.octave,
                                beat + bar * properties.timeSignature[0] + i/intervalDiv * bar,
                                properties.timeSignature[1]/intervalDiv,
                            );
                            translated.map( note => {
                                if(note.length > 2 && note[1] !== '#'


                                ){
                                    // Console.log('!!',note);
                                }

                                if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                                    score[instrument].push(note);
                                }
                            });
                        }
                        a++;
                    }
                    // Console.log('!!!');
                }
            }

            function generate_fx(mixes){
                let beat = first_beat;

                // length_bars;


                //sweeps
                let instrument,melody,translated;
                let sweepup = false,
                    sweepdown = false;
                let fillRatio = 0, melodic = true;

                let allowed = [];


                // console.log(instruments)


                switch(section){
                    //up
                    case 'intro':
                        sweepup = true;
                        melodic = false;
                        fillRatio = 0;

                        allowed  = [
                            // 'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',
                        ];


                        break;
                    case 'breakdown':
                        fillRatio = 0.2;
                        allowed  = [
                            'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',

                        ];
                        break;

                    case 'buildup':
                        allowed  = [
                            'respunchdelay',
                            // 'reversepopcorn',
                            // 'lazerchickenverb',
                            // 'lazerchickendelay',
                            // 'lazergoose',
                        ];
                        sweepup = true;
                        melodic = false;
                        fillRatio = 0.2;
                        break;

                    case 'pre-chorus':
                    case 'pre-drop':
                        allowed  = [
                            'respunchdelay',
                            // 'reversepopcorn',
                            // 'lazerchickenverb',
                            // 'lazerchickendelay',
                            // 'lazergoose',
                        ];

                        sweepup = true;
                        melodic = false;
                        fillRatio = 0;
                        break;

                    case 'bridge':
                        allowed  = [
                            'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',

                        ];
                        fillRatio = 0.3;
                        break;

                    case 'main-section':
                        allowed  = [
                            'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',

                        ];
                        fillRatio = 0.3;
                        break;
                    case 'chorus':
                        allowed  = [
                            // 'respunchdelay',
                            'reversepopcorn',
                            // 'lazerchickenverb',
                            // 'lazerchickendelay',
                            // 'lazergoose',
                        ];
                        fillRatio = 0.3;
                        break;

                    case 'solo':
                        allowed  = [
                            'respunchdelay',
                            'reversepopcorn',
                            // 'lazerchickenverb',
                            // 'lazerchickendelay',
                            // 'lazergoose',
                        ];
                        fillRatio = 0.8;
                        break;


                    case 'tension':
                        allowed  = [
                            'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',

                        ];

                        sweepup = true;
                        fillRatio = 0;
                        break;
                    //down
                    case 'outro':
                        allowed  = [
                            // 'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',

                        ];

                        sweepdown = true;
                        melodic = false;
                        fillRatio = 0.5;
                        break;

                    case 'release':
                        allowed  = [
                            // 'respunchdelay',
                            // 'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',

                        ];

                        fillRatio = 0.5;
                        sweepdown = true;
                        break;

                    case 'verse':
                        allowed  = [
                            'respunchdelay',
                            'reversepopcorn',
                            'lazerchickenverb',
                            'lazerchickendelay',
                            'lazergoose',
                            'bpresmover',
                            'lpresmover',
                            'pitchwobbler',
                        ];

                        fillRatio = 0.4;
                        break;
                }

                let prohibit = -1;
                if(sweepup){
                    instrument = Rarray(instruments.fxs.sweepup);

                    melody = elements.sweeps.up[instrument];
                    translated = translate_sequence(
                        melody,
                        key.note,
                        key.octave,
                        // beat + (length_bars-1) * properties.timeSignature[0],
                        beat + (length_bars) * properties.timeSignature[0],
                        // 1/properties.timeSignature[1],
                        1
                    );
                    translated.map( note => {
                        if(note.length > 2 && note[1] !== '#'){
                            // Console.log('!!',note);
                        }
                        if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                            score[instrument].push(note);
                            // Console.log('SWEEP UP:',instrument,note);
                        }else{
                            // Console.error('upsweep out of bounds',note);
                            // Console.error('beat',beat);
                            // Console.error('first_beat',first_beat);
                            // Console.error('length_bars',length_bars);
                            // Console.error('start_beat',beat + (length_bars-1) * properties.timeSignature[0])
                            // Console.error('length_bars * beats',length_bars * properties.timeSignature[0]);
                            // Console.log(melody);
                        }
                    });
                    prohibit = (length_bars-1);
                }else if(sweepdown){
                    instrument = Rarray(instruments.fxs.sweepdown);
                    melody = elements.sweeps.down;
                    translated = translate_sequence(
                        melody,
                        key.note,
                        key.octave,
                        beat,
                        properties.timeSignature[1],
                    );
                    translated.map( note => {
                        if(note.length > 2 && note[1] !== '#'){
                            // Console.log('!!',note);
                        }
                        if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                            score[instrument].push(note);
                        }
                    });
                    prohibit = 0;
                }
                // return;

                if(!fillRatio) return;

                for(let bar = 0; bar < length_bars; bar++){
                    if (Chance(fillRatio/1.5) && bar !== prohibit){
                        if(melodic){
                            melody = Rarray(elements.stabs);
                        }else{
                            melody = {
                                0: [Rint(0,properties.timeSignature[0]-1)]
                            }
                        }
                        // instrument = Rarray(instruments.fxs.stab);
                        instrument = Rarray(allowed);

                        // console.log('stab',instrument)

                        translated = translate_sequence(
                            melody,
                            key.note,
                            Math.max(1,key.octave + Rint(-1,0,1)),
                            beat + bar * properties.timeSignature[0],
                            properties.timeSignature[1],
                        );
                        translated.map( note => {
                            if(note.length > 2 && note[1] !== '#'){
                                // Console.log('!!',note);
                            }

                            // console.log(']>>',instrument);


                            if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                                score[instrument].push(note);
                            }
                        });
                    }
                }

            }

            function generate_lead(num,mix){
                // Console.log('generate lead',num);
                let beat = first_beat * 1;
                const instrument = instruments.leads[num];
                const assignment = elements.assignments[section].lead;

                if(!assignment ){
                    return {};
                }

                //todo: mix
                // Console.log('has assignment:',assignment);
                if(mix){
                    if(typeof mix.start === 'undefined'){
                        // mix.start = 0.1;
                    }
                    Mix(instrument,mix);
                }


                // Console.log('> ASSIGNMENT:',assignment);
                //
                // Console.log(assignment[0])
                // Console.log(elements);

                // const lead_type = assignment[0] === 'mel'?'melodies':'arpeggios';
                // let melody = elements[lead_type][assignment[1]][num];

                let melody = elements.leads[assignment][num];

                let bar_step = elements.lengths[section].lead;

                switch(melody){
                    case 'arpeggiate_leader':
                        // Console.log('arpeggiate leader');
                        melody = elements.arpeggiated_leaders[section];
                        bar_step = length_bars;
                        break;
                    case 'chords':
                        // Console.log('chords');
                        melody = elements.chords[section];
                        bar_step = length_bars;
                        break;
                    case 'double_chords':
                        // Console.log('chords');
                        melody = elements.chords2x[section];
                        bar_step = length_bars;
                        break;
                    case 'pulsed_chords':
                        // Console.log('chords');
                        melody = elements.pulsed_chords[section];
                        bar_step = length_bars;
                        break;
                    case null:
                        // Console.log('null');
                        melody = {};
                        bar_step = length_bars;
                        break;
                }


                //TODO: MUST MAKE IT CAPTURE REPEATING ELEMENTS

                // Console.log('LENGTH BARS:',length_bars);
                // Console.log('BAR_STEP:',bar_step);
                //
                // Console.log('START BEAT:',beat);

                for(let bar = 0; bar < length_bars; bar += bar_step){
                    // let bar = 0;
                    const translated = translate_sequence(
                        melody,
                        key.note,
                        key.octave,
                        beat + bar * properties.timeSignature[0],
                        properties.timeSignature[1],
                    );
                    if(section === 'chorus'){
                        // Console.log('bar:',bar);
                        // Console.log(translated);
                    }
                    translated.map( note => {
                        if(note.length > 2 && note[1] !== '#'){
                            // Console.log('!!',note);
                        }

                        if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                            score[instrument].push(note);
                        }
                    });
                }
            }

            function generate_bass(mix){
                // Console.log('generate bass');
                let beat = first_beat;
                const instrument = instruments.bass[Object.keys(instruments.bass)[0]].name;
                // Console.log(instrument);
                const assignment = elements.assignments[section].bass;
                if(!assignment){
                    return {};
                }
                if(mix){
                    Mix(instrument,mix);
                }

                let melody = elements.bass[assignment];
                let bar_step = elements.lengths[section].bass;
                // Console.log('===',melody);
                switch(melody){
                    case 'walk':
                        melody = elements.walks[section];
                        bar_step = length_bars;
                        break;
                    case 'arpeggiate_leader':
                        melody = elements.arpeggiated_leaders[section];
                        bar_step = length_bars;
                        break;
                    case null:
                        melody = {};
                        bar_step = length_bars;
                        break;
                }

                const isAscent = ['buildup','pre-chorus','pre-drop','tension'].includes(section);


                for(let bar = 0 + isAscent; bar < length_bars; bar += bar_step){
                    const translated = translate_sequence(
                        melody,
                        key.note,
                        Math.max(1,key.octave-2),
                        beat + bar * properties.timeSignature[0],
                        properties.timeSignature[1],
                    );
                    translated.map( note => {
                        if(note.length > 2 && note[1] !== '#'){
                            // Console.log('!!',note);
                        }

                        if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                            score[instrument].push(note);
                        }
                    });
                }

            }

            function generate_pads(mix){
                let beat = first_beat;
                const instrument = instruments.pads[Object.keys(instruments.pads)[0]].name;
                const assignment = elements.assignments[section].pads;
                if(!assignment){
                    return {};
                }
                if(mix){
                    // Mix(instrument,mix);
                }

                let melody = elements.pads[assignment];
                let bar_step = length_bars;

                switch(melody){
                    case 'chords':
                        melody = elements.chords[section];
                        break;
                    case 'double_chords':
                        melody = elements.chords2x[section];
                        break;
                    case 'pulsed_chords':
                        melody = elements.pulsed_chords[section];
                        break;
                    case 'leaders':
                        melody = elements.leaders[section];
                        break;
                    case 'double_leaders':
                        melody = elements.leaders2x[section];
                        break;
                    case 'arpeggiate_leader':
                        melody = elements.arpeggiated_leaders[section];
                        break;
                    case null:
                        melody = {};
                        break;
                }
                for(let bar = 0 + sectionIs('intro'); bar < length_bars; bar += bar_step){
                    const translated = translate_sequence(
                        melody,
                        key.note,
                        key.octave,
                        beat + bar * properties.timeSignature[0],
                        properties.timeSignature[1],
                    );
                    translated.map( note => {
                        if(note.length > 2 && note[1] !== '#'){
                            // Console.log('!!',note);
                        }

                        if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                            score[instrument].push(note);
                        }
                    });
                }

            }

            function generate_crash(mix){
                // Console.log('generate crash');
                let beat = first_beat;
                const instrument = instruments.crash[Object.keys(instruments.crash)[0]].name;

                // Console.log(instrument);
                if(mix){
                    Mix(instrument,mix);
                }

                let melody = elements.crashes[section];
                let bar_step = length_bars;



                let bar = 0;
                const translated = translate_sequence(
                    melody,
                    key.note,
                    Math.max(1,key.octave-2),
                    beat + bar * properties.timeSignature[0],
                    properties.timeSignature[1],
                );
                translated.map( note => {
                    if(note.length > 2 && note[1] !== '#'){
                        // Console.log('!!',note);
                    }

                    if(note.start_beat < first_beat + length_bars * properties.timeSignature[0]){
                        score[instrument].push(note);
                    }
                });


            }


            // console.log(elements)

            generate_crash();
            generate_fx();
            // return next_section_start;


            switch(section){
                case 'intro':
                    generate_lead(0,
                        {
                            start: R(0,0.4),
                            target:1
                        });
                    generate_lead(1,
                        {
                            start: R(0,0.4),
                            target: 1
                        });
                    generate_bass({
                        start: R(0,1),
                        target: 1
                    });
                    generate_pads({
                        start: R(0,1),
                        target: 1
                    });
                    generate_percussion({
                        start: R(1,1),
                        target: 1
                    });

                    break;
                case 'outro':
                    generate_percussion();

                    generate_lead(0,{
                        target: R(0.4,1)
                    });
                    generate_lead(1,
                        {
                            target: R(0.4,1)
                        });
                    generate_bass();
                    generate_pads();

                    break;
                case 'breakdown':
                    generate_percussion();

                    generate_lead(0);
                    generate_lead(1);
                    generate_bass();
                    generate_pads({
                        target: 0.5
                    })
                    break;
                case 'buildup':
                    generate_percussion();

                    generate_bass({
                        start: 0.5,
                        target: 1,
                    })
                    generate_lead(0,{
                        start: 0.5,
                        target: 1
                    });
                    generate_lead(1,
                        {
                            start: 0.5,
                            target: 1
                        });
                    generate_pads({
                        start: 0.5,
                        target: 1
                    });
                    break;
                case 'bridge':
                    generate_percussion();

                    const toGenerate = [false,false,false,false];
                    for(let g = 0; g < toGenerate.length; g++){
                        toGenerate[g] = Chance(0.8);
                    }
                    if(!toGenerate.includes(true) && Chance(0.9)){
                        toGenerate[Rint(0,3)] = true;
                    }

                    if(toGenerate[0]) generate_lead(0);
                    if(toGenerate[1]) generate_lead(1);
                    if(toGenerate[2]) generate_bass();
                    if(toGenerate[3]) generate_pads();

                    break;
                case 'main-section':
                    generate_percussion();

                    generate_lead(0);
                    generate_lead(1);
                    generate_bass();
                    generate_pads();
                    break;
                case 'chorus':
                    generate_percussion();

                    generate_lead(0);
                    generate_lead(1);
                    generate_bass();
                    generate_pads();
                    break;
                case 'pre-chorus':
                    generate_percussion();

                    generate_bass({
                        start: 0,
                        target: 1,
                    })
                    generate_lead(0,
                        {
                            start: 0.4,
                            target: 1
                        });
                    generate_lead(1,
                        {
                            start: 0.4,
                            target: 1
                        });
                    generate_pads({
                        start: 0.5,
                        target: 1
                    });
                    break;
                case 'solo':
                    generate_percussion();

                    generate_lead(0);
                    generate_lead(1);
                    generate_bass();
                    generate_pads();

                    break;
                case 'drop':
                    generate_lead(0);
                    generate_lead(1);

                    generate_bass();
                    generate_pads();

                    //TODO: minimal percussion
                    generate_percussion();
                    break;
                case 'pre-drop':
                    generate_percussion();

                    generate_bass({
                        start: 0.5,
                        target: 1,
                    })
                    generate_lead(0,{
                        start: 0.6,
                        target: 1
                    });
                    generate_lead(1,
                        {
                            start: 0.4,
                            target: 1
                        });
                    generate_pads({
                        start: 0.5,
                        target: 1
                    });
                    break;
                case 'tension':
                    generate_percussion();

                    generate_lead(0,{
                        start: 0.2,
                        target: 1
                    });
                    generate_lead(1,{
                        start: 0.5,
                        target: 1
                    });

                    generate_bass({
                        start: 0.5,
                        target: 1
                    });
                    generate_pads({
                        start: 0.5,
                        target: 1
                    });
                    break;
                case 'release':
                    generate_percussion();

                    generate_lead(0);
                    generate_lead(1,{
                        start: 1,
                        target: 0.2
                    });

                    generate_bass({
                        start: 1,
                        target: 0.5
                    });
                    generate_pads({
                        start: 1,
                        target: 0.5
                    });
                    break;
                case 'verse':
                    generate_percussion();

                    generate_lead(0);
                    generate_lead(1);

                    generate_bass();

                    generate_pads();

                    break;
            }


            // generate_metronome();
            return next_section_start;

        }

        function compose(){
            structure = generate_structure();
            properties = generate_properties();
            synth.set_bpm(properties.tempo); //must be before intrument creation

            instruments = create_instruments(structure);

            return;


            // Console.log(structure.sections);

            elements = generate_elements(instruments,properties,structure);

            const types = {
                crash:      true,
                lead:       true,
                fx:         true,
                pads:       true,
                bass:       true,
                percussion: true,
            }

            for(let type in types){
                for(let instrument in instruments[type]){
                    score[instrument] = [];
                }
            }

            let beat = 0;
            // let broken = 0;
            structure.sections.map( section => {
                // if(broken > 1) return;
                // Console.log(beat,section);
                // Console.log(elements);
                beat = generate_section(
                    score,
                    section,
                    beat,
                    properties,
                    instruments,
                    elements,
                )
                // broken++;

            });
            // Console.log('LENGTH (beats):',beat);
            // Console.log('LENGTH (sec):',Beats(beat))
            return Beats(beat);
        }

        const trackLength = compose();

        // Console.log(score);

        // synth.play_music(score);
        // synth.count_oscs();

        return {
            properties,
            score,
            structure,
            elements,
            instruments,
            trackLength
        }
    }


    // console.log('composer....');
    let composer = Composer(synth.esizer,atomicNumber);


    //instruments
    //synth
    //composer

    // console.log('done.');
    async function kill(){
        await synth.esizer.kill();
        delete synth.esizer;
    }


    return {
        trackLength: composer.trackLength * 1000,
        pause: synth.esizer.pause,
        resume:synth.esizer.resume,
        kill,
        isFinished:synth.esizer.isFinished,
    }
}