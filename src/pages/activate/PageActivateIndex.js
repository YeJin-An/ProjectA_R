import Button from "Components/Button";
import { useNavigate } from "react-router-dom";

export default function PageActivateIndex() {
  const Navigate = useNavigate();
  return (
    <div>
      <h2>탄소 중립 실천 릴레이 현황</h2>
      <Button onClick={() => Navigate("")}>글쓰기</Button>
    </div>
  );
}
