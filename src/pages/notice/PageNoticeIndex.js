import { Link } from "react-router-dom";
import Button from "Components/Button";

export default function PageNoticeIndex() {
  return (
    <div>
      <h2>공지사항</h2>
      <div>
        {" "}
        <Link to="/notice/new/">
          <Button>글쓰기</Button>
        </Link>
      </div>
    </div>
  );
}
