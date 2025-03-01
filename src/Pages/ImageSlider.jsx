import React, { useState, useEffect , useCallback} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageSlider = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const totalSlides = 3;

  // const slides = [
  //   [
  //     {
  //       id: 1,
  //       image: "https://source.unsplash.com/random/200x200?kid=1",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     },
  //     {
  //       id: 2,
  //       image: "https://source.unsplash.com/random/200x200?kid=2",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     },
  //     {
  //       id: 3,
  //       image: "https://source.unsplash.com/random/200x200?kid=3",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     }
  //   ],
  //   [
  //     {
  //       id: 4,
  //       image: "https://source.unsplash.com/random/200x200?kid=4",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     },
  //     {
  //       id: 5,
  //       image: "https://source.unsplash.com/random/200x200?kid=5",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     },
  //     {
  //       id: 6,
  //       image: "https://source.unsplash.com/random/200x200?kid=6",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     }
  //   ],
  //   [
  //     {
  //       id: 7,
  //       image: "https://source.unsplash.com/random/200x200?kid=7",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     },
  //     {
  //       id: 8,
  //       image: "https://source.unsplash.com/random/200x200?kid=8",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     },
  //     {
  //       id: 9,
  //       image: "https://source.unsplash.com/random/200x200?kid=9",
  //       title: "Give Happiness",
  //       text: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci"
  //     }
  //   ]
  // ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const PhotoCard = ({ image, title, text }) => (
    <div className="text-center">
      <div className="w-[200px] h-[200px] mx-auto mb-5 rounded-full overflow-hidden border-[5px] border-white/30 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-2.5 right-2.5 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[#AB1419]">
          ❤
        </div>
      </div>
      <h3 className="text-xl mb-2.5">{title}</h3>
      <p className="text-sm opacity-80">{text}</p>
    </div>
  );

  return isMobile == false ? (
    <div className="bg-[#AB1419] min-h-screen sm:h-[30vh] flex flex-col items-center py-12 px-5 text-white">
      <h1 className="w-[80vw] text-center text-[3vw] font-Poppins fw-600">
        Corporis Ad Ipsa Aliquid, Eos Asperiores Debitis. Odit In Vero Quaerat Dolorem
      </h1>

      <div className="w-[30vw] h-[2px] bg-[#FCFCFC] my-10"></div>

      <div className="w-full max-w-[1200px] overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-3 gap-7 px-5">
              {slide.map((item) => (
                <PhotoCard key={item.id} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-7 gap-2.5">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  ):(
    <div className="bg-[#AB1419] h-[50vh] sm:h-[30vh] flex flex-col items-center py-12 px-5 text-white">
    <h1 className="w-[80vw] text-center text-[3vw] font-Poppins fw-600">
      Corporis Ad Ipsa Aliquid, Eos Asperiores Debitis. Odit In Vero Quaerat Dolorem
    </h1>

    <div className="w-[30vw] h-[2px] bg-[#FCFCFC] my-10"></div>

  </div>
  );
};

export default ImageSlider;
