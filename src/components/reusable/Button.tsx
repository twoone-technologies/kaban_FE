import { ReactNode } from "react";
import "~/styles/main.css";

type Props = {
  className: string,
  children: ReactNode,
} & React.ComponentProps<'button'>

export default function Button({className, children, ...buttonProps}: Props) {
  return (
    <button className={`btn ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}