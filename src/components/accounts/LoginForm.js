import Button from "components/Button";

export default function LoginForm() {
  return (
    <>
      <hr />
      <div className="mx-10 ">
        <h5 className="mt-3">Login</h5>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          className="p-1 mt-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        ></input>

        <input
          type="text"
          name="Password"
          placeholder="Password"
          className="p-1  mt-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        ></input>
        <Button>로그인</Button>
      </div>
    </>
  );
}
