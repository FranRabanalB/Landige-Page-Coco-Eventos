// src/components/IosInfo.tsx
export default function IosInfo() {
  return (
    <section id="ios-info" className="px-6 max-w-4xl mx-auto mb-16 relative z-10 group">
      {/* Tarjeta con animación de elevación y sombra */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-coco-border flex flex-col md:flex-row gap-6 items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-coco-blush">
        
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-sm font-bold text-coco-text shrink-0 border border-gray-100 transition-transform duration-500 group-hover:scale-110">
          iOS
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-coco-text mb-3 transition-colors duration-300 group-hover:text-coco-coralStrong">
            Que sucede realmente Iphone
          </h3>
          <p className="text-coco-textSec mb-4">
            Si tienes iPhone y te preguntas por qué aún no puedes instalar la app, la realidad es que Apple tiene barreras altas para los desarrolladores humildes como yo:
          </p>
          <ul className="space-y-3 text-sm text-coco-textSec mb-5">
            <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coco-coralStrong" />
              <span><strong>El muro de los $99 dólares:</strong> Apple obliga a pagar una membresía anual (aprox. $95.000 CLP) solo para generar el instalable.</span>
            </li>
            <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coco-coralStrong" />
              <span><strong>No hay distribución libre:</strong> A diferencia de Android, Apple te obliga a publicar en la App Store y pasar por una revisión estricta.</span>
            </li>
            <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coco-coralStrong" />
              <span><strong>"TestFlight" es tedioso:</strong> Invitar probadores beta obligaría a tus clientes a instalar apps adicionales.</span>
            </li>
          </ul>
          <div className="bg-coco-blushLight/50 p-3 rounded-xl border border-coco-blushLight transition-colors duration-300 hover:bg-coco-blushLight">
            <p className="text-sm font-bold text-coco-text">
              ¿La meta? Seguir creciendo con la comunidad y las donaciones para poder costear la licencia oficial muy pronto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}