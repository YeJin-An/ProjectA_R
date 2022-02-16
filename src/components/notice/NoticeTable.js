import React from "react";
import "./NoticeTable.css";

const NoticeTable = (props) => {
  const { headersName, children } = props;

  return (
    <table className="notice-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            <td className="notice-table-header-column" key={index}>
              {item}
            </td>;
          })}
        </tr>
      </thead>
      <body>{children}</body>
    </table>
  );
};

export default NoticeTable;
