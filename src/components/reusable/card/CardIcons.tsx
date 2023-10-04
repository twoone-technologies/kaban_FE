import { ReactNode } from 'react';
import Svg from '../Svg';

const plural = (num: number | undefined) => {
  if (num === 0) return 'nil';
  if (num === 1) return num;
  return num;
};

type IconProps = {
  title: string;
  icon: string;
  num?: number | undefined;
  value?: string | ReactNode;
} & React.ComponentProps<'div'>

export default function CardIcons({
  title,
  num,
  icon,
  value,
  className
}: IconProps) {
  return (
    <>
      {num === 0 ? null : (
        <div title={title} className="flex s-gap align-y">
          <Svg href={icon} width='1rem' height='1.5rem' className={className} />
          <small>
            {plural(num)}
            {value}
          </small>
        </div>
      )}
    </>
  );
}
