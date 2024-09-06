console.log("JS Advance concepts");

/*
5.
Promise : represent both success failure and pending state of an asynchronous operation


*/

// creating a custom promise
// const customPromise = new Promise((resolve, reject) => {
//   // work: do some work
//   setTimeout(() => {
//     console.log("Work done");
//     reject("something went wrong");
//   }, 2000);
// });

// // using promise
// customPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// create with promise
function fetchDataFromDb() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      //data fetch kam hoga

      if (success) {
        resolve({ name: "Akash", age: 25 });
      } else {
        reject("something went wrong");
      }
    }, 2000);
  });
}

// 6:  asynchronous ko synchronous convert kartnta

//  asyn and await

async function loadData() {
  console.log("first  line");
  console.log("second line");

  //user: use promise
  //   fetchDataFromDb()
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  try {
    const data = await fetchDataFromDb();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block");
  }
  console.log("third line");
  console.log("fourth line");
}

loadData();


// error handling 
// try 
// catch
//  finally