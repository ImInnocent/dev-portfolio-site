import { useLocation, useMatch, useParams } from 'react-router-dom';
import Chips from '../components/Chips';
import Chip from '../components/Chip';
import Slider from '../components/Slider';
import Card from '../components/Card';

export default () => {
  const { id } = useParams();

  return (
    <div className='py-5'>
      {/* title */}
      <h1 className='mx-24 text-5xl pt-3'>포트폴리오 - {id}</h1>
      {/* subtitle */}
      <h3 className='mx-24 text-2xl pt-3'>포트폴리오 한줄 설명</h3>
      {/* tags */}
      <Chips className='mx-24 pt-3'>
        <Chip text='웹' />
        <Chip text='프론트엔드' />
        <Chip text='안드로이드' />
        <Chip text='AWS' />
      </Chips>
      {/* images */}
      <Slider className='pt-3' />
      {/* text */}
      <div className='mx-24 pt-3'>
        안녕하세요 이건 저희의 암튼 뭔지 아시죠
      </div>
      {/* more */}
      <div className="mx-24 grid py-8 grid-cols-4 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
