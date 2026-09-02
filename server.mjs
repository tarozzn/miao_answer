import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { networkInterfaces } from "node:os";

const root = process.cwd();
const preferredPort = Number(process.env.PORT || 5173);
const host = process.env.HOST || "0.0.0.0";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".ttf": "font/ttf",
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);

  if (url.pathname.startsWith("/api/")) {
    const apiName = url.pathname.replace(/^\/api\//, "").replace(/\/$/, "");
    const apiPath = normalize(join(root, "api", `${apiName}.mjs`));

    if (!apiPath.startsWith(`${root}${sep}api${sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    try {
      const moduleUrl = `${pathToFileURL(apiPath).href}?t=${Date.now()}`;
      const apiModule = await import(moduleUrl);
      await apiModule.default(request, response);
    } catch (error) {
      response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ error: error.message || "接口不存在" }));
    }
    return;
  }

  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = normalize(join(root, pathname));

  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

function getLanUrls(port) {
  return Object.values(networkInterfaces())
    .flat()
    .filter((item) => item && item.family === "IPv4" && !item.internal)
    .map((item) => `http://${item.address}:${port}`);
}

function listen(port) {
  server.removeAllListeners("error");
  server.removeAllListeners("listening");

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }

    throw error;
  });

  server.once("listening", () => {
    const { port: activePort } = server.address();
    const lanUrls = getLanUrls(activePort);

    console.log("");
    console.log("你的专属玄学答疑机已启动");
    console.log(`电脑本机打开: http://localhost:${activePort}`);

    if (lanUrls.length) {
      console.log("手机同一 Wi-Fi 下可尝试打开:");
      lanUrls.forEach((url) => console.log(`  ${url}`));
    }

    console.log("");
  });

  server.listen(port, host);
}

listen(preferredPort);
