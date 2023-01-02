import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { signupUser } from "../../store/usersapi";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BrandLogo,
  BrandTitle,
  Inputs,
  StyledLabels,
  StyledInput,
  StyledButton,
} from "./Signup.styles";

export type SignupFormValues = {
  email: string;
  password: string;
  username: string;
};

const resolver: Resolver<SignupFormValues> = async (values) => {
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
const Signup = () => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log("userInfo", userInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({ resolver });
  // const submitForm = handleSubmit(email) => {
  //   dispatch(loginUser(email));
  // };
  const onSubmit = handleSubmit((data) => dispatch(signupUser(data)));

  useEffect(() => {
    if (userInfo.userId !== "") {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <Container>
      <BrandLogo />
      <BrandTitle>Signup</BrandTitle>
      <Inputs>
        <form onSubmit={onSubmit}>
          {/* {error && <Error>{error}</Error>} */}
          <div className="form-group">
            <StyledLabels htmlFor="username">Username</StyledLabels>
            <StyledInput
              type="text"
              className="form-input"
              {...register("username")}
              required
            />
          </div>
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
            Sign up
          </StyledButton>
        </form>
      </Inputs>
    </Container>
  );
};
export default Signup;
