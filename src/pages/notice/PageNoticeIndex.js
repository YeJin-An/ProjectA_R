import { Link } from "react-router-dom";
import Button from "Components/Button";

export default function PageNoticeIndex() {
  return (
    <div>
      <h2>탄소 중립 실천 릴레이</h2>
      <div>
        {" "}
        <Link to="/notice/new/">
          <Button>글쓰기</Button>
        </Link>
      </div>
    </div>
  );
}
