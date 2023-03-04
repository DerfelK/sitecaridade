import Navbar from '../components/Navbar'
import { imagem_hero, image_heromobile }  from '../assets'

const Home = () => {
  return (
    <div className="relative">
        <Navbar />
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-no-repeat hidden sm:block" 
        style={{
          backgroundImage: `url(${imagem_hero})`,
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundSize: 'cover',
          width: '1440px',
          height: '665px',
        }} 
      />
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-no-repeat block sm:hidden" 
        id="image_heromobile" 
        style={{
          backgroundImage: `url(${image_heromobile})`,
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundSize: 'cover',
          width: '640px',
          height: '960px',
        }} 
      />
      <div className="absolute flex items-center justify-center">
        <h1 className="text-white text-center lg:ml-96 lg:mr-96 text-3xl sm:text-clip md:text-4xl mt-40 w-160">
          Sejam bem-vindos ao site da Casa de Caridade Santa Bárbara e Iansã
        </h1>
      </div>
    </div>
  )
}

export default Home