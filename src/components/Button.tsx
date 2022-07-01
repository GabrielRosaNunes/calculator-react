import React from 'react'
import './Button.css'

interface ButtonProps {
    label: string,
    columnSize?: Number,
    onClick?: Function,
    backgroundColor?: string
}

export default function Button(props:ButtonProps) {
    const buttonStyle = {
        gridColumn: 'span '+props.columnSize ?? '1',
        backgroundColor: props.backgroundColor ?? 'rgb(237, 235, 235)',
    }
    return (
        <button className="Button" style={buttonStyle} onClick={(e) => props?.onClick ? props?.onClick(props.label):''}>
            { props.label ?? '' }
        </button>
    )
}