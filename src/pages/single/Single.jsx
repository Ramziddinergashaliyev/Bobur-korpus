import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import "./single.scss";
import img from "../../assets/images/noma.webp";

const Single = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  console.log(data?.groups);

  let SingleData = data?.groups?.map((el) => (
    <div className="single__cards-item">
      <div className="single__cards-link">
        <img className="single__cards-img" src={img} alt="" />
        <NavLink
          to={`/group/${el?.id}`}
          className={"single__cards-content"}
          key={el?.id}
        >
          <button>{el?.name}</button>
        </NavLink>
      </div>
    </div>
  ));

  return (
    <div className="single">
      <div className="single__cards container">{SingleData}</div>
    </div>
  );
};

export default Single;
