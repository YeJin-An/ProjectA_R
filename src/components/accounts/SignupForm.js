export default function SignupForm() {
  return (
    <>
      <hr />
      <div className="mx-10 ">
        <h5 className="mt-3">Signup</h5>
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
          className="p-1 mt-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        ></input>
        <input
          type="text"
          name="Address"
          placeholder="Address"
          className="p-1 mt-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        ></input>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          className="p-1  mt-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        ></input>
        <input
          type="text"
          name="Phone Number"
          placeholder="Phone Number"
          className="p-1  mt-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        ></input>
        <div className="mt-3 my-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 
        text-white 
        font-bold py-0.5 px-3 rounded "
          >
            회원가입
          </button>
          <button
            className="ml-4 bg-blue-600 hover:bg-blue-700 
        text-white 
        font-bold py-0.5 px-3 rounded"
          >
            취소
          </button>
        </div>
      </div>
    </>
  );
}
