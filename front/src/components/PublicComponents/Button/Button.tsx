"use cliemt"
import React from "react"

export interface ButtonProps {
    children: React.ReactNode
    disable: boolean
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({children, disable}) => {
    return (
        <button disabled={disable}>
            {children}
        </button>
    )
}