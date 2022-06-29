import './Button.css'

interface ButtonProps {
    label: String,
    columnSize?: Number
}

export default function Button(props:ButtonProps) {
    const buttonStyle = {
        gridColumn: 'span '+props.columnSize ?? '1'
    }
    return (
        <button className="Button" style={buttonStyle}>
            { props.label ?? '' }
        </button>
    )
}