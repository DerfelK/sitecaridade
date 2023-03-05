import { imagem_hero, image_heromobile } from '../assets';

const ImagemHero = () => {
  return (
    <>
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
    </>
  );
};

export default ImagemHero;
