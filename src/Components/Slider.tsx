import React, { useState } from 'react';

import './Slider.css';

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
    <div className="slider-root">
      Slider
      <div className="slider-container">
        {/* left button */}
        <div className="slider-button-container">
          <button 
            className="slider-button slider-button-left" 
            onClick={() => handleMoveImage(imageIndex - 1)} />
        </div>
        {/* image area */}
        <div className="slider-image-area">
          <div style={{ transform: `translateX(-${imageIndex}00%)` }} className="slider-image-inner">
            {imageLinks.map(link => (
              <div className="slider-image-container">
                <img className="slider-image" src={link} />
              </div>
            ))}
          </div>
        </div>
        {/* right button */}
        <div className="slider-button-container">
          <button 
            className="slider-button slider-button-right" 
            onClick={() => handleMoveImage(imageIndex + 1)} />
        </div>
      </div>
    </div>
  );
}