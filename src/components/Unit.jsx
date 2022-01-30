import { useState } from 'react';
let convert = require("convert-units");

const Unit = ({ number, setNumber }) => {
    const [inputUnit, setInputUnit] = useState('');
    const centimeters = 'cm';
    const meters = 'm';
    const millimeters = 'mm';
    const inches = 'in';
    const feet = 'ft';
    const miles = 'mi';

    // let inputUnit = 'cm';

    return (
        <div className="conversion">
            <div className="box-div">
                <input type="number" placeholder={!number ? "Centimeters: "
                    : `${convert(number).from(inputUnit).to('cm')}cm` }
                       className="box" onChange={event =>
                {setNumber(event.target.value)
                    setInputUnit('cm')}}/>
            </div>
            <div className="box-div">
                <input type="number"
                       onChange={event =>
                       {setNumber(event.target.value)
                           setInputUnit('m')}}
                placeholder={!number ? "Meters: "
                : `${convert(number).from(inputUnit).to('m')}m`}
                       className="box"/>
            </div>
            <div className="box-div">
                <input type="number" placeholder={!number ? "Millimeters: "
                    : `${convert(number).from(`${inputUnit}`).to('mm')}mm`}
                       className="box" onChange={event =>
                {setNumber(event.target.value)
                    setInputUnit('mm')}}/>
            </div>
            <div className="box-div">
                <input type="number" placeholder={!number ? "Inches: "
                    : `${convert(number).from(`${inputUnit}`).to('in')}in`}
                       className="box" onChange={event =>
                {setNumber(event.target.value)
                    setInputUnit('in')}}/>
            </div>
            <div className="box-div">
                <input type="number" placeholder={!number ? "Feet"
                    : `${convert(number).from(`${inputUnit}`).to('ft')}ft`}
                       className="box" onChange={event =>
                {setNumber(event.target.value)
                    setInputUnit('ft')}}/>
            </div>
            <div className="box-div">
                <input type="number" placeholder={!number ? "Miles"
                    : `${convert(number).from(`${inputUnit}`).to('mi')}mi`}
                       className="box" onChange={event =>
                {setNumber(event.target.value)
                    setInputUnit('mo')}}/>
            </div>
        </div>
    )
}

export default Unit;