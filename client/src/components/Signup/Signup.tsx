const Signup = () => {
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="fname" required />
          {/* {renderErrorMessage("fname")} */}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lname" required />
          {/* {renderErrorMessage("lname")} */}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />
          {/* {renderErrorMessage("email")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
export default Signup;
