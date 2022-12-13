import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "../../store/Productsapi";
import { useNavigate } from "react-router-dom";
import { workerData } from "worker_threads";
import {
  Container,
  BrandLogo,
  BrandTitle,
  Inputs,
  StyledLabels,
  StyledInput,
  StyledButton,
} from "./CreateProduct.styles";

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

    return {values:values,errors:{}}
}
const CreateProduct = () => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<CreateProductFormValues>({
    resolver,
  });
  const onSubmit = handleSubmit((data) =>
    dispatch(
      addProduct({
        ...data,
        seller: userInfo.username,
        sellerId: userInfo.userId,
      })
    )
  );
  return (
    <Container>
      <BrandLogo></BrandLogo>
      <BrandTitle>CreateProduct</BrandTitle>

      <Inputs>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <StyledLabels htmlFor="name">name</StyledLabels>

            <StyledInput type = "text" className="form-input" {...register("name")} required></StyledInput>
          </div>

          <div className="form-group">
            <StyledLabels htmlFor="price">price</StyledLabels>

            <StyledInput type = "text" className="form-input" {...register("price")} required></StyledInput>
          </div>

          <div className="form-group">
            <StyledLabels htmlFor="image">image</StyledLabels>

            <StyledInput type = "text" className="form-input" {...register("image")} required></StyledInput>
          </div>

          <div className="form-group">
            <StyledLabels htmlFor="desc">description</StyledLabels>

            <StyledInput type = "text" className="form-input" {...register("desc")} required></StyledInput>
          </div>

          <StyledButton type = "submit" className="button">

            Submit
          </StyledButton>

        </form>
      </Inputs>
    </Container>
  );
};
export default CreateProduct;