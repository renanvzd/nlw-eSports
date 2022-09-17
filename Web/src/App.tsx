import './styles/main.css';

import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" className='w-80' />

      <h1 className="text-6xl text-white font-black mt-8">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
      </div>

      <CreateAdBanner />

    </div>
  )
}

export default App
