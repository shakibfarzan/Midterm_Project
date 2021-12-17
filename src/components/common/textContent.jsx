import React from "react";

const TextContent = ({ title, paragraphs, list }) => {
  return (
    <>
      <h2 className="text-content-title">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.id} className="text-content-paragraph">
          {paragraph.content}
        </p>
      ))}
      {list &&
        list.map((item) => (
          <li key={item.id} className="text-content-item">
            {item.content}
          </li>
        ))}
    </>
  );
};

export default TextContent;
