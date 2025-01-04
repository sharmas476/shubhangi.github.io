const https = require('https');
const fs = require('fs');
const path = require('path');

var har = [];


for (var i = 0; i < har.length; i++) {
    if (har[i].endsWith(".png"))
        download(har[i], "img");
}

function download(url, folder) {
    const fileName = path.basename(url);
    const filePath = path.join(folder, fileName);

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            const file = fs.createWriteStream(filePath);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${fileName}`);
            });
        } else {
            console.log(`Failed to download: ${fileName}`);
        }
    }).on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
}
