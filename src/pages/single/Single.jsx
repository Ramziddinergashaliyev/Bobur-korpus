import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import "./single.scss";

const Single = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  console.log(data);

  return (
    <div className="single">
      {/* {data ? (
        <div>
          <h2 style={{ color: "white" }}>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )} */}
    </div>
  );
};

export default Single;
