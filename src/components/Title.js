import React, {useState, useEffect} from 'react';

export default function Title(){

const [title] =  useState('Original');
const [inputVal, updateInput] = useState('')
const [list, updateList] = useState([])

useEffect(
    () => {
        console.log('effect happened')
    },  [list, inputVal]
)

    return(
        <div>
            <h3>{title}</h3>
            
            <input type="text" value={inputVal} onChange={e=>updateInput(e.target.value)}></input>

            <button onClick={()=>{

                updateList([...list, inputVal])
                updateInput('')
                }}>Change title</button>

            {
                list.map((item, index) =>  <div key={index}>{item}</div>)
            }

        </div>
    )
}