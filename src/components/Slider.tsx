import React, { useState } from 'react';
import classNames from 'classnames';

const DEFAULT_IMAGE_LINKS = [
  'https://mblogthumb-phinf.pstatic.net/20130508_178/ichufs_1367997175282LLvRG_JPEG/IMG_3337s.jpg?type=w420',
  'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
  'https://t1.daumcdn.net/cfile/blog/99F921475CFDF0A429',
];

interface SliderProps extends React.ComponentPropsWithRef<'div'> {
  links?: string[];
}

export default ({ links, className, ...props }: SliderProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageLinks, setImageLinks] = useState<string[]>(links === undefined || links.length === 0 ? DEFAULT_IMAGE_LINKS : links);

  const handleMoveImage = (index: number) => {
    if (index < 0 || index >= imageLinks.length) {
      console.warn(`index out of range: ${index}`);
      return;
    }

    setImageIndex(index);
  }

  return (
    <div className={classNames(className, 'text-center')} { ...props }>
      <div className='grid slider-container'>
        {/* left button */}
        <div className='relative p-2.5 cursor-slider-containerpointer' onClick={() => handleMoveImage(imageIndex - 1)}>
          <button className='bg-contain bg-transparent border-0 cursor-pointer absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-arrow-left' />
        </div>
        {/* image area */}
        <div className='inline-block overflow-hidden whitespace-nowrap h-100'>
          <div style={{ transform: `translateX(-${imageIndex}00%)` }} className='block transition-transform w-full h-full'>
            {imageLinks.map(link => (
              <div className='inline-block w-full h-full'>
                <img className='h-full' src={link} />
              </div>
            ))}
          </div>
        </div>
        {/* right button */}
        <div className='relative p-2.5 cursor-pointer' onClick={() => handleMoveImage(imageIndex + 1)}>
          <button 
            className='bg-contain bg-transparent border-0 cursor-pointer absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-arrow-right' />
        </div>
      </div>
    </div>
  );
}
