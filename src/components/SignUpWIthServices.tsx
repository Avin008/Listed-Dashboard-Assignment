import SignInWithServicesButton from "./SignInWithProviderButton";

const SignInWithServices = () => {
  return (
    <div className="flex justify-around">
      <SignInWithServicesButton icon="/google.png" text="Sign in with Google" />
      <SignInWithServicesButton icon="/apple.png" text="Sign in with Apple" />
    </div>
  );
};

export default SignInWithServices;
