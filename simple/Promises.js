function getPromise(name) {
    return new Promise((resolve, reject) => {
        const success = Math.floor((Math.random() * 2)) > 0;
        const delay = 100 + Math.floor((Math.random() * 1000));
        //Do some work
        setTimeout(() => {
            if (success) {
                resolve(`Promise [${name}] ✅  Completed after ${delay}ms`);
            } else {
                reject(`Promise [${name}] ❌  Failed after ${delay}ms`);
            }
        }, delay);
    })
}

// .then().catch()
getPromise('One').then(console.log).catch(console.error);

// with Async/Await
async function f() {
    try {
        let v = await getPromise('Two');
        console.log(v);
    } catch (e) {
        console.error(e);
    }
};

f();

// chaining

