import React, { useState } from 'react';

const imageLinks = [
  "https://mblogthumb-phinf.pstatic.net/20130508_178/ichufs_1367997175282LLvRG_JPEG/IMG_3337s.jpg?type=w420",
  "https://lh3.googleusercontent.com/proxy/VQMiXkX_H1hFAGacQWOS2IZhmzyYhkwzJya3Hzwh0WnzJU_bk1ExQdUf35218gMr_jMwmLTnAmrB2QtUycz7JvAfcKalu1TOaP6TwpjWjfSgRPE",
  "https://t1.daumcdn.net/cfile/blog/99F921475CFDF0A429",
];

export default function Slider() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleMoveImage = (index: number) => {
    if (index < 0 || index >= imageLinks.length) {
      console.warn(`index out of range: ${index}`)
      return;
    }

    setImageIndex(index);
  }

  return (
    <div className="text-center w-800">
      <div className="grid slider-container">
        {/* left button */}
        <div className="relative p-2.5">
          <button 
            className="bg-contain bg-transparent border-0 cursor-pointer absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-arrow-left" 
            onClick={() => handleMoveImage(imageIndex - 1)} />
        </div>
        {/* image area */}
        <div className="inline-block overflow-hidden whitespace-nowrap h-100">
          <div style={{ transform: `translateX(-${imageIndex}00%)` }} className="block transition-transform w-full h-full">
            {imageLinks.map(link => (
              <div className="inline-block w-full h-full">
                <img className="h-full" src={link} />
              </div>
            ))}
          </div>
        </div>
        {/* right button */}
        <div className="relative slider-button-container">
          <button 
            className="bg-contain bg-transparent border-0 cursor-pointer absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-arrow-right" 
            onClick={() => handleMoveImage(imageIndex + 1)} />
        </div>
      </div>
    </div>
  );
}