import React, { useState, useEffect } from "react";
import Form from "./Form";
import FormInput from "./FormInput";
export default function Table() {

    const [data, setData] = useState([])
    const [isForm, setIsForm] = useState(false)
    const [isFormGeneration, setIsFormGeneration] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [formId, setFormId] = useState(-1)

    useEffect(() => {
        const url = "http://51.13.81.147:8083/api/v1/documents";
        fetch(url, {
            method: "GET",
            withCredentials: true,
            headers: {
                "API-KEY": "secret-api-key",

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

    function handleOpen(id) {
        setFormId(id)
        setIsForm(true)
        console.log('You clicked open.');
    }

    function handleFormGeneration(id) {
        // setFormId(id)
        setIsFormGeneration(true)
        console.log('You clicked handleFormGeneration.');
    }

    return (

        <div className="App">{
            isLoading ? <div>Loading...</div> :
                <div>

                    {
                        isFormGeneration ? <FormInput /> :
                            isForm ? <Form id={formId} />
                                :
                                <div>
                                    <div className='createNewButtonWrapper'>
                                        <div className='createNewButton'>
                                            <button onClick={handleFormGeneration}>zveidot jaunu dokumentu formu</button>
                                        </div>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <th>Dokumenta nosaukums</th>
                                                <th>Izveidošanas datums</th>
                                                <th>Dokumenta lielums</th>
                                                <th></th>
                                            </tr>

                                            {data.map(item => {
                                                return (

                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.document_name}</td>
                                                        <td>{item.created_at}</td>
                                                        <td>{item.field_count}</td>
                                                        <td onClick={() => handleOpen(item.id)}>Atvērt priekšskatu </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                    }
                </div>
        }
        </div>
    )

}
