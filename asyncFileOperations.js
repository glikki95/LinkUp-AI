import fs from "fs";

// 1. Create a file and write data
fs.writeFile("sample.txt", "Welcome to Node.js File System Module.\n", (err) => {
    if (err) throw err;
    console.log("File created and data written successfully.");

    // 2. Append data to the file
    fs.appendFile("sample.txt", "This line is appended using appendFile().\n", (err) => {
        if (err) throw err;
        console.log("Data appended successfully.");

        // 3. Read the file
        fs.readFile("sample.txt", "utf8", 
            
            (err, data) => {
            if (err) throw err;
            console.log("\nFile Content:");
            console.log(data);

            // 4. Rename the file
            fs.rename("sample.txt", "newSample.txt", (err) => {
                if (err) throw err;
                console.log("File renamed successfully.");

                // 5. Delete the renamed file
                fs.unlink("newSample.txt", (err) => {
                    if (err) throw err;
                    console.log("File deleted successfully.");
                });
            });
        });
    });
});