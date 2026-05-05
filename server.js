import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./dist", import.meta.url));
const preferredPort = Number(process.env.PORT || 4173);
const maxAttempts = 10;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = normalize(join(root, cleanPath));

  if (!requested.startsWith(root)) {
    return join(root, "index.html");
  }

  if (existsSync(requested) && statSync(requested).isFile()) {
    return requested;
  }

  return join(root, "index.html");
}

const server = createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");
  const type = types[extname(filePath)] || "application/octet-stream";

  response.writeHead(200, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });

  createReadStream(filePath).pipe(response);
});

function listen(port, attemptsLeft = maxAttempts) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 1) {
      console.log(`${port} portu dolu, ${port + 1} deneniyor...`);
      listen(port + 1, attemptsLeft - 1);
      return;
    }

    console.error(`Server başlatılamadı: ${error.message}`);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`Hasmop site hazır: http://localhost:${port}`);
  });
}

listen(preferredPort);
