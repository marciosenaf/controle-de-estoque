// import React from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import Card from "../../card/Card";
// import "./SalesForm.scss";

// const SalesForm = ({
//     product,
//     productImage,
//     imagePreview,
//     description,
//     setDescription,
//     handleInputChange,
//     handleImageChange,
//     saveProduct,
// }) => {
//     return (
//         <div className="add-product">
//             <Card cardClass={"card"}>
//                 <form onSubmit={saveProduct}>
//                     <Card cardClass={"group"}>
//                         <label>Product Image</label>
//                         <code className="--color-dark">
//                             Supported Formats: jpg, jpeg, png
//                         </code>
//                         <input
//                             type="file"
//                             name="image"
//                             onChange={(e) => handleImageChange(e)}
//                         />

//                         {imagePreview != null ? (
//                             <div className="image-preview">
//                                 <img src={imagePreview} alt="product" />
//                             </div>
//                         ) : (
//                             <p className="noimage">No image set for this poduct.</p>
//                         )}
//                     </Card>
//                     <label>Product Name:</label>
//                     <input
//                         type="text"
//                         placeholder="Product name"
//                         name="name"
//                         value={product?.name}
//                         onChange={handleInputChange}
//                     />

//                     <label>Product Category:</label>
//                     <input
//                         type="text"
//                         placeholder="Product Category"
//                         name="category"
//                         value={product?.category}
//                         onChange={handleInputChange}
//                     />

//                     <label>Product Price:</label>
//                     <input
//                         type="number"
//                         placeholder="Product Price"
//                         name="price"
//                         value={product?.price}
//                         onChange={handleInputChange}
//                     />

//                     <label>Product Quantity:</label>
//                     <input
//                         type="number"
//                         placeholder="Product Quantity"
//                         name="quantity"
//                         value={product?.quantity}
//                         onChange={handleInputChange}
//                     />

//                     <label>Product Description:</label>
//                     <div className="editor">
//                         <ReactQuill
//                             theme="snow"
//                             value={description}
//                             onChange={setDescription}
//                             modules={SalesForm.modules}
//                             formats={SalesForm.formats}
//                         />
//                     </div>
//                     <div className="--my">
//                         <button type="submit" className="--btn --btns-primary">
//                             Save Product
//                         </button>
//                     </div>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// SalesForm.modules = {
//     toolbar: [
//         [{ header: "1" }, { header: "2" }, { font: [] }],
//         [{ size: [] }],
//         ["bold", "italic", "underline", "strike", "blockquote"],
//         [{ align: [] }],
//         [{ color: [] }, { background: [] }],
//         [
//             { list: "ordered" },
//             { list: "bullet" },
//             { indent: "-1" },
//             { indent: "+1" },
//         ],
//         ["clean"],
//     ],
// };
// SalesForm.formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "color",
//     "background",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "video",
//     "image",
//     "code-block",
//     "align",
// ];

// export default SalesForm;










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
        <div className="add-sales">
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
                        name="Quantity"
                        value={product?.quantity}
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
                        type="text"
                        placeholder="Note"
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
                        placeholder="Received Payment"
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
                    <button type="submit" className="--btn --btns-primary-sales">
                        Save Product
                    </button>
                </form>
        </div>
    );
};


export default SalesForm;
