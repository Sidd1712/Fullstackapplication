import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../store/usersApi";
import { useNavigate } from "react-router-dom";

export type FormValues = {
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const Login = () => {
  const { loading, userInfo } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  // const submitForm = handleSubmit(email) => {
  //   dispatch(loginUser(email));
  // };
  const onSubmit = handleSubmit((data) => dispatch(loginUser(data)));

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/user-profile");
  //   }
  // }, [navigate, userInfo]);

  return (
    <form onSubmit={onSubmit}>
      {/* {error && <Error>{error}</Error>} */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-input"
          {...register("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          // {...register("password")}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        Login
      </button>
    </form>
  );
};
export default Login;
