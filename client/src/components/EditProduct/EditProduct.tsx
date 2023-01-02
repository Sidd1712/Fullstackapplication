import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductById, updateProduct } from "../../store/Productsapi";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  BrandLogo,
  BrandTitle,
  Inputs,
  StyledLabels,
  StyledInput,
  StyledButton,
} from "./EditProduct.styles";

export type EditProductFormValues = {
  name: string;
  price: string;
  image: string;
  seller: string;
  id: string;
  desc: string;
  sellerId: number;
  productHref: string;
};

const resolver: Resolver<EditProductFormValues> = async (values) => {
  return { values: values, errors: {} };
};
const EditProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const params = useParams<{ id: string }>();

  console.log("params", params);

  useEffect(() => {
    if (params.id) {
      dispatch(getProductById(params.id));
    }
  }, []);

  const product = useSelector((state: RootState) => state.products.product);
  const user = useSelector((state: RootState) => state.user.userInfo);
  console.log("productß", product);

  const { register, handleSubmit } = useForm<EditProductFormValues>({
    resolver,
  });
  const onSubmit = handleSubmit((data) =>
    dispatch(
      updateProduct({
        ...data,
      })
    )
  );
  return (
    <Container>
      <BrandLogo></BrandLogo>
      <BrandTitle>Edit Product</BrandTitle>

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
            Update
          </StyledButton>
        </form>
      </Inputs>
    </Container>
  );
};
export default EditProduct;
