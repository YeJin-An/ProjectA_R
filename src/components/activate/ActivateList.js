import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
function ActivateList() {
  const [state, setstate] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await Axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setstate(res.data);
    setloading(false);
  };
  const data = loading
    ? "wait"
    : state.map((row) => ({ Name: row.name, Email: row.email }));
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150,
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
      ,
    </div>
  );
}
export default ActivateList;
