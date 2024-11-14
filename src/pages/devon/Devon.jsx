import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import "./devon.scss";
import { NavLink } from "react-router-dom";
import Search from "../../components/search/Search";

const Devon = () => {
  const { data: products } = useGetProductsQuery();
  console.log(products);
  const productData = products?.map((el) => (
    <div key={el.id} className="devan__card">
      <div className="devan__card__img">
        <img src={el?.image_url} alt="" />
      </div>
      <div className="devan__card__info">
        <p className="devan__card__info-text">{el.name}</p>
      </div>
      <NavLink to={`/single/${el?.id}`}>
        <button className="devan__card__btn">Batafsil</button>
      </NavLink>
    </div>
  ));

  return (
    <div className="devan">
      {/* <div style={{ paddingTop: "100px" }}>
        <Search />
      </div> */}
      <div className="devan__cards container">{productData}</div>
    </div>
  );
};

export default Devon;
