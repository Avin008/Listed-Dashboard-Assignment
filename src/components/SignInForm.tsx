const SignInForm = () => {
  return (
    <form className="h-[317px] space-y-4 rounded-[20px] bg-[#FFFFFF] p-[30px] font-mono">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email address</label>
        <input
          className="h-[40px] rounded-[10px] bg-[#F5F5F5] px-4"
          type="email"
          placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Password</label>
        <input
          className="h-[40px] rounded-[10px] bg-[#F5F5F5] px-4"
          type="password"
          placeholder="••••••••"
        />
      </div>
      <div className="">
        <span className="text-[#346BD4]">Forget Password?</span>
      </div>
      <div className="flex">
        <button className="h-[40px] w-full rounded-[10px] bg-[#000000] font-sans font-bold text-[#FFFFFF]">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
