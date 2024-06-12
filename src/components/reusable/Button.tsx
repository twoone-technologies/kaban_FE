import { ReactNode } from 'react';
import '~/styles/main.css';

type Props = {
  children: ReactNode;
  loading?: boolean;
} & React.ComponentProps<'button'>;

export default function Button({ className, loading, ...props }: Props) {
  const child = loading ? <ThreeDots /> : props.children;
  return (
    <button className={`btn ${className}`} {...props}>
      {child}
    </button>
  );
}

export function ThreeDots({className}: {className?: string}) {
  return (
    <span className={`flex place-content-center gap-1 ${className}`}>
      <span className="size-2 rounded-full bg-blue-800 animate-bounce"></span>
      <span className="size-2 rounded-full bg-blue-800 animate-[bounce_1s_ease-in-out_0.2s_infinite]"></span>
      <span className="size-2 rounded-full bg-blue-800 animate-[bounce_1s_ease-in-out_0.4s_infinite]"></span>
    </span>
  );
}
