import Button from "components/Button";
import React from "react";
import NoticeTable from "./NoticeTable";
import NoticeTableColumn from "./NoticeTableColumn";
import NoticeTableRow from "./NoticeTableRow";

const NoticeList = ({ notice }) => {
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="검색"
        className="p-1 bg-gray-100 focus:border focus:border-gray-400"
      ></input>
      <button onClick={""}>검색</button>

      <NoticeTable headersName={["번호", "제목", "작성자", "작성일"]}>
        <NoticeTableRow key={notice}>
          <NoticeTableColumn>1</NoticeTableColumn>
          <NoticeTableColumn>사랑</NoticeTableColumn>
          <NoticeTableColumn>등록일</NoticeTableColumn>
          <NoticeTableColumn>조회수</NoticeTableColumn>
        </NoticeTableRow>
        <NoticeTableRow key={notice}>
          <NoticeTableColumn>2</NoticeTableColumn>
          <NoticeTableColumn>좋아해</NoticeTableColumn>
          <NoticeTableColumn>등록일</NoticeTableColumn>
          <NoticeTableColumn>작성일</NoticeTableColumn>
        </NoticeTableRow>
      </NoticeTable>
    </>
  );
};

export default NoticeList;
