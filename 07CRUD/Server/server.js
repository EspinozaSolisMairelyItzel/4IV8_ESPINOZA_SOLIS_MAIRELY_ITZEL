const http = require('http'), fs = require('fs'), path = require('path'), mysql = require('mysql2'), PORT = process.env.PORT || 3000;

const pool = mysql.createPool({ host: 'localhost', user: 'root', password: '121423', database: 'pnt_practica1', waitForConnections: true, connectionLimit: 10, queueLimit: 0 }), db = pool.promise();

const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon' };

function servirArchivoEstatico(req, res) {
  const fp = path.join(__dirname, 'public', req.url === '/' ? '/index.html' : req.url), mime = MIME[path.extname(fp)];
  if (!mime) return res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Archivo no encontrado');
  fs.readFile(fp, (err, data) => err ? res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Archivo no encontrado') : res.writeHead(200, { 'Content-Type': mime }).end(data));
}

const leerBody = req => new Promise((res, rej) => { let b = ''; req.on('data', c => (b += c).length > 1e6 && (req.destroy(), rej(new Error('Body grande')))).on('end', () => { try { res(JSON.parse(b)) } catch { rej(new Error('JSON invalido')) } }).on('error', rej); });

const enviarJSON = (res, stat, data) => res.writeHead(stat, { 'Content-Type': 'application/json; charset=utf-8' }).end(JSON.stringify(data));

const server = http.createServer(async (req, res) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`); servirArchivoEstatico(req, res);
});

server.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}\nPara salir presiona ctrl + c`));