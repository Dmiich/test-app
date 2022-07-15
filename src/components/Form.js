import React, { useState, useEffect } from "react";
import App from "../App";
import FormGeneration from "./FormGeneration";

export default function Form({ id }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isBack, setIsBack] = useState(false)

    const [data, setData] = useState({})

    useEffect(() => {
        const url = `http://51.13.81.147:8083/api/v1/document/${id}`;
        fetch(url, {
            method: "GET",
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "API-KEY": "secret-api-key"
            }
        })
            .then(resp => resp.json())
            .then(function (data) {

                setData(data)
                setIsLoading(false)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    function handleBack() {
        setIsBack(true)
        console.log('You clicked handleBack.');
    }


    return (
        <div className="App">{
            isBack ? <App /> :
                isLoading ? <div>Loading...</div> :
                    <div className="container">
                        <div className="title">
                            <p>{data.document_name}</p>
                        </div>
                        <div className="inputBox">
                            {data.fields.map((item, index) => {
                                return (
                                    <FormGeneration key={index} seq={item.field_seq} type={item.select_values} name={item.field_name} />

                                )
                            })}
                            <div className="buttonBack">
                                <button onClick={handleBack}>Atpakaļ</button>
                            </div>
                        </div>
                    </div>
        }
        </div>
    )
}
