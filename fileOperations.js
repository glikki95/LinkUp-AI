import fs from "fs";

// 1. Create a file and write data
fs.writeFileSync("sample.txt", "Welcome to Node.js File System Module.\n");
console.log("File created and data written successfully.");

// 2. Append data to the file
fs.appendFileSync("sample.txt", "This line is appended using appendFileSync().\n");
console.log("Data appended successfully.");

// 3. Read the file
const data = fs.readFileSync("sample.txt", "utf8");
console.log("\nFile Content:");
console.log(data);

// 4. Rename the file
fs.renameSync("sample.txt", "newSample.txt");
console.log("File renamed successfully");
fs.unlinkSync("newSample.txt");
console.log("File deleted successfully");

