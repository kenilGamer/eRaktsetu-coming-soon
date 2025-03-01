import React from 'react';
import FaqList from '../components/Faqdropdown';

function FQA() {
  const data = [
    {
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam."
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam."
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam."
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam."
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam. Qui Adipisci Dolor Accusamus Blanditiis Sint Voluptatem Corrupti Voluptas Aliquam."
    }

  ];

  return (
    <div className='w-full min-h-full p-  mx-auto'>
      <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='text-[7vw] md:text-[3.3vw] font-["Anek Devanagari"] text-center font-bold'>
          Frequently Asked <span className='text-[#AB1419]'>Questions</span>
        </h1>
        <hr className='border-2 border-[#ab1419] w-[60vw] md:w-[34vw] rounded-full mx-auto mb-4' />
        <p className='md:text-[1.3vw] text-[3.9vw] md:w-2/4 font-["Anek Devanagari"] p-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci dolor accusamus blanditiis sint voluptatem corrupti voluptas aliquam
        </p>
      </div>
      <FaqList data={data} />
    </div>
  );
}

export default FQA;
