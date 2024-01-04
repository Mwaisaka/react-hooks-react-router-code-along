import React from 'react';
import index from "./index.css";

function SignUpForm(){
    return (
      <div>
        <h3>Please enter below details to register.</h3>
        <form>
          <table>
          <tr><td>First Name: </td><td><input type="text" name=" "/></td></tr>
          <tr><td>Last Name: </td><td><input type="text" name=" "/></td></tr>
          <tr><td>Nationality: </td><td><input type="text" name=" "/></td></tr>
          <tr><td>Phone Number: </td><td><input type="number" name=" "/></td></tr>
            <tr><td>Email Address: </td><td><input type="text" placeholder="example@xxx.com "/></td></tr>
            <tr><td>Password: </td><td><input type="Password" name=" "/></td></tr>
            <tr><input type="submit" value="Register" /></tr>
          </table>
        </form>
      </div>
    );
  }

  export default SignUpForm;