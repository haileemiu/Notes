Javascript Async Function
* instances of the async function constructor
    * In JavaScript, every asynchronous function is actually an AsyncFunction object.
* purpose: enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
* await is permitted only in async
    * can contain 0 or more await expressions
        * best practice: 1 or more
    * await expressions suspend progress
    * they yield control and subsequently resume progress only when an awaited promise-based asynchronous operation is either:
        * fulfilled
        * rejected -- aka exception thrown
    * the resolved value of the promise is treated as the return value of the await expression
        * basically, your are "awaiting" the "promise"
* An async function without and await will run synchronously
    * Therefore, no reason for it


The Promise Object
* represents the eventual completion (or failure) of an asynchronous operation AND its resulting value
* it lets asynchronous methods return values like synchronous methods:
    * instead of immediately returning the final value,
    * the async method returns a "promise"
    * to supply the value at some point in the future
* Methods: promise.then(), .catch(), .finally()
    * are used to associate further action with a promise that becomes settled
    * they also return a newly generated promise object
* Async functions ALWAYS return a Promise
    * If it is not explicitly a promise, 
    * it will be implicitly wrapped in a promise
    ```js
    async function foo(){
        return 1
    }
    // equivalent to
    function foo(){
        return Promise.resolve(1)
    }
    ```

Try Catch
* The use of async await enables the use of try catch blocks around asynchronous code

Rewriting a promise chain with an async function:
```js
function getData(url){
    return downloadedData(url) // returns a promise
        .catch(e => {
            return downloadedFallbackData(url) // returns a promise
        })
        .then(v => {
            return processData(v) // returns a promise
        })
}

async function getData(url){
    let v;
    try {
        v = await downloadedData(url);
    } catch(e) {
        v = await downloadedFallbackData(url);
    }
    return processData(v);
}
```

Handle a rejected promise without a try block
```js
var response = await promisedFunction().catch(err) => {console.error(err)}
// response will be undefined if the promise is rejected
```



    
