import { useState } from 'react';
import IosInfo from './components/IosInfo';
import Pricing from './components/Pricing';
import cocoLogo from './assets/coco_Logo horizontal.png';
import monkiImage from './assets/monki_2.png';
import SuggestionForm from './components/SuggestionForm';
// Iconos SVG Minimalistas (Estilo Flaticon/Lineal)
const Icons = {
  Home: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  Cart: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  ),
  Box: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
  Tag: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  Alert: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  )
};

export default function App() {
  const [activeTab, setActiveTab] = useState('pos');
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  
  // Datos Reales Simulados
  const [ingresosTotales, setIngresosTotales] = useState(0);
  const [ventasRealizadas, setVentasRealizadas] = useState(0);

  // Catálogo basado en el código real (Categorías: Chapas, Stickers)
  const products = [
    { id: 1, name: 'Sticker Gato', category: 'Stickers', price: 500, stock: 45, color: 'bg-coco-peachLight', promoCount: 3, promoPrice: 1000 },
    { id: 2, name: 'Sticker Perro', category: 'Stickers', price: 500, stock: 30, color: 'bg-coco-peachLight', promoCount: 3, promoPrice: 1000 },
    { id: 3, name: 'Chapa Metálica', category: 'Chapas', price: 2000, stock: 12, color: 'bg-coco-roseLight' },
    { id: 4, name: 'Llavero Acrílico', category: 'Accesorios', price: 5000, stock: 2, color: 'bg-coco-blush' },
  ];

  const handleAddToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Cálculo real de carrito con promociones automáticas
  const calculateCart = () => {
    let total = 0;
    let count = 0;
    let stickerCount = 0;

    products.forEach(p => {
      const qty = cart[p.id] || 0;
      count += qty;
      
      if (p.category === 'Stickers') {
        stickerCount += qty;
      } else {
        total += qty * p.price;
      }
    });

    if (stickerCount > 0) {
      const promos = Math.floor(stickerCount / 3);
      const sueltos = stickerCount % 3;
      total += (promos * 1000) + (sueltos * 500);
    }

    return { total, count };
  };

  const { total: cartTotal, count: cartCount } = calculateCart();

  const handleCobrar = () => {
    setIngresosTotales(prev => prev + cartTotal);
    setVentasRealizadas(prev => prev + 1);
    setCart({});
    setActiveTab('inicio');
  };

  const emptyCart = () => setCart({});

  return (
    <div className="min-h-screen bg-coco-bg font-sans text-coco-text selection:bg-coco-roseLight selection:text-white pb-20">
      
      {/* Navbar */}
      <nav className="p-4 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center fixed w-full top-0 z-50 border-b border-coco-border">
        <a href="#" aria-label="COCO Eventos, inicio" className="block h-15 w-44 overflow-hidden">
          <img
            src={cocoLogo}
            alt="COCO Eventos"
            className="h-full w-full object-cover object-center"
          />
        </a>
        <div className="hidden md:flex gap-6 items-center">
           <a href="#demo" className="font-medium text-coco-textSec hover:text-coco-coral transition">Demo</a>
           <a href="#comparativa" className="font-medium text-coco-textSec hover:text-coco-coral transition">Pro vs Lite</a>
           <a href="#comunidad" className="font-medium text-coco-textSec hover:text-coco-coral transition">Sugerencias</a>
           <a href="#descarga" className="bg-coco-blushLight text-coco-coralStrong px-5 py-2 rounded-full font-bold hover:bg-coco-blush transition">
             Descargar App
           </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#ffb8bd]">
      <header className="pt-32 pb-12 px-6 flex flex-col items-center justify-center text-center">
        <div className="inline-block bg-coco-blushLight px-4 py-1.5 rounded-full text-coco-coralStrong font-bold text-sm mb-6 border border-coco-blush">
          Diseñado para Artistas y Emprendedores
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight text-coco-text">
          Tu inventario y ventas, <br className="hidden md:block"/>
          <span className="text-coco-coralStrong">de manera más fácil</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl text-white">
          Es una aplicacion actualmente en android para gestionar mejor el inventario y ventas en espacios principalmente en eventos  actualmente la sigo desarrollando y por esto esta demo gratis  me gustaria que la usaran y si es posible darme idea o alguna ayuda para seguir con este proyecto. 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <button className="flex-1 bg-coco-coralStrong text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-coco-coralStrong/30 hover:bg-coco-coral transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Descargar Android
          </button>
          <a href="#ios-info" className="flex-1 bg-gray-100 text-coco-textMuted border-2 border-dashed border-gray-200 px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2">
            iOS (Pronto)
          </a>
        </div>
      </header>

      {/* Componente de Transparencia iOS */}
      <IosInfo />
      </div>

      {/* Demo Interactiva Section */}
      <section id="demo" className="relative isolate py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-12 bg-[#918987] before:absolute before:inset-y-0 before:left-0 before:-z-10 before:w-1/2 before:bg-[#30211e]">
        <div className="relative z-10 max-w-xl rounded-3xl bg-[#30211e] p-8 text-white shadow-xl md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explora la aplicación real</h2>
          <p className="text-white/80 mb-6 leading-relaxed text-lg">
            Navega por el simulador. Prueba a agregar 3 stickers al carrito para ver cómo la aplicación aplica automáticamente la promoción de <strong>3 x $1.000</strong>.
          </p>
          <ul className="space-y-4 text-white/80 mb-8">
            <li className="flex items-center gap-3">
              <div className="text-coco-coralStrong"><Icons.Chart /></div> 
              <span className="font-bold">Dashboard:</span> Métricas de ingresos totales y alertas visuales.
            </li>
            <li className="flex items-center gap-3">
              <div className="text-coco-coralStrong"><Icons.Cart /></div> 
              <span className="font-bold">Punto de Venta:</span> Cálculo matemático automático de ofertas.
            </li>
            <li className="flex items-center gap-3">
              <div className="text-coco-coralStrong"><Icons.Box /></div> 
              <span className="font-bold">Inventario:</span> Grilla visual con colores por nivel de disponibilidad.
            </li>
          </ul>
        </div>

        {/* Simulador de Teléfono */}
        <div className="w-full max-w-[380px] md:max-w-[420px] h-[750px] bg-coco-bg border-[14px] border-gray-900 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col shrink-0">
          <div className="absolute top-0 inset-x-0 h-7 bg-gray-900 rounded-b-3xl w-48 mx-auto z-20"></div>
          
          <div className="bg-white pt-12 pb-4 px-5 shadow-sm z-10 flex justify-between items-center">
            <h3 className="font-bold text-xl text-coco-text flex items-center gap-2">
              {activeTab === 'inicio' && <><Icons.Home /> Dashboard</>}
              {activeTab === 'pos' && <><Icons.Cart /> Nueva Venta</>}
              {activeTab === 'inventario' && <><Icons.Box /> Inventario</>}
            </h3>
            {activeTab === 'pos' && <span className="bg-coco-blushLight text-coco-coralStrong px-3 py-1 rounded text-xs font-bold">Feria Actual</span>}
          </div>

          <div className="flex-1 overflow-y-auto bg-[#FDFBF9]">
            {activeTab === 'inicio' && (
              <div className="p-4 space-y-4">
                <div className="flex gap-2">
                  <div className="flex-1 bg-coco-coralStrong p-4 rounded-2xl items-center text-center shadow-sm">
                    <div className="text-white mb-2 flex justify-center"><Icons.Chart /></div>
                    <div className="font-bold text-white text-lg">${ingresosTotales.toLocaleString('es-CL')}</div>
                    <div className="text-white/80 text-[10px] uppercase font-bold mt-1">Total Ingresos</div>
                  </div>
                  <div className="flex-1 bg-white border border-coco-border p-4 rounded-2xl items-center text-center shadow-sm">
                    <div className="text-coco-text mb-2 flex justify-center"><Icons.Cart /></div>
                    <div className="font-bold text-coco-text text-lg">{ventasRealizadas}</div>
                    <div className="text-coco-textSec text-[10px] uppercase font-bold mt-1">Ventas Realiz.</div>
                  </div>
                </div>

                <div className="bg-coco-peachLight/30 p-4 rounded-2xl flex items-center gap-3 border border-coco-peachLight">
                  <span className="text-coco-terracottaStrong"><Icons.Alert /></span>
                  <div className="flex-1 font-bold text-coco-terracottaStrong text-sm">1 producto con stock bajo</div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-coco-text mb-3">Últimas Ventas</h4>
                  {ventasRealizadas === 0 ? (
                    <div className="bg-white p-8 rounded-2xl border border-coco-border text-center">
                      <span className="text-coco-textMuted mb-2 flex justify-center"><Icons.Cart /></span>
                      <p className="text-coco-textSec text-sm">No hay ventas registradas</p>
                    </div>
                  ) : (
                    Array.from({ length: ventasRealizadas }).map((_, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl border border-coco-border flex justify-between items-center mb-2">
                        <div>
                          <p className="font-bold text-coco-text">Venta #{ventasRealizadas - i}</p>
                          <p className="text-xs text-coco-textSec">Evento Activo</p>
                        </div>
                        <span className="font-bold text-coco-text text-md">Completada</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'pos' && (
              <div className="p-4 pb-24 relative min-h-full">
                <div className="grid grid-cols-2 gap-3">
                  {products.map(p => (
                    <button 
                      key={p.id} 
                      onClick={() => handleAddToCart(p.id)}
                      className="bg-white p-4 rounded-2xl shadow-sm border border-coco-border flex flex-col items-center active:scale-95 transition relative overflow-hidden"
                    >
                      {p.promoCount && (
                        <div className="absolute top-0 right-0 bg-coco-blushLight text-coco-coralStrong text-[9px] font-black px-2 py-1 rounded-bl-lg">
                          {p.promoCount}x${p.promoPrice}
                        </div>
                      )}
                      <div className={`w-12 h-12 ${p.color} rounded-full flex items-center justify-center text-coco-textPrimary mb-3`}>
                        <Icons.Tag />
                      </div>
                      <p className="font-bold text-coco-text text-sm text-center h-10">{p.name}</p>
                      <p className="font-extrabold text-coco-coralStrong mt-1">${p.price.toLocaleString('es-CL')}</p>
                    </button>
                  ))}
                </div>

                {cartCount > 0 && (
                  <div className="absolute bottom-4 left-4 right-4 bg-coco-coralStrong rounded-[2rem] p-2 pr-4 flex justify-between items-center shadow-lg">
                    <button onClick={emptyCart} className="w-12 h-12 bg-white/20 rounded-full flex justify-center items-center text-white">
                      <Icons.Alert />
                    </button>
                    <div className="flex-1 px-4 text-white">
                      <div className="text-xs opacity-80">{cartCount} ítems</div>
                      <div className="font-extrabold text-xl">${cartTotal.toLocaleString('es-CL')}</div>
                    </div>
                    <button onClick={handleCobrar} className="bg-white text-coco-coralStrong px-5 py-3 rounded-full font-bold shadow-md">
                      Cobrar
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'inventario' && (
              <div className="p-4 grid grid-cols-2 gap-3">
                {products.map(p => (
                  <div key={p.id} className="bg-white p-4 rounded-2xl shadow-sm border border-coco-border flex flex-col items-center">
                    <div className="w-10 h-10 bg-coco-blushLight text-coco-coralStrong rounded-full flex items-center justify-center mb-2">
                      <Icons.Box />
                    </div>
                    <p className="font-bold text-coco-text text-sm text-center mb-2">{p.name}</p>
                    <div className="flex justify-between w-full items-center px-1 mt-auto">
                      <p className="text-xs font-bold text-coco-textSec">${p.price}</p>
                      <div className={`px-2 py-1 rounded-lg text-xs font-bold ${p.stock < 10 ? 'bg-coco-peach text-white' : 'bg-coco-blushLight text-coco-textPrimary'}`}>
                        {p.stock} un.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border-t border-coco-border flex justify-around items-center p-2 pb-6">
            <button onClick={() => setActiveTab('inicio')} className={`flex flex-col items-center p-2 ${activeTab === 'inicio' ? 'text-coco-coralStrong' : 'text-coco-textMuted'}`}>
              <Icons.Chart />
              <span className="text-[10px] font-bold mt-1">Inicio</span>
            </button>
            <button onClick={() => setActiveTab('pos')} className={`flex flex-col items-center p-2 ${activeTab === 'pos' ? 'text-coco-coralStrong' : 'text-coco-textMuted'}`}>
              <Icons.Cart />
              <span className="text-[10px] font-bold mt-1">Vender</span>
            </button>
            <button onClick={() => setActiveTab('inventario')} className={`flex flex-col items-center p-2 ${activeTab === 'inventario' ? 'text-coco-coralStrong' : 'text-coco-textMuted'}`}>
              <Icons.Box />
              <span className="text-[10px] font-bold mt-1">Stock</span>
            </button>
          </div>
        </div>
      </section>

      {/* Componente de Precios/Comparativa */}
      <div className="bg-[#ffa07f]">
        <Pricing />
      </div>

      {/* Sugerencias y Donaciones */}
      <section className="bg-[#fffaf7] px-6 py-16">
      <div id="comunidad" className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-coco-border">
        <div className="grid md:grid-cols-2 gap-12 p-4 md:p-8">
          <div>
            <div>
  <h3 className="text-2xl font-bold text-coco-text mb-4">¿Tienes una idea?</h3>
  <p className="text-coco-textSec mb-6">
    COCO Eventos crece gracias a la comunidad. Si te gustaría ver una nueva función, cuéntanos.
  </p>
  <SuggestionForm />
</div>
          </div>

          <div className="flex flex-col justify-center items-center text-center bg-coco-bg p-8 rounded-3xl border border-coco-border">
            <img
              src={monkiImage}
              alt="Monki"
              className="mb-4 h-20 w-20 rounded-full bg-white object-cover shadow-sm"
            />
            <h3 className="text-2xl font-bold text-coco-text mb-3">Apoya el desarrollo</h3>
            <p className="text-coco-textSec mb-6">
              Mantener la versión gratuita sin anuncios requiere mucho esfuerzo. Si la app te ha ayudado, considera hacer una donación para seguir mejorándola.
            </p>
            <a
              href="https://ko-fi.com/melondev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2D2324] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-black transition flex items-center gap-2"
            >
              Invítanos un cafecito
            </a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}