const http = require("http");
const VERSION = "2.0";

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Andina Market - Tienda Oficial</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
    body { background-color: #f4f6f9; color: #333; display: flex; flex-direction: column; min-height: 100vh; }
    header { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: #fff; padding: 1.5rem 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; }
    .brand { display: flex; align-items: center; gap: 12px; }
    .brand h1 { font-size: 1.8rem; font-weight: 700; letter-spacing: -0.5px; }
    .badge { background: #ff9900; color: #fff; font-size: 0.8rem; font-weight: 600; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; }
    .deploy-info { font-size: 0.85rem; opacity: 0.85; background: rgba(255, 255, 255, 0.15); padding: 6px 14px; border-radius: 8px; }
    .hero { background: #ffffff; text-align: center; padding: 3rem 1rem 2rem; border-bottom: 1px solid #e2e8f0; }
    .hero h2 { font-size: 2.2rem; color: #1e3c72; margin-bottom: 0.5rem; }
    .hero p { color: #666; font-size: 1.1rem; }
    .container { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; flex: 1; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
    .card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.2s ease; display: flex; flex-direction: column; }
    .card:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
    .card-img { height: 180px; background: #e9ecef; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
    .card-body { padding: 1.2rem; display: flex; flex-direction: column; flex: 1; }
    .card-title { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.4rem; color: #222; }
    .card-desc { font-size: 0.9rem; color: #666; margin-bottom: 1rem; flex: 1; }
    .card-price { font-size: 1.4rem; font-weight: 700; color: #2a5298; margin-bottom: 1rem; }
    .btn { background: #1e3c72; color: #fff; border: none; padding: 0.75rem; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; }
    .btn:hover { background: #2a5298; }
    footer { background: #111827; color: #9ca3af; text-align: center; padding: 1.5rem; font-size: 0.85rem; margin-top: auto; }
    footer strong { color: #fff; }
  </style>
</head>
<body>
  <header>
    <div class="brand">
      <h1>Andina Market</h1>
      <span class="badge">Versión ${VERSION}</span>
    </div>
    <div class="deploy-info">🚀 Desplegado con <strong>AWS CodeDeploy</strong></div>
  </header>
  <section class="hero">
    <h2>Catálogo de Productos Destacados</h2>
    <p>Calidad y frescura directo a tu hogar con envíos a todo el Perú</p>
  </section>
  <main class="container">
    <div class="grid">
      <div class="card">
        <div class="card-img">☕</div>
        <div class="card-body">
          <div class="card-title">Café Orgánico de Chanchamayo</div>
          <div class="card-desc">Café en grano 100% arábica de alta montaña con notas de chocolate y caramelo.</div>
          <div class="card-price">S/ 35.00</div>
          <button class="btn" onclick="alert('¡Producto agregado al carrito!')">Agregar al Carrito</button>
        </div>
      </div>
      <div class="card">
        <div class="card-img">🍯</div>
        <div class="card-body">
          <div class="card-title">Miel de Abeja de Selva Central</div>
          <div class="card-desc">Miel pura multifloral de 1kg recolectada de manera artesanal y sostenible.</div>
          <div class="card-price">S/ 28.00</div>
          <button class="btn" onclick="alert('¡Producto agregado al carrito!')">Agregar al Carrito</button>
        </div>
      </div>
      <div class="card">
        <div class="card-img">🍫</div>
        <div class="card-body">
          <div class="card-title">Chocolate Artesanal 70% Cacao</div>
          <div class="card-desc">Tableta de cacao fino de aroma seleccionada de productores locales.</div>
          <div class="card-price">S/ 15.00</div>
          <button class="btn" onclick="alert('¡Producto agregado al carrito!')">Agregar al Carrito</button>
        </div>
      </div>
      <div class="card">
        <div class="card-img">🍊</div>
        <div class="card-body">
          <div class="card-title">Caja de Naranjas Valencia (10kg)</div>
          <div class="card-desc">Naranjas jugosas y frescas directo de los valles de San Ramón.</div>
          <div class="card-price">S/ 40.00</div>
          <button class="btn" onclick="alert('¡Producto agregado al carrito!')">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <p>&copy; 2026 <strong>Andina Market</strong> - Plataforma de Comercio Electrónico CI/CD en AWS</p>
  </footer>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(htmlContent);
});

server.listen(3000, () => {
  console.log("Servidor de Andina Market corriendo en el puerto 3000");
});
