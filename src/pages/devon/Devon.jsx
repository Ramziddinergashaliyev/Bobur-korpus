import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import "./devon.scss";
import { NavLink } from "react-router-dom";

const Devon = () => {
  const { data: products } = useGetProductsQuery();
  console.log(products);

  const productData = products?.map((el) => (
    <div className="devan__card">
      <div className="devan__card__img">
        <img src={el?.image} alt="" />
      </div>
      <div className="devan__card__info">
        <p className="devan__card__info-text">{el.name}</p>
      </div>
      <NavLink key={el.id} to={`/single/${el?.id}`}>
        <button className="devan__card__btn">Batafsil</button>
      </NavLink>
    </div>
  ));

  return (
    <div className="devan">
      <div className="devan__cards container">{productData}</div>
    </div>
  );
};

export default Devon;
