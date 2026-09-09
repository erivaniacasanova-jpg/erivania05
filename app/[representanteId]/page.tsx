import RegistrationForm from "@/components/registration-form"

export default async function RepresentantePage({ params }: { params: Promise<{ representanteId: string }> }) {
  const { representanteId } = await params

  const representantes = {
    "134684": {
      id: "134684",
      nome: "William Dos Santos Pessoa",
      whatsapp: "5521969400194",
    },
    "135302": {
      id: "135302",
      nome: "Antonia Erivania Delmiro Jacinto",
      whatsapp: "558498410187",
    },
    "153542": {
      id: "153542",
      nome: "Aline Aparecida Melo",
      whatsapp: "553193371195",
     },
    "160064": {
      id: "160064",
      nome: " Richard Feijo Da Silva",
      whatsapp: "558398497016",
    },
     "119294": {
      id: "119294",
      nome: " Narcisio Marques Da Silva",
      whatsapp: "5511974805837",
    },
  }

  const representante = representantes[representanteId as keyof typeof representantes]

  if (!representante) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 md:py-12 px-2 md:px-4">
        <div className="container mx-auto max-w-4xl w-full px-3 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
            <p className="text-center text-red-600 text-xl">Representante não encontrado.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 md:py-12 px-2 md:px-4">
      <div className="container mx-auto max-w-4xl w-full px-3 sm:px-6 md:px-8">
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
          <RegistrationForm representante={representante} />
        </div>
        <footer className="text-center mt-6 md:mt-8 text-xs sm:text-sm text-gray-600 px-2">
          <p>2026 © Federal Associados (CNPJ 29.383-343-0001/64) - Todos os direitos reservados |</p>
          <p className="mt-1">Patrocinador: {representante.nome}</p>
        </footer>
      </div>
    </main>
  )
}
