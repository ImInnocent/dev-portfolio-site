import classNames from 'classnames';
import CancelIcon from '@mui/icons-material/Cancel';

interface ChipProps extends React.ComponentPropsWithRef<'div'> {
  text: string;
  onDelete?: () => void;
}

export default ({ text, className, onDelete, ...props }: ChipProps) => {
  return (
    <div className={classNames(className, 'inline-flex h-8 flex-row items-center p-1 rounded-2xl bg-gray-300')} {...props}>
      <div className='flex flex-row justify-center items-center pl-2 pr-1 pb-px'>
        <p className='font-normal text-sm leading-5 uppercase tracking-wide'>{text}</p>
      </div>
      {onDelete !== undefined
        ? <button className='flex flex-row justify-center items-center pr-1 h-6 w-5'>
            <CancelIcon sx={{ display: 'block', height: 18, width: 18 }} />
          </button>
        : <div className="mr-1"></div>
      }
    </div>
  );
}
