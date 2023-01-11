import { useForm, Resolver } from "react-hook-form";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const customId = "custom-toast-id";
  const navigate = useNavigate();

  const params = useParams<{ id: string }>();

  console.log("params", params);

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const result = await dispatch(getProductById(params.id));
        if (getProductById.rejected.match(result)) {
          toast.error(
            "Sorry, something went wrong with finding this product.",
            {
              position: "top-center",
              toastId: customId,
            }
          );
        }
      }
    };

    fetchData();
  }, [params.id]);

  const product = useSelector((state: RootState) => state.products.product);
  const user = useSelector((state: RootState) => state.user.userInfo);
  console.log("productß", product);

  const { register, handleSubmit } = useForm<EditProductFormValues>({
    defaultValues: {
      name: product.name,
      price: product.price,
      image: product.image,
      desc: product.desc,
    },
    resolver,
  });

  const sendUpdate = async (data: EditProductFormValues) => {
    const result = await dispatch(
      updateProduct({
        ...data,
        id: product.id,
      })
    );
    if (updateProduct.rejected.match(result)) {
      toast.error("Sorry, something went wrong updating this product.", {
        toastId: customId,
        position: "top-center",
      });
    } else {
      navigate("/");
    }
  };

  const onSubmit = handleSubmit((data) => {
    sendUpdate(data);
  });
  return (
    <Container>
      <ToastContainer />
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
