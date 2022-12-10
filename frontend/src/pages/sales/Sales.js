import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SalesList from "../../components/sales/salesList/SalesList";
import SalesSummary from "../../components/sales/salesSummary/SalesSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProducts } from "../../redux/features/sales/salesSlice";
import AddSales from "../add/AddSales";

const Sales = () => { 
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  
  return (
    <div>
      <SalesSummary products={products} />
      <AddSales/>
      <SalesList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Sales;
