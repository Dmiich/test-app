import React, { useState } from "react";
import FormGeneration from './FormGeneration'

export default function FormInput() {

    const [inputList, setInputList] = useState([<FormGeneration type={[{ label: 'Piekrtu' }, { label: 'Neiekrtu' }]} />]);

    const Input = () => {
        return <FormGeneration type={[{ label: 'Piekrtu' }, { label: 'Neiekrtu' }]} />

    };

    const onAddBtnClick = event => {
        console.log('ff')
        setInputList(inputList.concat(<Input key={inputList.length} />));
    };




    async function handleOnSubmit(data = {}) {
        //! post
        // Default options are marked with *
        // fetch("http://51.13.81.147:8083/api/v1/documents/create", {

        //     // Adding method type
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         "API-KEY": "secret-api-key"
        //     },

        //     // Adding body or contents to send
        //     body: data,

        // })

        //     // Converting to JSON
        //     .then(response => response.json())

        //     // Displaying results to console
        //     .then(json => console.log(json));


    }



    return (
        <div className="App">
            <div className="boxTwo">
                <div className="boxInputSection">
                    {inputList}
                    <div className="checkboxSection">
                        <div className="leftSide">
                        </div>
                        <div className="rightSide">
                            <div className="checkboxRow">
                                <input type="checkbox" name="name" placeholder="input" />
                                <p>Obligāti</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div>
                    <button onClick={onAddBtnClick}>Add input</button>

                </div>
                <hr />
                <div>
                    <button onClick={handleOnSubmit} className="saveButton">Saglabāt</button>

                </div>
            </div>
        </div >
    )
}
