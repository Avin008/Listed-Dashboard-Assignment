import {
  Brand,
  CreateAccountLink,
  FormHeading,
  SignInForm,
  SignInWithServices,
} from "@/components";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-8 bg-background x_sm:p-5 md:p-0">
      <div className="items-center justify-center border border-black bg-[#000000] x_sm:hidden md:col-span-3 md:flex">
        <Brand />
      </div>
      <div className="flex items-center justify-center x_sm:col-span-8 md:col-span-5">
        <div className="w-[385px] space-y-4">
          <FormHeading />
          <SignInWithServices />
          <SignInForm />
          <CreateAccountLink />
        </div>
      </div>
    </main>
  );
}
