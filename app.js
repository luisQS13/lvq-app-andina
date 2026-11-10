const http require('http');
const VERSION = '1.0';

http.createserver((req, res) => {
res.writeHead(200, ['Content-Type': 'text/html; charset=utf-8' });
res, end('<h1>Andina Market</h1><h3>versión $(VERSION)</h3>
          <p>Desplegado con AWS CodeDeploy</p>");
1).listen(3000);
