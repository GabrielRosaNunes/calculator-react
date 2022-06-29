import './Display.css'

interface DisplayProps {
    label:String
}
export default function Display(props:DisplayProps) {
    return (
        <div className="Display">
            {props.label}
        </div>
    )
}