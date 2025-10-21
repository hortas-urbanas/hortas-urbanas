// A importação do App.css foi removida.

function App() {
  // Este é um exemplo de como usar as classes do Tailwind.
  // Se vir um fundo escuro com texto centrado, funcionou!
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-green-400">Hortas Urbanas</h1>
        <p className="text-xl text-gray-300">Ambiente configurado com React + Vite + Tailwind!</p>
        <p className="text-gray-500">Pode agora apagar este conteúdo e começar a usar o UI Kit.</p>
      </div>
    </div>
  )
}

export default App
