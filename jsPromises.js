console.log("Promises");
function resolvedTimeOut(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

function rejectTimeOut(reason, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(reason), delay)
  );
}

async function load() {
  let promise1 = resolvedTimeOut("Welcome to JS Await", 3000);
  let promise2 = resolvedTimeOut("Welcome to JS", 5000);
  let promise3 = rejectTimeOut("Loading failed", 9000);
  //const allPromise = Promise.all([promise1, promise2]);
  //const allPromise = Promise.all([promise1, promise3]);
  //const allPromise = Promise.any([promise1, promise3]);
  const allPromise = Promise.race([promise1, promise2, promise3]);
  try {
    const list = await allPromise;
    console.log("Promise List", list);
  } catch (error) {
    console.log(error);
  }
}

load();
