import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../store/usersapi";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BrandLogo,
  BrandTitle,
  Inputs,
  StyledLabels,
  StyledInput,
  StyledButton,
} from "./Login.styles";

export type LoginFormValues = {
  email: string;
  password: string;
};

const resolver: Resolver<LoginFormValues> = async (values) => {
  return {
    values: values.email && values.password ? values : {},
    errors:
      !values.email || !values.password
        ? {
            email: {
              type: "required",
              message: "This is required.",
            },
            password: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
  };
};

const Login = () => {
  const authenticated = useSelector(
    (state: RootState) => state.user.authenticated
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver });
  // const submitForm = handleSubmit(email) => {
  //   dispatch(loginUser(email));
  // };
  const onSubmit = handleSubmit((data) => dispatch(loginUser(data)));

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return (
    <Container>
      <BrandLogo />
      <BrandTitle>Login</BrandTitle>
      <Inputs>
        <form onSubmit={onSubmit}>
          {/* {error && <Error>{error}</Error>} */}
          <div className="form-group">
            <StyledLabels htmlFor="email">Email</StyledLabels>
            <StyledInput
              type="email"
              className="form-input"
              {...register("email")}
              required
            />
          </div>
          <div className="form-group">
            <StyledLabels htmlFor="password">Password</StyledLabels>
            <StyledInput
              type="password"
              className="form-input"
              {...register("password")}
              required
            />
          </div>
          <StyledButton type="submit" className="button">
            Login
          </StyledButton>
        </form>
      </Inputs>
    </Container>
  );
};
export default Login;
