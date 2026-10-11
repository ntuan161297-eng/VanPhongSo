import http from 'http';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5173;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp'
};

function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push(net.address);
      }
    }
  }
  return addresses;
}

const server = http.createServer((req, res) => {
  const cleanUrl = decodeURI(req.url.split('?')[0]);
  let filePath = path.join(DIST_DIR, cleanUrl === '/' ? 'index.html' : cleanUrl);

  fs.stat(filePath, (err, stats) => {
    if (err || stats.isDirectory()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Lỗi máy chủ nội bộ: Không thể đọc tệp');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      const headers = { 'Content-Type': contentType };
      if (ext !== '.html') {
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      } else {
        headers['Cache-Control'] = 'no-cache';
      }

      res.writeHead(200, headers);
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = getLocalIpAddresses();
  console.log('================================================================');
  console.log('   HE THONG MAY CHU VAN PHONG SO HUNG YEN DANG CHAY 24/24');
  console.log('================================================================');
  console.log(`\n* Tren may chu nay, mo trinh duyet vao:`);
  console.log(`  -> http://localhost:${PORT}`);
  console.log(`\n* Tren CAC MAY KHAC trong phong / co quan (chung mang LAN/Wi-Fi):`);
  if (ips.length > 0) {
    ips.forEach(ip => {
      console.log(`  -> http://${ip}:${PORT}`);
    });
  } else {
    console.log(`  -> http://<Dia_Chi_IP_Cua_May_Chu>:${PORT}`);
  }
  console.log('\n================================================================');
  console.log('Luu y: Vui long giu cua so nay mo de ung dung hoat dong 24/24.');
  console.log('================================================================\n');
});
