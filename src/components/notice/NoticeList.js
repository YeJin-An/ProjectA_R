import useAxios from "axios-hooks";

function NoticeList() {
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "http://127.0.0.1:8000/notice/api/notices/",
      method: "GET",
    },
    { manual: true }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <button onClick={refetch}>refatch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default NoticeList;
