import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import "./search.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearchProductsQuery } from "../../context/api/productApi";

const Search = ({ close }) => {
  const [value, setValue] = useState("");
  const { data } = useSearchProductsQuery({ q: value });
  console.log(data);

  return (
    <div className="search container">
      <div className="search__top">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={value}
            name="value"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
          />
          <IoSearch />
        </form>
      </div>
      {value && (
        <div className="search__bottom">
          {data?.categories?.length ? (
            data.categories.map((el) => (
              <div key={el?.id || el?.name} className="search__bottom-category">
                <NavLink to={`/single/${el?.id}`}>
                  <p>{el?.name}</p>
                </NavLink>
              </div>
            ))
          ) : data?.groups?.length ? (
            data.groups.map((el) => (
              <div key={el?.id || el?.name} className="search__bottom-category">
                <NavLink to={`/group/${el?.id}`}>
                  <p>{el?.name}</p>
                </NavLink>
              </div>
            ))
          ) : data?.texts?.length ? (
            data.texts.map((el) => (
              <div key={el?.id || el?.name} className="search__bottom-category">
                <p>{el?.name}</p>
              </div>
            ))
          ) : (
            <p>Mahsulot topilmadi</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
