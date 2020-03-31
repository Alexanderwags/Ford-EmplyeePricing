import React from 'react'
import './styles.scss'
import useSignUpForm from '../CustomHooks'
const searchHome = () => {
     const signup = () => {
       alert(`User Created!
         Name: ${inputs.password1}`);
     };
     const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

    return (
      <form className="search" onSubmit={handleSubmit}>
        <h6>Enter your promo code to claim your voucher</h6>
        <label name=""></label>
        <input
          type="text"
          placeholder="****"
          required
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
        ></input>
        <button type="submit" className="btnh">
          Sign Up
        </button>
      </form>
    );
}
export default searchHome
