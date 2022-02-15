import { Link } from "react-router-dom";
import image01 from "icons/image01.png";

export default function PageUser() {
  return (
    <>
      <h5>탄소 중립 실천 릴레이 현황</h5>
      <hr />
      <img className="m-8" src={image01} width="500" height="500" alt="testA" />
      <hr />
      <Link className="ml-auto" to="//">
        글쓰기
      </Link>
    </>
  );
}
