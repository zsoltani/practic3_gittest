import React, { useState } from 'react'

const Form = ({onSubmitHandler}) => {
    const [costObject , setCostObject] = useState({name : "" , price : 0});

    let setCostName = (e) =>{
        setCostObject({...costObject , name : e.target.value});
    }
    let setCostPrice = (e) =>{
        setCostObject({...costObject , price : e.target.value});
    }
    let add = (e) => {
        e.preventDefault();
        onSubmitHandler(costObject);
    }

  return (
    <form onSubmit={add}>
        <button>ثبت هزینه</button>
        <input type="text" onChange={setCostPrice} placeholder='مبلغ هزینه'/>
        <input type="text" onChange={setCostName} placeholder='شرح هزینه '/>
        
    </form>
  )
}

export default Form