import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../store/usersapi";
import { useNavigate } from "react-router-dom";

export type FormValues = {
  email: string;
  password: string
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
  const authenticated  = useSelector((state: RootState) => state.user.authenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  
  const onSubmit = handleSubmit((data) => dispatch(loginUser(data)));

   useEffect(() => {
    if (authenticated) {
       navigate("/");
     }
   }, [navigate, authenticated]);

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
         {...register("password")}
          required
        />
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};
export default Login;
