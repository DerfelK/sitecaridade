import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
//import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// function CustomPrevArrow(props: { className: any; style: any; onClick: any; }) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ 
//         ...style, 
//         display: 'flex',
//         // flexWrap: 'wrap',
//         marginTop: '5px',
//         // justifyContent: 'center',
//         // alignItems: 'center', 
//         background: 'green',
//         boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//         width: '40px',
//         height: '40px',
//         borderRadius: '50%',
//         cursor: 'pointer'
//       }}
//       onClick={onClick}
//     >
//       <div className="mr-5">
//          <ArrowLeftIcon className="h-6 w-6 text-black" />
//       </div>
//     </div>
//   );
// }

// function CustomNextArrow(props: { className: any; style: any; onClick: any; }) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ 
//         ...style, 
//         display: 'block', 
//         background: 'white',
//         boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//         width: '40px',
//         height: '40px',
//         borderRadius: '30%',
//         cursor: 'pointer'
//       }}
//       onClick={onClick}
//     >
//       <ArrowRightIcon className="h-6 w-6 text-black" />
//     </div>
//   );
// }

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    //prevArrow: <CustomPrevArrow className={undefined} style={undefined} onClick={undefined} />,
    //nextArrow: <CustomNextArrow className={undefined} style={undefined} onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-4 mb-16">
      <Slider {...settings}>
        <div className="bg-[#ffffff] border-l-[6px] border-l-indigo-500 w-36 h-20 rounded flex items-center justify-center ">
          <div className="flex items-center space-x-24 mt-4 ml-2">
            <h3 className="text-black text-3xl font-bold">
              05/06  
            </h3>
            <div className="block">
              <h4 className="text-black font-semibold">
                Quinta Feira
              </h4>
              <p className="text-black text-lg">
                Gira de Iansã
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] border-l-[6px] border-l-orange-400 w-36 h-20 rounded flex items-center justify-center">
          <div className="flex items-center space-x-24 mt-4 ml-2">
            <h3 className="text-black text-3xl font-bold">
              08/06  
            </h3>
            <div className="block">
              <h4 className="text-black font-semibold">
                Segunda Feira
              </h4>
              <p className="text-black text-lg">
                Curso tal de tal
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] border-l-[6px] border-l-slate-500 w-36 h-20 rounded flex items-center justify-center">
          <div className="flex items-center space-x-24 mt-4 ml-2">
            <h3 className="text-black text-3xl font-bold">
              09/06  
            </h3>
            <div className="block">
              <h4 className="text-black font-semibold">
                Terça Feira
              </h4>
              <p className="text-black text-lg">
                Evento tal de tal
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] border-l-[6px] border-l-yellow-400 w-36 h-20 rounded flex items-center justify-center">
          <div className="flex items-center space-x-24 mt-4 ml-2">
            <h3 className="text-black text-3xl font-bold">
              10/06  
            </h3>
            <div className="block">
              <h4 className="text-black font-semibold">
                Quarta Feira
              </h4>
              <p className="text-black text-lg">
                Gira de Exu
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] border-l-[6px] border-l-indigo-500 w-36 h-20 rounded flex items-center justify-center">
          <div className="flex items-center space-x-24 mt-4 ml-2">
            <h3 className="text-black text-3xl font-bold">
              12/06  
            </h3>
            <div className="block">
              <h4 className="text-black font-semibold">
                Quinta Feira
              </h4>
              <p className="text-black text-lg">
                Gira de Iansã
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
