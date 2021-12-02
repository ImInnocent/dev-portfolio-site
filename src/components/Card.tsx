export default function Card() {
  return (
    <div className='h-60 max-w-lg flex flex-col rounded-md bg-white shadow-lg cursor-pointer'>
      <div className='group h-5/6 relative rounded-tl-md rounded-tr-md transition-colors bg-blue-300 hover:bg-blue-200'>
        <div className='group-hover:block hidden absolute text-white bottom-4 font-semibold pl-6 pr-6'>Title</div>
      </div>
      <div className='flex justify-between pl-6 pr-6 pt-2 pb-3'>
        <span className='font-bold text-base'>Author</span>
        <span className='text-base'>40 Likes</span>
      </div>
    </div>
  );
}
