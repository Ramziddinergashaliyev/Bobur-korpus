import React from "react";
import { useParams } from "react-router-dom";
import { useGetBoburnomaIdQuery } from "../../context/api/productApi";
import "./blog.scss";

const Blog = () => {
  const { id } = useParams();
  const { data } = useGetBoburnomaIdQuery(id);

  return (
    <div className="blog">
      <div className="container">
        <a href={data?.pdf_file_url} target="_blank" rel="noopener noreferrer">
          <button className="blog__btn ">PDF-ni yuklab olish</button>
        </a>
      </div>
    </div>
  );
};

export default Blog;
