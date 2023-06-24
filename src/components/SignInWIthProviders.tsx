import SignInWithProviderButton from "./SignInWithProviderButton";

const SignInWithProviders = () => {
  return (
    <div className="flex justify-around">
      <SignInWithProviderButton icon="/google.png" text="Sign in with Google" />
      <SignInWithProviderButton icon="/apple.png" text="Sign in with Apple" />
    </div>
  );
};

export default SignInWithProviders;
