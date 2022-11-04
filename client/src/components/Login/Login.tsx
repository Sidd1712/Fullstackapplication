import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../Store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../Store/usersapi";
import { useNavigate } from "react-router-dom";

export type FormValue = { email: string };
const resolver: Resolver<FormValue> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? { email: { type: "required", message: "This is required." } }
      : {},
  };
};

const Login = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<FormValue>({ resolver });
  const onSubmit = handleSubmit((data) => dispatch(loginUser(data)));

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" required {...register("email")} />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <button type="submit">Login </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
