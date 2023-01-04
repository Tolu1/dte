import Link from 'next/link';
import { ButtonProps } from '../typings';

const Button = ({label, href, className}: ButtonProps) => {
  return (
    <Link href={href}>
      <div className={`${className} bg-green hover:bg-green-hover text-white text-sm whitespace-nowrap px-6 py-2 rounded-md`}>
        {label}
      </div>
    </Link>
  );
};

export default Button;
