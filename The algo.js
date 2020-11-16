
        const binF = document.getElementById('2');
        const decF = document.getElementById('10');
        const hexF = document.getElementById('16');
        let bin = [];
        let dec;
        let hex = [];
        //gather data.
        binF.addEventListener("input", function(){bin = []; hex = []; dec = 0; checkIfB(); changeTdFb(); changeThFb();})
        decF.addEventListener("input", function(){dec = decF.value; hex = []; bin = []; changeTbFd();})
        hexF.addEventListener("input", function(){hex = []; bin = []; dec = 0; checkIfH(); changeTbFh(); })



//add functions here to check the data the user enters.
        function checkIfB(){

            let b = binF.value.split('');

            for(let i = 0; i< b.length;){
                switch(b[i]){
                    case '1':
                    bin.push(b[i])
                    i++
                    break;
                    case '0':
                    bin.push(b[i])
                    i++
                    break;
                    default:
                    i++
                }
                binF.value = bin.join('');
            }
            bin = bin.join('');
            binF.value = bin;
            console.log('this is:'+bin)

            //make readable
            let rD = [];
            rd = [];

for(let i=0; i< (bin.length)/4; i++){
    final = 0;

for(let s = 0; s < 4; s++){

    rD.push(bin[(i*4)+s])
}
rD.push(' ')
}
bin = rD.join('');
binF.value = bin.trim();

        }

        function checkIfH(){

            let h = hexF.value.split('');

            for(let i = 0; i< h.length;){
                h[i] = h[i].toUpperCase();
                switch(h[i]){
                    case '0':
                    hex.push(h[i])
                    i++
                    break;
                    case '1':
                    hex.push(h[i])
                    i++
                    break;
                    case '2':
                    hex.push(h[i])
                    i++
                    break;
                    case '3':
                    hex.push(h[i])
                    i++
                    break;
                    case '4':
                    hex.push(h[i])
                    i++
                    break;
                    case '5':
                    hex.push(h[i])
                    i++
                    break;
                    case '6':
                    hex.push(h[i])
                    i++
                    break;
                    case '7':
                    hex.push(h[i])
                    i++
                    break;
                    case '8':
                    hex.push(h[i])
                    i++
                    break;
                    case '9':
                    hex.push(h[i])
                    i++
                    break;
                    case 'A':
                    hex.push(h[i])
                    i++
                    break;
                    case 'B':
                    hex.push(h[i])
                    i++
                    break;
                    case 'C':
                    hex.push(h[i])
                    i++
                    break;
                    case 'D':
                    hex.push(h[i])
                    i++
                    break;
                    case 'E':
                    hex.push(h[i])
                    i++
                    break;
                    case 'F':
                    hex.push(h[i])
                    i++
                    break;
                    default:
                    i++
                }
                hexF.value = hex.join('');
            }
            hex = hex.join('');
            hexF.value = hex;

        }



        function changeTbFh(){
            //change to binary from hex

            let arr = hex.split('');

            for(let i = 0; i < arr.length; i++){

                //add a function to change letters to their decimal value

                switch(arr[i]){
                    case 'A':
                    arr[i] = 10;
                    break;
                    case 'B':
                    arr[i] = 11;
                    break;
                    case 'C':
                    arr[i] = 12;
                    break;
                    case 'D':
                    arr[i] = 13
                    break;
                    case 'E':
                    arr[i] = 14
                    break;
                    case 'F':
                    arr[i] = 15
                    break;
                }

                //

                let a = arr[i];
                a = arr[i]
                binT = [0, 0, 0, 0]
                let n = 3

                while(0 < a){

                    if(binT[n] == 1){
                    binT[n] = 0
                    if(n >= 0){
                    n--
                    }
                    }else{
                    binT[n] = 1;
                    if(n < 3){
                        n = 3
                    }
                    a--
                    }
                }
                bin.push(binT.join('')+' ')
            }
            binF.value = bin.join('');
            bin = bin.join('');
            changeTdFb();
        }

        function changeTbFd(){
            //change to binary from decimal
            let x = dec;
            let a;

            while(x > 0){
            a = Math.trunc(x/2);
            bin.unshift(x-2*a)
            
            x = a;
            }
            
            //change binary to be more readable, then send data off
            let fN = [];

            for(let i=0; i< (bin.length)/4; i++){
                final = 0;

                for(let s = 0; s < 4; s++){
            fN.push(bin[(i*4)+s])
            }
            fN.push(' ')
            }
            console.log(fN)
            bin = fN.join('')
            binF.value = bin.trim();
            changeThFb()
        }


        function changeTdFb(){
            //change to decimal from binary
            const arr = bin.split('').filter(char => {
            return char !== " ";})
            let n = arr.length-1;
            let a = 0;

            while(n >= 0){
            dec = dec + (arr[n]*(Math.pow(2, a)));
            n--
            a++
        }

        if(binF.value == ''){
            decF.value = '';
            console.log('yes')
        }else{
        decF.value = dec
        }
        }

        function changeThFb(){
            //change from binary to hexadecimal.
            const arr = bin.split('').filter(char => {
            return char !== " ";})
            let n = arr.length-1;
            let final = 0;

            for(let i=0; i< (arr.length)/4; i++){
                final = 0;

                for(let s = 0; s < 4; s++){

                let l = arr[n];

                    if(l == 1){
                        switch(s){
                            case 3:
                            final+=8;
                            break;
                            case 2:
                            final+=4;
                            break;
                            case 1:
                            final+=2;
                            break;
                            case 0:
                            final+=1
                            break;
                            
                        }
                    }
                    n--
            }
            if(final< 10){
                hex.unshift(final)
            }else{
                switch(final){
                    case 10:
                    final = 'A';
                    break;
                    case 11:
                    final = 'B';
                    break;
                    case 12:
                    final = 'C';
                    break;
                    case 13:
                    final = 'D'
                    break;
                    case 14:
                    final = 'E'
                    break;
                    case 15:
                    final = 'F'
                    break;
                }
                hex.unshift(final)
            }
            }
            hex = hex.join('');
            hexF.value = hex;
            
        }
