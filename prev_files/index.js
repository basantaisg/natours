const fs = require("fs");

// Blocking, Synchronous way!

/*
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;

const output = fs.writeFileSync("./txt/Output.txt", textOut, "utf-8");
console.log("File Written!");
*/

// Non-blocking, Asynchronous way!

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      //   console.log(data3);
      fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, "utf-8", (err) => {
        if (err) throw err;
        console.log("\nWritten Successfully....😂");
      });
    });
  });
});

// console.log("Reading file.....\n");
