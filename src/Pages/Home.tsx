import Navbar from '../components/Navbar';
import SliderComponent from '../components/SliderComponent';
import ImagemHero from '../components/ImagemHero';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
//import { principal_historia } from '../assets';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <ImagemHero />
        <h1 className="text-white text-center lg:ml-96 lg:mr-96 text-3xl sm:text-clip md:text-4xl mt-40 w-160">
          Sejam bem-vindos ao site da Casa de Caridade Santa Bárbara e Iansã
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[350px]">
        <h2 className="text-black ml-8 text-4xl">
          Próximos <strong>Eventos</strong>
        </h2>
        <SliderComponent />

        <div className="flex flex-col lg:flex-row items-center mb-12">
          <img src="https://unsplash.it/750/500" alt="Left" className=" rounded-r-2xl" />
          <div className="text-black lg:w-1/2 lg:ml-16">
            <h2 className="text-4xl font-bold mb-4">Nossa história</h2>
            <p className='w-80'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              aliquet turpis ac consectetur pretium. Fusce tristique magna ac
              enim pharetra eleifend. Nam a lobortis enim, vel tincidunt purus.
            </p>
            <button className="mt-4 px-12 py-2 text-white rounded-full button_home">
            Saiba mais sobre nós
            </button>
          </div>
        </div>
        
        <div className="bg-[#F2F2F2;]">
          <div className="flex flex-col lg:flex-row items-center p-4  ">
              <div className="block w-full lg:w-2/3">
                <h2 className="text-black text-4xl font-bold mb-4">Galeria de fotos</h2>
                <p className='text-black '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  aliquet turpis ac consectetur pretium. Fusce tristique magna ac
                  enim pharetra eleifend. Nam a lobortis enim, vel tincidunt purus.
                </p>
              </div>
              <div className="ml-48 w-32 lg:w-1/3">
                <button className="px-12 py-2 text-white rounded-full button_home">
                  Visite a nossa página
                </button>
              </div>
          </div>
          <div className="p-4 max-w-7xl mx-auto mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <img src="https://unsplash.it/280/280" alt="Image 1" />
            <img src="https://unsplash.it/280/280" alt="Image 2" />
            <img src="https://unsplash.it/280/280" alt="Image 3" />
            <img src="https://unsplash.it/280/280" alt="Image 4" />
          </div>
        </div>
      
        <div className="text-black mt-8">
          <h2 className="text-2xl font-bold mb-4">Depoimentos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquet turpis ac consectetur pretium. Fusce tristique magna ac enim
            pharetra eleifend. Nam a lobortis enim, vel tincidunt purus.
          </p>
        </div>
        <Testimonials />
        <div className="h-96">
          {/* Replace with your own map component and API key */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;