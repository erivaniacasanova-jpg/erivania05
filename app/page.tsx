import RegistrationForm from "@/components/registration-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-6 md:py-12 px-2 md:px-4">
      <div className="mx-auto max-w-4xl w-full px-3 sm:px-6 md:px-8">
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
          <RegistrationForm />
        </div>
        <footer className="text-center mt-6 md:mt-8 text-xs sm:text-sm text-gray-600 px-2">
          <p>{"2026 \u00A9 Federal Associados (CNPJ 29.383-343-0001/64) - Todos os direitos reservados |"}</p>
          <p className="mt-1">{"Patrocinador: Francisco Eliedison Dos Santos"}</p>
        </footer>
      </div>
    </main>
  )
}
