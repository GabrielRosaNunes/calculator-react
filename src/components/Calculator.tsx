import Button from "./Button"
import './Calculator.css'
import Display from "./Display"

export default function Calculator() {
    return (
        <div className="Calculator">
            <Display label="0"></Display>
            <Button label="CE" columnSize={3}></Button>
            <Button label="%"></Button>
            <Button label="7"></Button>
            <Button label="8"></Button>
            <Button label="9"></Button>
            <Button label="X"></Button>
            <Button label="4"></Button>
            <Button label="5"></Button>
            <Button label="6"></Button>
            <Button label="-"></Button>
            <Button label="1"></Button>
            <Button label="2"></Button>
            <Button label="3"></Button>
            <Button label="+"></Button>
            <Button label="0" columnSize={2}></Button>
            <Button label=","></Button>
            <Button label="="></Button>

        </div>
    )
}