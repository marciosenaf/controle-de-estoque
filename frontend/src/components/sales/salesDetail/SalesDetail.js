import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getSale } from "../../../redux/features/sales/salesSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./SalesDetail.scss";
import DOMPurify from "dompurify";

const SalesDetail = () => {
    useRedirectLoggedOutUser("/login");
    const dispatch = useDispatch();

    const { id } = useParams();

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { product, isLoading, isError, message } = useSelector(
        (state) => state.product
    );

    const stockStatus = (quantity) => {
        if (quantity > 0) {
            return <span className="--color-success">In Stock</span>;
        }
        return <span className="--color-danger">Out Of Stock</span>;
    };

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(getSale(id));
        }

        if (isError) {
            console.log(message);
        }
    }, [isLoggedIn, isError, message, dispatch]);

    return (
        <div className="product-detail">
            <h3 className="--mt"></h3>
            <Card cardClass="card">
                {isLoading && <SpinnerImg />}
                {product && (
                    <div className="detail">
                        <Card cardClass="group">
                            {product?.image ? (
                                <img
                                    src={product.image.filePath}
                                    alt={product.image.fileName}
                                />
                            ) : (
                                <p className="--color-white">No image set for this product</p>
                            )}
                        </Card>
                        <hr />
                        <h4 className="--color-white">
                            <span className="badge">Name:</span> &nbsp; {product.name}
                        </h4>
                        <p className="--color-dark">
                            <b className="--color-white" >&rarr; Id : </b> {product.id}
                        </p>
                        <p className="--color-dark">
                            <b className="--color-white">&rarr; Category : </b> {product.category}
                        </p>
                        <p className="--color-dark">
                            <b className="--color-white" >&rarr; Price : </b> {"$"}
                            {product.price}
                        </p>
                        <p className="--color-dark">
                            <b className="--color-white">&rarr; Quantity in stock : </b> {product.quantity}
                        </p>
                        <p className="--color-dark">
                            <b className="--color-white">&rarr; Total Value in stock : </b> {"$"}
                            {product.price * product.quantity}
                        </p>
                        <hr />
                        <div className="color"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(product.description),
                            }}
                        ></div>
                        <hr />
                        <code className="--color-white ">
                            Created on: {product.createdAt.toLocaleString("en-US")}
                        </code>
                        <br />
                        <code className="--color-white">
                            Last Updated: {product.updatedAt.toLocaleString("en-US")}
                        </code>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default SalesDetail;
