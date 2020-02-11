

function funcPromise(){
    return new Promise(function( resolve,reject){
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log("Function : Your Promise has been resolved");
                resolve();
            }
            else{
                console.log("Function : Your Promise has been rejected");
                reject();
            }
        }, 2000);

    })
};
funcPromise().then(function () {
    console.log("Thanks for resolving");
}).catch(function () {
    console.log("Sorry Bro! your Promise has been rejected")
})


promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            message: "The man likes to keep his word",
            code: "aManKeepsHisWord"
        });
    }, 1000);
});
console.log(promise2);


let keepHisWord = false;
promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(keepHisWord){
            resolve("The man like to keep his word");
        }
        else{
            reject("The man broke his promise");
        }
    }, 2000);
});

console.log(promise3);


// //Moms Promise
var momsPromise = new Promise((resolve, reject)=>{
    let momSavings = 200000;
    let priceOfPhone = 60000;
    setTimeout(() => {
        if (momSavings >= priceOfPhone) {
            resolve({
                model: "Iphone 6s",
                company: "Apple",
                ram: "3gb",
                storage: "128gb"
            });

        }
        else {
            reject("Not enough money, maybe we buy next month");
        }
    },10000);
});

console.log(momsPromise);

momsPromise.then(function (value) {
    console.log("I should give the iphone as a gift",JSON.stringify(value));
})

momsPromise.catch((reason)=>{
    console.log("Maybe I should work harder for my phone, because mom's Reason: " + reason);
})

momsPromise.finally(function () {
    console.log("whatever Happens I will love my Mom");
})


var momsPromise = new Promise(function (resolve, reject) {
    momsSavings = 20000;
    priceOfPhone = 60000;
    if (momsSavings > priceOfPhone) {
        resolve({
            brand: "iphone",
            model: "6s"
        });
    } else {
        reject("We donot have enough savings. Let us save some more money.");
    }
});
momsPromise.then(function (value) {
    console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
});
momsPromise.catch(function (reason) {
    console.log("Mom coudn't buy me the phone because ", reason);
});
momsPromise.finally(function () {
    console.log(
        "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
    );
});


function getRandomNumber(start=1, end = 10) {
    return parseInt(Math.random()* end% (end-start+1) + start);
}

// console.log(getRandomNumber());
// PromiseThatResolvesRandomlyAfterRandomNumberOfSecondsGenerator
var promiseTRRARNOSG = function(){
    return new Promise((resolve, reject)=>{
    let randomNumberOfSeconds = getRandomNumber(2,10);
    setTimeout(() => {
        let randomiseResolving = getRandomNumber();
        if(randomiseResolving > 5){
            resolve({
                randomNumberOfSeconds: randomNumberOfSeconds,
                randomiseResolving: randomiseResolving
            })
        }
        else{
            reject({
                randomNumberOfSeconds: randomNumberOfSeconds,
                randomiseResolving: randomiseResolving
            });
        }
    }, randomNumberOfSeconds * 1000);  
});
};
console.log(promiseTRRARNOSG);

var testpromise = promiseTRRARNOSG();
testpromise.then(function (value) {
    console.log("Value when Promise is Resolved" + value);
})

testpromise.catch(function (reason) {
    console.log("Value when Promise is rejected" + reason);
})

for (let index = 0; index < 10; index++) {
    let promise = promiseTRRARNOSG();
    promise.then((value)=>{
        console.log("Value when Promise is resolved" + value);
    });

    promise.catch((reason)=>{
        console.log("Value when Promise is rejected" + reason);
    })
    console.log(promise);
}

// Static Methods of Promise
var rejectedPromise = Promise.reject("Not Interested");
// rejectedPromise.then((value)=>{
//     console.log("This will run as it is a resolved Promise" + value)
// });
console.log(rejectedPromise);
rejectedPromise.catch((reason) => {
    console.log("This run as it is a rejected Promise. The reason is " + reason);
})


// Resolved Promise
let resolvedPromise = Promise.resolve(1);
resolvedPromise.then((value) => {
    console.log("This is always be resolved as it is a resolved Promise " + value);
})
resolvedPromise.then(function (value) {
    console.log("This will also run as multiple handlers can be added. Printing twice the resolved value which is ", value * 2);
});
resolvedPromise.catch(function (reason) {
    console.log("This will not run as it is a resolved promise", reason);
});
console.log(resolvedPromise);


// Promise All
// PromiseThatResolvesAfterNSecondsGenerator
var promiseTRSANSG = function (n = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                resolvedAfterNSeconds: n
            })
        }, n * 1000);
    })
};

// PromiseThatRejectAfterNSecondsGenerator

var promiseTRANSG = function (n) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject({
                rejectedAfterNSeconds: n
            })
        }, n * 1000);
    });
}

// Promise.All - When you’re dealing with multiple promises it is better to first create an array of promises and then do the necessary action over the whole set of promises.
// When there is array of Promises
// TODO:
console.time("Promise.All");
// Make Promises Array
let promisesArray = [];
// Push Promises in the Promises Array
promisesArray.push(promiseTRSANSG(2));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(1));
// Use Promise.all Method to handle multiple promises asynchronously
var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then((values)=>{
    console.timeEnd("Promise.All");
    console.log("All the Promises are resolved", values);
})
handleAllPromises.catch((reason)=>{
    console.log("One of the reason why the one of the promise has been failed ", reason);
})


// When there is no Promise -- Not Used much
console.time("NoPromise.All")
let nopromisesArray = [];
nopromisesArray.push(1);
nopromisesArray.push(4);
nopromisesArray.push(3);
nopromisesArray.push(2);
let handlesNoPromise = Promise.all(nopromisesArray);
handlesNoPromise.then((values)=>{
    console.timeEnd("NoPromise.All");
    console.log("All the Promises has been resolved", + values);
})
handleAllPromises.catch((reason)=>{
    console.log("One of the Promises failed with the following reason", reason);
})

// when one of the promises is rejected
console.time("Promise.Reject.Resolved");
let promiseRejectResolved = [];
promiseRejectResolved.push(promiseTRSANSG(4));
promiseRejectResolved.push(promiseTRSANSG(3));
promiseRejectResolved.push(promiseTRANSG(5));
promiseRejectResolved.push(promiseTRSANSG(1));
let handlesRejectPromises = Promise.all(promiseRejectResolved);
handlesRejectPromises.then((values)=>{
    console.timeEnd("Promise.Reject.Resolved");
    console.log("All the Promises has been Resolved", values);
})
handlesRejectPromises.catch((reason)=>{
    console.log("One of the Promise Failed due to this reason" , reason);
})

// Promises.race
// The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

// When one of the promises resolves first.
console.time("Promise.race");
let promiseRaceResolved = [];
promiseRaceResolved.push(promiseTRSANSG(4))
promiseRaceResolved.push(promiseTRSANSG(1))
promiseRaceResolved.push(promiseTRANSG(5))
promiseRaceResolved.push(promiseTRSANSG(3));
var handlePromiseRaceResolved = Promise.race(promiseRaceResolved);
handlePromiseRaceResolved.then((values)=>{
    console.timeEnd("Promise.race");
    console.log("The fastest Promise in the whole Promise Resolved array" , values);
})
handlePromiseRaceResolved.catch((reason)=>{
    console.timeEnd("Promise.race");
    console.log("The fasted Promise rejected due to the following reason", reason);
})


// Case 2: when the fastest Promise is rejected
console.time("Promise.Rejected");
let promiseRaceRejected = [];
promiseRaceRejected.push(promiseTRANSG(2))
promiseRaceRejected.push(promiseTRSANSG(2))
promiseRaceRejected.push(promiseTRSANSG(4))
promiseRaceRejected.push(promiseTRANSG(4))
let handlePromiseRaceRejected = Promise.race(promiseRaceRejected);
handlePromiseRaceRejected.then((values)=>{
    console.timeEnd("Promise.Rejected");
    console.log("The fastest Promises resolved in the time of", values);
})
handlePromiseRaceRejected.catch((reason)=>{
    console.timeEnd("Promise.Rejected");
    console.log("The fastest Promises rejected due to the reason", reason);
})
