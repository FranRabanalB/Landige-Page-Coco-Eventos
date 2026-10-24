import { useForm, ValidationError } from '@formspree/react';

export default function SuggestionForm() {
  const [state, handleSubmit] = useForm('myeezynq');

  if (state.succeeded) {
    return (
      <div className="bg-coco-blushLight border border-coco-blush rounded-2xl p-8 text-center">
        <h4 className="text-xl font-bold text-coco-coralStrong mb-2">
          ¡Gracias por tu idea!
        </h4>
        <p className="text-coco-textSec">
          Recibimos tu sugerencia. La revisaremos para seguir mejorando COCO Eventos.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-bold text-coco-textSec mb-1">
          Tu nombre o arroba
        </label>
        <input
          type="text"
          name="nombre"
          required
          className="w-full px-4 py-3 rounded-xl border border-coco-border bg-coco-bg focus:outline-none focus:border-coco-coralStrong"
          placeholder="@tu_emprendimiento"
        />
        <ValidationError
          prefix="Nombre"
          field="nombre"
          errors={state.errors}
          className="text-xs text-red-500 mt-1"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-coco-textSec mb-1">
          Tu sugerencia
        </label>
        <textarea
          name="sugerencia"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-xl border border-coco-border bg-coco-bg focus:outline-none focus:border-coco-coralStrong resize-none"
          placeholder="Me encantaría que la app pudiera..."
        />
        <ValidationError
          prefix="Sugerencia"
          field="sugerencia"
          errors={state.errors}
          className="text-xs text-red-500 mt-1"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-coco-terracotta text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-coco-terracottaStrong transition w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Enviando...' : 'Enviar Sugerencia'}
      </button>
      <ValidationError errors={state.errors} className="text-xs text-red-500" />
    </form>
  );
}