import { ReactNode } from "react"



type ButtonProps = {
    children: ReactNode
    onClick?: () => void
    className?: string
    type?: 'submit' | 'reset' | 'button' | undefined;
}


const Button = ({
    children,
    onClick,
    className,
    type
}: ButtonProps) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button