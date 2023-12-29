import { createServer } from 'http';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import path from 'path';
// Importing configuration
import config from '../config/index.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// Set the NODE_ENV if not set
if (!process.env.NODE_ENV) process.env.NODE_ENV = config.doc.env;

// Default port where dev server listens for incoming traffic
const port = process.env.PORT || config.doc.port;

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.doc.proxyTable;

const app = express();

// Proxy API requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(context, options));
});

// Serve pure static assets
const staticPath = path.posix.join(config.doc.assetsPublicPath, config.doc.assetsSubDirectory);

app.use(staticPath, express.static('./docs/static'));
app.use('/vue2-calendar/static', express.static('./docs/static'));

app.get('*', (req, res, next) => {
  console.log(req.url);
  try {
    res.sendFile(path.join(__dirname, '../docs', req.url, 'index.html'));
  } catch (e) {
    next();
  }
});

// Create a server instance and export it
const server = createServer(app);
export default server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  const uri = `http://localhost:${port}`;
  console.log(`Listening at ${uri}\n`);
  // opn(uri)
});
