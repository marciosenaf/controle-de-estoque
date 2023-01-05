import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import SalesForm from "../../components/sales/salesForm/SalesForm";
import {
    createSale,
    selectIsLoading,
} from "../../redux/features/sales/salesSlice";

const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
    total: "",
    method:"",
    payment: "",
    thing: "",
    note: "",

};

const AddSales = () => {
    useRedirectLoggedOutUser("/login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(initialState);
    const [productImage, setProductImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");

    const isLoading = useSelector(selectIsLoading);

    const { name, category, price, quantity, total, payment, method , thing, note } = product;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    const generateKSKU = () => {
        const number = Date.now();
        const sku = number;
        return sku;
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("sku", generateKSKU(category));
        formData.append("category", category);
        formData.append("quantity", Number(quantity));
        formData.append("price", price);
        formData.append("total", total);
        formData.append("method", method);
        formData.append("payment", payment);
        formData.append("thing", thing);
        formData.append("note", note);

        formData.append("image", productImage);

        console.log(...formData);

        await dispatch(createSale(formData));

        navigate("/sales");
    };

    return (
        <div>
            <hr/>
                {isLoading && <Loader />}
                <h4 className="--mt">Add Sales</h4>
                <SalesForm
                    product={product}
                    productImage={productImage}
                    imagePreview={imagePreview}
                    description={description}
                    setDescription={setDescription}
                    handleInputChange={handleInputChange}
                    handleImageChange={handleImageChange}
                    saveProduct={saveProduct}
                />
            </div>
            );
};

            export default AddSales;
