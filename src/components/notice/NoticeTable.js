import React from "react";
import { Table } from "react-bootstrap";

export default function NoticeTable() {
  return (
    <>
      <div>
        <Table>
          <tbody>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
            <tr>
              <th>1</th>
              <th>Table cell</th>
              <th>Table cell</th>
              <th>Table cell</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
