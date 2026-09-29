/*
* What is async ?
* What is await ?
* How async await works behind the scenes?
* Examples of using async/await
* Error Handling
* Interviews
* Async await vs Promise.then/.catch
* 


*/

// const p = new Promise((resolve, reject) =>{
//     resolve("Promise Resolved Value!!");
// });

// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }

// handlePromise();

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise Resolved Value");
    }, 10000);
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout (() =>{
        resolve("Promise Resolved Value 2");
    }, 5000);
});

// await can only be used inside an async function
async function handlePromise()
{
    console.log("hello World!!");

    const val = await p1;

    console.log("Namste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namste JavaScript 2");
    console.log(val2);



}

// handlePromise();

URL = "https://api.github.com/users/jayantyadav407"