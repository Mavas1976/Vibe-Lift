import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.md':'text/markdown; charset=utf-8','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8'};
const server = http.createServer((req,res) => {
  try {
    if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{'Allow':'GET, HEAD'}); return res.end();}
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {res.writeHead(404); return res.end('Pagina niet gevonden');}
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});
    if(req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  } catch {res.writeHead(400); res.end('Ongeldig verzoek');}
});
server.on('error', error => {console.error('Starten mislukt:', error.code, 'Controleer of poort 4173 al in gebruik is.'); process.exit(1);});
server.listen(4173,'127.0.0.1',()=>console.log('Vibe Lift staat klaar op http://127.0.0.1:4173'));
