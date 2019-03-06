
var isMomHappy = true;

// Promise
var testPromise = new Promise(
    function (resolve, reject) {

         var f = () => {
            if (isMomHappy) {
                var phone = {
                    brand: 'Samsung',
                    color: 'black'
                };
                resolve(phone); // fulfilled
            } else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
        }

        setTimeout(f, 2000);

    }
);


async function getResponse(){

    console.log("TESTE");

    var res =  testPromise;

    console.log(res);
    console.log("TESTE 2");


}


 getResponse();
