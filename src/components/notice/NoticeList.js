import axios from "axios";

function NoticeList() {
  const token = document.getElementById("token");
  const loginData = {
    id: "",
    title: "",
    content: "",
    created_at: "",
    user: "",
  };

  axios
    .post("http://127.0.0.1:8000/notice/api/notices/", loginData)
    .then((response) => {
      console.log(response);
      token.innerHTML = response.data.token;
    });
}

export default NoticeList;
