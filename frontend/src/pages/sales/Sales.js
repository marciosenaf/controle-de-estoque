import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SalesList from "../../components/product/salesList/SalesList";
import SalesForm from "../addProduct/AddSales"
import SalesSummary from "../../components/product/salesSummary/SalesSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getSaless } from "../../redux/features/sales/salesSlice";

const Sales = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getSaless());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <SalesSummary products={products} />
      <SalesForm/>
      <SalesList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Sales;
