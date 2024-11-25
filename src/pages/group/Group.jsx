// import React from "react";
// import { useParams } from "react-router-dom";
// import { useGetTextByIdQuery } from "../../context/api/productApi";
// import "./group.scss";

// const Group = () => {
//   const { id } = useParams();
//   const { data } = useGetTextByIdQuery(id);
//   console.log(data);

//   return (
//     <div className="ghazal">
//       {!data ? (
//         <h2 className="ghazal-title container">
//           Hech qanday malumot topilmadi
//         </h2>
//       ) : (
//         <div className="ghazal-container container">
//           <div className="ghazal-content">
//             {data?.text?.split("\n").map((line, index) => (
//               <p key={index} className="ghazal-line">
//                 {line}
//               </p>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Group;

import React, { useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useGetTextByIdQuery } from "../../context/api/productApi";
import "./group.scss";

const Group = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data } = useGetTextByIdQuery(id);

  // Extract the search query from the URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Ref to track the element containing the search term
  const searchRef = useRef(null);

  // Function to highlight the search term
  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          style={{
            color: "red",
            fontWeight: "bold",
            borderRadius: "4px",
            padding: "0 2px",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Scroll to the first matching line
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [data, searchQuery]);

  return (
    <div className="ghazal" style={{ maxHeight: "80vh", overflowY: "auto" }}>
      {!data ? (
        <h2 className="ghazal-title container">
          Hech qanday ma'lumot topilmadi
        </h2>
      ) : (
        <div className="ghazal-container container">
          <div className="ghazal-content">
            {data?.text?.split("\n").map((line, index) => {
              const isHighlighted = line.toLowerCase().includes(searchQuery);
              return (
                <p
                  key={index}
                  className={`ghazal-line ${
                    isHighlighted ? "highlight-line" : ""
                  }`}
                  ref={isHighlighted && searchRef ? searchRef : null}
                >
                  {highlightText(line, searchQuery)}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
