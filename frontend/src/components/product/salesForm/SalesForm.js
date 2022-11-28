import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./SalesForm.scss";

const SalesForm = ({
    product,
    productImage,
    imagePreview,
    description,
    setDescription,
    handleInputChange,
    handleImageChange,
    saveProduct,
}) => {
    return (
        <div className="add-product">
            <Card cardClass={"group"}>
                <form onSubmit={saveProduct}>
                    <input
                        type="text"
                        placeholder="Product name"
                        name="name"
                        value={product?.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Product Category"
                        name="category"
                        value={product?.category}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        placeholder="Product Price"
                        name="price"
                        value={product?.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        placeholder="Product Quantity"
                        name="quantity"
                        value={product?.quantity}
                        onChange={handleInputChange}
                    />

                    <div className="--my">
                        <button type="submit" className="--btn --btns-primary">
                            Save Product
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};


export default SalesForm;
