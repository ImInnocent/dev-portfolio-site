import classNames from 'classnames';

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  text: string;
  variant?: 'outlined' | 'contained' | 'text';
}

const tailwind = {
  contained: 'text-white bg-green-300',
  outlined: 'text-green-300 border-black border-opacity-10 border',
  text: 'text-green-300',
  button: 'leading-4 tracking-widest font-medium text-sm flex flex-row pl-2 pr-1.5 pb-1.5 pt-1.5 rounded items-start',
};

const Button = ({ text, variant = 'contained', className, ...props }: ButtonProps) => {
  return (
    <button className={classNames({
      [tailwind.contained]: variant === 'contained',
      [tailwind.outlined]: variant === 'outlined',
      [tailwind.text]: variant === 'text',
    }, tailwind.button, className)} {...props}>
      {text}
    </button>
  );
}

export default Button;
