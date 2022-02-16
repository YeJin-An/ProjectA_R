import React from "react";
import NoticeTable from "./NoticeTable";
import NoticeTableColumn from "./NoticeTableColumn";
import NoticeTableRow from "./NoticeTableRow";

const NoticeList = (props) => {
  return (
    <>
      <NoticeTable headerName={["번호", "제목", "작성자", "작성일"]}>
        <NoticeTableRow>
          <NoticeTableColumn>1</NoticeTableColumn>
          <NoticeTableColumn>첫번째 게시글입니다.</NoticeTableColumn>
          <NoticeTableColumn>누구</NoticeTableColumn>
          <NoticeTableColumn>2022-10-25</NoticeTableColumn>
        </NoticeTableRow>
      </NoticeTable>
      <NoticeTableRow>
        <NoticeTableColumn>2</NoticeTableColumn>
        <NoticeTableColumn>두번째 게시글입니다.</NoticeTableColumn>
        <NoticeTableColumn>누궁</NoticeTableColumn>
        <NoticeTableColumn>2022-10-25</NoticeTableColumn>
      </NoticeTableRow>
      <NoticeTableRow>
        <NoticeTableColumn>3</NoticeTableColumn>
        <NoticeTableColumn>세번째 게시글입니다.</NoticeTableColumn>
        <NoticeTableColumn>누굴</NoticeTableColumn>
        <NoticeTableColumn>2022-10-25</NoticeTableColumn>
      </NoticeTableRow>
      <NoticeTableRow>
        <NoticeTableColumn>4</NoticeTableColumn>
        <NoticeTableColumn>네번째 게시글입니다.</NoticeTableColumn>
        <NoticeTableColumn>누군</NoticeTableColumn>
        <NoticeTableColumn>2022-10-25</NoticeTableColumn>
      </NoticeTableRow>
    </>
  );
};

export default NoticeList;
