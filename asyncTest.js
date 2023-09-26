console.log("===================");

function delay(ms) {
  console.log("delay");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function test1() {
  await delay(1000); // Wait for 1000 milliseconds (1 second)
  console.log("test1");
}

function test2() {
  console.log("test2");
}

//test1();
//test2();

test1().then(() => {
  test2();
});
