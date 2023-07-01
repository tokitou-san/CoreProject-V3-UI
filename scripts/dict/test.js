import fs from "fs";
import fetch from "node-fetch-retry";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Polyfill. Remove it later
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const anime_folder_path = path.join(__dirname, "..", "..", "src", "server", "anime");

for (let i = 0; i < 10_000; i++) {
    let anime_file_path = path.join(anime_folder_path, i + ".json");
    fs.writeFile(anime_file_path, JSON.stringify({ hello: "world" }), function (err) {
        if (err) throw err;
        console.log("wrote data");
    });
}
