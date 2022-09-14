import './styles/main.css';

import logoImg from './assets/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black">Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
        esta aqui.</h1>
    </div>
  )
}

export default App
