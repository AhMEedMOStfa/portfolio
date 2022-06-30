import React, { useState } from "react";
const Button = ({supportna,Support}) => {
  const [money , setMoney] = useState(0);

  const submitMoney = (e)=>{
    e.preventDefault();
    if(money>=0)
    {
      supportna(money);
    }
    else
    {
      alert('plz support us')
    }
  }

  return (
    <div className="w-25 ms-auto">
        <form className="form-floating mb-3" onSubmit={submitMoney}>
        <input type="text" className="form-control mb-4" id="floatingInput" placeholder="name@example.com"
         name="money" value={money} onChange={(e) => setMoney(e.target.value)}/>
        <label htmlFor="floatingInput">Support Us $</label>
        <button className="btn mx-3 btn-primary" type="submit">{Support}</button>
       </form>
    </div>
  )
}

export default Button