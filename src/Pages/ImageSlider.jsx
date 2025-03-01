import React, { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const slides = [
    {
      id: 1,
      image: "/public/imgs/maincontainer.png",
      title: "Give Happiness",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      image: "/public/imgs/maincontainer.png",
      title: "Stay Positive",
      text: "Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit non."
    },
    {
      id: 3,
      image: "/public/imgs/maincontainer.png",
      title: "Enjoy the Moment",
      text: "Curabitur imperdiet est ac lectus tristique convallis."
    },
    {
      id: 3,
      image: "/public/imgs/maincontainer.png",
      title: "Enjoy the Moment",
      text: "Curabitur imperdiet est ac lectus tristique convallis."
    },
    {
      id: 3,
      image: "/public/imgs/maincontainer.png",
      title: "Enjoy the Moment",
      text: "Curabitur imperdiet est ac lectus tristique convallis."
    },
    {
      id: 3,
      image: "/public/imgs/maincontainer.png",
      title: "Enjoy the Moment",
      text: "Curabitur imperdiet est ac lectus tristique convallis."
    }, {
      id: 3,
      image: "/public/imgs/maincontainer.png",
      title: "Enjoy the Moment",
      text: "Curabitur imperdiet est ac lectus tristique convallis."
    },
    {
      id: 3,
      image: "/public/imgs/maincontainer.png",
      title: "Enjoy the Moment",
      text: "Curabitur imperdiet est ac lectus tristique convallis."
    },
  ];

  const PhotoCard = ({ image, title, text }) => (
    <div className="text-center">
      <div className="w-[200px] h-[200px] mx-auto mb-5 rounded-full overflow-hidden border-[5px] border-white/30 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-2.5 right-2.5 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[#AB1419]">
          ❤
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2.5">{title}</h3>
      <p className="text-sm opacity-80">{text}</p>
    </div>
  );

  return (
    <div className="bg-[#AB1419] h-screen flex flex-col items-center  justify-center p-10 text-white">
      <h1 className="w-[80vw] text-center text-[3vw] font-semibold">
        Corporis Ad Ipsa Aliquid, Eos Asperiores Debitis. Odit In Vero Quaerat Dolorem
      </h1>

      <hr className="w-[30vw] h-[2px] bg-[#FCFCFC] my-10"/>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 3}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-[1200px]  "
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <PhotoCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;