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
                    name="quantity"
                    value={product?.quantity}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
                    type="number"
                    placeholder="Total"
                    name="total"
                    value={product?.total}
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
                    {/* <Select
                        value={product?.method}
                        className="custom-border"
                        name="method"
                        options={suppliers}
                    /> */}
                </div>
                <input
                    className="asd"
                    type="text"
                    placeholder="Received Payment"
                    name="payment"
                    value={product?.payment}
                    onChange={handleInputChange}
                />

                <input
                    className="asd"
                    type="number"
                    placeholder="Thing"
                    name="thing"
                    value={product?.thing}
                    onChange={handleInputChange}
                />
                <input
                    className="asd"
                    type="text"
                    placeholder="Note"
                    name="note"
                    value={product?.note}
                    onChange={handleInputChange}
                />
                <button type="submit" className="--btn --btns-primary-sales">Save Product</button>

            </form>
        </div>

    );
};


export default SalesForm;
