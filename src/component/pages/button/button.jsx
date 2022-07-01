import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supportUs } from "../../Redux/support-redux/support-action";

const Button = () => {
  const value = useSelector((state) => state.combine.supportReducer);
  const dispatch = useDispatch();
  const [money, setMoney] = useState(0);
  const supportna = (support)=>{
    // console.log(support);
    if(money>0 || Number(money))
    {
      dispatch(supportUs(support));
      setMoney(0);
    }
    else
    {
      alert('enter valid number')
    }
  }

  return (
    <div className="w-50 mx-auto " >
      <h3 className="text-center fs-5 text-danger mb-5"> Support Using React Redux</h3>
     <h2 className="text-center">💵{value} $💵</h2>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="floatingInput"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <label htmlFor="floatingInput">Support Us</label>
      </div>
      <div className="text-center">

      <button
        className="btn btn-success "
        onClick={() =>supportna(Number(money)||0) }
      >
        Support Us
      </button>
      </div>
    </div>
  );
};

export default Button;
