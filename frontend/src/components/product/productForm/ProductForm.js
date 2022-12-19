import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ProductForm.scss";

const ProductForm = ({
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
            <form onSubmit={saveProduct}>
                <div className="inputs">
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

                    <button type="submit" className="--btn --btns-primary-products">
                        Save Product
                    </button>
                </div>

                <div className="editor">
                    <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        modules={ProductForm.modules}
                        formats={ProductForm.formats}
                    />
                </div>

                
                <div className="imagefile">
                <p>
                <label className="image"  for="image" >Select Image</label>
                <input type="file" name="image" id="image" onChange={(e) => handleImageChange(e)}/>
                </p>
                {imagePreview != null ? (
                    <div className="image-preview">
                        <img src={imagePreview} alt="product" />
                    </div>
                ) : (
                    <p className="noimage">Supported Formats: PNG, JPEG and JPG</p>
                )}
                </div>

            </form>

        </div>
    );
};

ProductForm.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["clean"],
    ],
};
ProductForm.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
];

export default ProductForm;
