import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productApiSlice";
import { productSelectors } from "../features/products/productSlice";

const ShowProducts = () => {
  const dispatch = useDispatch();

  // untuk memanggil state yang telah kita buat di store itu menggunakan useSelector
  const products = useSelector(productSelectors.selectAll);
  // console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // const onClickBtnHandler = () => {
  //   dispatch(getAllProducts());
  // };

  return (
    <div>
      <h1 className="font-semibold text-2xl">List Products</h1>
      <hr className="my-5" />
      {/* <button onClick={onClickBtnHandler}>click me 1</button> */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
