// src/components/Pricing.tsx
export default function Pricing() {
  return (
    <section id="comparativa" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center transform transition-all duration-700 hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coco-text">
          Actualmente es una version Demo
        </h2>
        <p className="text-white mb-12 max-w-2xl mx-auto">
          Pero la idea es ir agregando mas funciones y mejoras , para terminar siendo algo como esto
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl shadow-lg border border-coco-border transition-shadow duration-500 hover:shadow-2xl">
        <table className="w-full text-left min-w-[700px] border-collapse">
          <thead>
            <tr>
              <th className="p-6 text-lg font-bold text-coco-text w-1/3 bg-coco-bg border-b-2 border-coco-border rounded-tl-3xl">
                Característica
              </th>
              <th className="p-6 text-lg font-bold text-coco-text text-center w-1/3 bg-white border-b-2 border-coco-border">
                Versión Lite <br/>
                <span className="text-sm font-normal text-coco-textSec transition-colors hover:text-coco-text">
                  (Gratuita)
                </span>
              </th>
              <th className="p-6 text-lg font-bold text-white text-center w-1/3 bg-coco-coralStrong border-b-2 border-coco-coralStrong rounded-tr-3xl relative overflow-hidden group">
                {/* Efecto de brillo animado de fondo */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10">Versión Pro</span> <br/>
                <span className="text-sm font-normal text-coco-blushLight relative z-10">
                  (Pago / Suscripción)
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-coco-border">
            {/* Fila animada */}
            <tr className="transition-all duration-300 hover:bg-coco-blushLight/10 hover:scale-[1.01] hover:shadow-sm">
              <td className="p-6 font-bold text-coco-text flex items-center gap-3">
                Límite de Productos
              </td>
              <td className="p-6 text-center text-coco-textSec">
                Máximo 15 productos <br/><span className="text-xs">(ideal para probar)</span>
              </td>
              <td className="p-6 text-center font-bold text-coco-coralStrong bg-coco-blushLight/10 transition-colors duration-300 hover:bg-coco-blushLight/30">
                Ilimitado
              </td>
            </tr>
            <tr className="transition-all duration-300 hover:bg-coco-blushLight/10 hover:scale-[1.01] hover:shadow-sm">
              <td className="p-6 font-bold text-coco-text flex items-center gap-3">
                Importación Masiva
              </td>
              <td className="p-6 text-center text-coco-textSec">
                Desactivada <br/><span className="text-xs">(solo manual)</span>
              </td>
              <td className="p-6 text-center font-bold text-coco-coralStrong bg-coco-blushLight/10 transition-colors duration-300 hover:bg-coco-blushLight/30">
                Activa <br/><span className="text-xs">(Excel)</span>
              </td>
            </tr>
            <tr className="transition-all duration-300 hover:bg-coco-blushLight/10 hover:scale-[1.01] hover:shadow-sm">
              <td className="p-6 font-bold text-coco-text flex items-center gap-3">
                Exportación Reportes
              </td>
              <td className="p-6 text-center text-coco-textSec">
                Desactivada <br/><span className="text-xs">(solo pantalla)</span>
              </td>
              <td className="p-6 text-center font-bold text-coco-coralStrong bg-coco-blushLight/10 transition-colors duration-300 hover:bg-coco-blushLight/30">
                Activa <br/><span className="text-xs">(Excel Financiero)</span>
              </td>
            </tr>
            <tr className="transition-all duration-300 hover:bg-coco-blushLight/10 hover:scale-[1.01] hover:shadow-sm">
              <td className="p-6 font-bold text-coco-text flex items-center gap-3">
                Gestión de Eventos
              </td>
              <td className="p-6 text-center text-coco-textSec">
                1 evento activo <br/><span className="text-xs">(borrar para crear)</span>
              </td>
              <td className="p-6 text-center font-bold text-coco-coralStrong bg-coco-blushLight/10 transition-colors duration-300 hover:bg-coco-blushLight/30">
                Historial Ilimitado
              </td>
            </tr>
            <tr className="transition-all duration-300 hover:bg-coco-blushLight/10 hover:scale-[1.01] hover:shadow-sm">
              <td className="p-6 font-bold text-coco-text flex items-center gap-3">
                Promos Automáticas
              </td>
              <td className="p-6 text-center text-coco-textSec">
                Desactivadas <br/><span className="text-xs">(precios fijos)</span>
              </td>
              <td className="p-6 text-center font-bold text-coco-coralStrong bg-coco-blushLight/10 transition-colors duration-300 hover:bg-coco-blushLight/30">
                Activas <br/><span className="text-xs">(ej. 3x$1.000)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}