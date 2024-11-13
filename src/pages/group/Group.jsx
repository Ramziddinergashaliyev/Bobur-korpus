import React from "react";
import { useParams } from "react-router-dom";
import { useGetTextByIdQuery } from "../../context/api/productApi";
import "./group.scss";

const Group = () => {
  const { id } = useParams();
  const { data } = useGetTextByIdQuery(id);
  console.log(data);

  return (
    <div className="ghazal">
      {!data ? (
        <h2 className="ghazal-title container">
          Hech qanday malumot topilmadi
        </h2>
      ) : (
        <div className="ghazal-container container">
          <div className="ghazal-content">
            {data?.text?.split("\n").map((line, index) => (
              <p key={index} className="ghazal-line">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Group;
