import classNames from 'classnames';
import React from 'react';

interface ChipsProps extends React.ComponentPropsWithRef<'div'> {
  children: JSX.Element | JSX.Element[];
}

/**
 * 자식들에게 margin-right 속성을 줌
 */
export default ({ children, className, ...props }: ChipsProps) => {
  return (
    <div className={classNames(className, '')} {...props}>
      {React.Children.map(children, child => (
        React.cloneElement(child, { className: 'mr-2 mb-1' })
      ))}
    </div>
  );
}
