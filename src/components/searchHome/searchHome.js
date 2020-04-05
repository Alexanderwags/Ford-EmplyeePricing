import React, { useState } from "react";
import './styles.scss'
import { Redirect } from "react-router";

import useSignUpForm from '../CustomHooks'
const searchHome = () => {
    const [code, setCode] = useState("")
    const [Loading, setLoading] = useState(false)
    if (Loading) {
      return <Redirect to={`${window.location.pathname}Step1`} />;
    }
    return (
      <form
        className="search"
        onSubmit={e => {
          e.preventDefault();
          setLoading(true);
          console.log(Loading)
         
        }}
      >
        <h6>Enter your promo code to claim your voucher</h6>

        <input
          type="text"
          placeholder="****"
          required
          name="code"
          onChange={e => setCode(e.target.value)}
          value={code}
        ></input>
        <button type="submit" className="btnh">
          Sign Up
        </button>
      </form>
    );
}
export default searchHome
