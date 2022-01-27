import { useState } from "react";

const Input = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <input className="input-stuff"
                   placeholder="Enter the number: "
                   type="number" onChange={event =>
                        setNumber(event.target.value)}
                />
        </div>
    )
}

export default Input;