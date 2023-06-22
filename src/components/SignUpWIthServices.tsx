import SignInWithServicesButton from "./SignInWithServicesButton";

const SignInWithServices = () => {
  return (
    <div className="mb-[20px] flex gap-10">
      <SignInWithServicesButton icon="/google.png" text="Sign in with Google" />
      <SignInWithServicesButton icon="/apple.png" text="Sign in with Apple" />
    </div>
  );
};

export default SignInWithServices;
