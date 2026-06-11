import https from "node:https";
import fs from "node:fs";

const HOST = "hua-sheng.org";
const SITE = `https://${HOST}`;
const key = process.env.INDEXNOW_KEY;
const dryRun = process.argv.includes("--dry-run");
const writeKey = process.argv.includes("--write-key");

if (!key) {
  console.error("Set INDEXNOW_KEY before running this script.");
  console.error("Example: INDEXNOW_KEY=<bing-indexnow-key> node scripts/submit-indexnow.mjs --write-key");
  process.exit(1);
}

if (writeKey) {
  fs.writeFileSync(`${key}.txt`, key);
  console.log(`Wrote ${key}.txt. Deploy this file before submitting URLs.`);
}

const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const urls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map((match) => match[1]);

const payload = JSON.stringify({
  host: HOST,
  key,
  keyLocation: `${SITE}/${key}.txt`,
  urlList: urls,
});

if (dryRun) {
  console.log(payload);
  process.exit(0);
}

const request = https.request(
  "https://api.indexnow.org/indexnow",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (response) => {
    let body = "";
    response.on("data", (chunk) => {
      body += chunk;
    });
    response.on("end", () => {
      console.log(`IndexNow response: ${response.statusCode}`);
      if (body) console.log(body);
      if (response.statusCode < 200 || response.statusCode >= 300) process.exit(1);
    });
  },
);

request.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

request.write(payload);
request.end();
