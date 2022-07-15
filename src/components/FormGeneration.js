import React from 'react'

export default function FormGeneration(prop) { //{ seq, type, name } 
    return (
        <div key={prop.key}>
            <div className="one">

                <label>
                    Label:
                    <input type="text" name="name" placeholder="input" value={prop?.name && prop.name} />
                </label>

            </div>
            <div className="two">
                <p>Label</p>
                <select>

                    {prop?.type.map((item) => {
                        return (
                            <option value={item}>{item.label}</option>

                        )
                    })}
                </select>
            </div>
            <div className="three">

                <label>
                    Label:
                    <input type="number" name="seq" placeholder="number input" value={prop?.seq && prop.seq} />
                </label>

            </div>
        </div>
    )
}
