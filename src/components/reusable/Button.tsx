import { ReactNode } from "react";
import "~/styles/main.css";

type Props = {
  children: ReactNode,
} & React.ComponentProps<'button'>

export default function Button({className, children, ...buttonProps}: Props) {
  return (
    <button className={`btn animate ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}