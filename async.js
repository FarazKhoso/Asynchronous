/* Write a simple asynchronous TypeScript function fetchGreeting that returns a
 greeting message after a 2-second delay using setTimeout. */
function fetchGreeting() {
    return setTimeout(function () {
        console.log("DONE");
    }, 2000);
}
fetchGreeting();
/* Question 2 Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
var anotherFunc = function () { return "Task completed"; };
function simulateTask() {
    console.log("Task started");
    setTimeout(function () {
        var result = anotherFunc();
        console.log(result);
    }, 1000);
}
simulateTask();
/* Question # 3
 Write a function fetchData that returns a Promise which resolves with the string
 "Data fetched successfully!" after a delay of 1 second.*/
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then(function (result) {
    console.log(result);
});
/*  Question # 4
 Write a function fetchWithError that returns a Promise. It should randomly either
 resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
 delay of 1 second. Handle the rejection using .catch */
function fetchWithError() {
    return new Promise(function (resovle, reject) {
        setTimeout(function () {
            if (Math.random() > 0.5) {
                resovle("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then(function (res) {
    console.log(res);
})
    .catch(function (error) {
    console.log(error);
});
/* Question # 5
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called */
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched succesfully");
        }, 1000);
    });
}
function processData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("processed data succcesfully");
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then(function (result) {
        console.log(result);
        return processData();
    })
        .then(function (result) {
        console.log(result);
    })
        .catch(function (error) {
        console.log(error);
    });
}
executeSequentially();
