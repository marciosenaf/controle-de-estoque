import React from "react";
import "react-quill/dist/quill.snow.css";
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
        <div className="add-sales">
            <form className="add-sales" onSubmit={saveProduct}>
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
                    name="Quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Total"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Amount Paid"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Received Payment"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Thing"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Note"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <button type="submit" className="--btn --btns-primary-sales">Save Product</button>

            </form>
        </div>

    );
};


export default SalesForm;
