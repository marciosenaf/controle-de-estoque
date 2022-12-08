// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
// import SalesForm from "../../components/product/salesForm/SalesForm";
// import { createSales, selectIsLoading } from "../../redux/features/sales/salesSlice";

// const initialState = {
//     name: "",
//     category: "",
//     quantity: "",
//     price: "",
// };

// const AddSales = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [product, setProduct] = useState(initialState);
//     const [productImage, setProductImage] = useState("");
//     const [imagePreview, setImagePreview] = useState(null);
//     const [description, setDescription] = useState("");

//     const isLoading = useSelector(selectIsLoading);

//     const { name, category, price, quantity } = product;

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         setProductImage(e.target.files[0]);
//         setImagePreview(URL.createObjectURL(e.target.files[0]));
//     };

//     const generateKSKU = (category) => {
//         const letter = category.slice(0, 3).toUpperCase();
//         const number = Date.now();
//         const sku = letter + "-" + number;
//         return sku;
//     };

//     const saveProduct = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("sku", generateKSKU(category));
//         formData.append("category", category);
//         formData.append("quantity", Number(quantity));
//         formData.append("price", price);
//         formData.append("description", description);
//         formData.append("image", productImage);

//         console.log(...formData);

//         await dispatch(createSales,(formData));

//         navigate("/sales");
//     };

//     return (
//         <div>
//             {isLoading && <Loader />}
//             <h3 className="--mt"></h3>
//             <SalesForm
//                 product={product}
//                 productImage={productImage}
//                 imagePreview={imagePreview}
//                 description={description}
//                 setDescription={setDescription}
//                 handleInputChange={handleInputChange}
//                 handleImageChange={handleImageChange}
//                 saveProduct={saveProduct}
//             />
//         </div>
//     );
// };

// export default AddSales;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import SalesForm from "../../components/sales/salesForm/SalesForm";
import {
    createProduct,
    selectIsLoading,
} from "../../redux/features/sales/salesSlice";

const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
};

const AddSales = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(initialState);
    const [productImage, setProductImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");

    const isLoading = useSelector(selectIsLoading);

    const { name, category, price, quantity } = product;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    const generateKSKU = (category) => {
        const letter = category.slice(0, 3).toUpperCase();
        const number = Date.now();
        const sku = letter + "-" + number;
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
        formData.append("description", description);
        formData.append("image", productImage);

        console.log(...formData);

        await dispatch(createProduct(formData));

        navigate("/sales");
    };

    return (
        <div>
            {isLoading && <Loader />}
            <h3 className="--mt"></h3>
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