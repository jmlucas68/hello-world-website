import { useState, useEffect } from 'react'

function App() {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const now = new Date()
    setCurrentDate(now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Contenedor principal con glassmorphism */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center">
          {/* Icono React animado */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-12 h-12 md:w-14 md:h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89-1.87-.84-1.87-1.89.84-1.89 1.87-1.89M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"/>
              </svg>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
            Hello World
          </h1>

          {/* Subtítulo */}
          <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-light">
            Mi primera página con React
          </h2>

          {/* Fecha actual */}
          <div className="mb-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <p className="text-white/95 font-medium text-lg">
                📅 {currentDate}
              </p>
            </div>
          </div>

          {/* Mensaje principal */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30 mb-8">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Esta es una POC de página web con React
            </p>
          </div>

          {/* Información técnica */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-cyan-300 text-2xl mb-2">⚛️</div>
              <h3 className="text-white font-semibold mb-1">React 18</h3>
              <p className="text-white/70 text-sm">Frontend Framework</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-blue-300 text-2xl mb-2">🚀</div>
              <h3 className="text-white font-semibold mb-1">Vite</h3>
              <p className="text-white/70 text-sm">Build Tool</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-purple-300 text-2xl mb-2">🎨</div>
              <h3 className="text-white font-semibold mb-1">TailwindCSS</h3>
              <p className="text-white/70 text-sm">Styling</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Desarrollado con ❤️ para GitHub Pages
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
