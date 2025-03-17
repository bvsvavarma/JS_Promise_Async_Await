console.log("Async Await");
//Callback Hell
setTimeout(() => {
  console.log("Hello 1");
  setTimeout(() => {
    console.log("Hello 2");
    setTimeout(() => {
      console.log("Hello 3");
      setTimeout(() => {
        console.log("Hello 4");
        setTimeout(() => {
          console.log("Hello 5");
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);

//create a Promise
function generatePromise(message) {
  if (!message) {
    return reject("Message is Empty");
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, 1000);
    });
  }
}
/*
//call the Promise
generatePromise("1st call").then(() => {
  console.log("1st Call Promise Resolve Successfully");
  generatePromise("2nd call").then(() => {
    console.log("2nd Call Promise Resolve Successfully");
  });
});

generatePromise()
  .then(() => {
    console.log("Promise resolved Successfully");
  })
  .catch((error) => {
    console.log("Promise Rejected", error);
  });
  */

async function generateDifferentPromises() {
  try {
    await generatePromise("1st call");
    await generatePromise("2nd call");
  } catch (error) {
    console.log(error);
  }
}

generateDifferentPromises();
