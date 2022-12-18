import React from "react";
import "react-quill/dist/quill.snow.css";
import "./SalesForm.scss";
import Select from "react-select"

const suppliers = [
    { label: 'Pix', value: 'Pix' },
    { label: 'Cartão', value: 'Cartão' },
    { label: 'Dinheiro', value: 'Dinheiro' },
]

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
        <div className="add">
            <form className="add-sales" onSubmit={saveProduct}>
                <input
                    className="asd"
                    type="text"
                    placeholder="Product name"
                    name="name"
                    value={product?.name}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
                    type="text"
                    placeholder="Product Category"
                    name="category"
                    value={product?.category}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
                    type="number"
                    placeholder="Product Price"
                    name="price"
                    value={product?.price}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
                    type="number"
                    placeholder="Product Quantity"
                    name="Quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
                    type="number"
                    placeholder="Total"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                {/* <input
                    type="number"
                    placeholder="Amount Paid"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                /> */}
                <div className="suppliers-container">
                    <Select
                        className="custom-border"
                        options={suppliers}
                    />
                </div>
                <input
                    className="asd"
                    type="text"
                    placeholder="Received Payment"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />

                <input
                    className="asd"
                    type="number"
                    placeholder="Thing"
                    name="quantity"
                    // value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
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
