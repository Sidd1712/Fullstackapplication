import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "../../store/Productsapi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BrandLogo,
  BrandTitle,
  Inputs,
  StyledLabels,
  StyledInput,
  StyledButton,
} from "./CreateProduct.styles";
import { send } from "process";

export type CreateProductFormValues = {
  name: string;
  price: string;
  image: string;
  seller: string;
  productId: string;
  desc: string;
  sellerId: string;
};

const resolver: Resolver<CreateProductFormValues> = async (values) => {
  return {
    values: values.name && values.price ? values : {},
    errors:
      !values.name || !values.price
        ? {
            name: {
              type: "required",
              message: "This is required.",
            },
            price: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
  };
};

const CreateProduct = () => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useAppDispatch();
  const customId = "custom-toast-id";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductFormValues>({ resolver });

  const sendProduct = async (data: CreateProductFormValues) => {
    const result = await dispatch(
      addProduct({
        ...data,
        seller: userInfo.username,
        sellerId: userInfo.userId,
      })
    );
    if (addProduct.rejected.match(result)) {
      toast.error("Sorry, something went wrong adding this product.", {
        toastId: customId,
        position: "top-center",
      });
    } else {
      navigate("/");
    }
  };

  const onSubmit = handleSubmit((data) => sendProduct(data));
  return (
    <Container>
      <ToastContainer />
      <BrandLogo></BrandLogo>
      <BrandTitle>CreateProduct</BrandTitle>

      <Inputs>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <StyledLabels htmlFor="name">name</StyledLabels>

            <StyledInput
              type="text"
              className="form-input"
              {...register("name")}
              required
            ></StyledInput>
          </div>

          <div className="form-group">
            <StyledLabels htmlFor="price">price</StyledLabels>

            <StyledInput
              type="text"
              className="form-input"
              {...register("price")}
              required
            ></StyledInput>
          </div>

          <div className="form-group">
            <StyledLabels htmlFor="image">image</StyledLabels>

            <StyledInput
              type="text"
              className="form-input"
              {...register("image")}
              required
            ></StyledInput>
          </div>

          <div className="form-group">
            <StyledLabels htmlFor="desc">description</StyledLabels>

            <StyledInput
              type="text"
              className="form-input"
              {...register("desc")}
              required
            ></StyledInput>
          </div>

          <StyledButton type="submit" className="button">
            Submit
          </StyledButton>
        </form>
      </Inputs>
    </Container>
  );
};
export default CreateProduct;
