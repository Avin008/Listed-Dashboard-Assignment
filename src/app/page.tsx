import { Brand, CreateAccountLink, SignInForm } from "@/components";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-8 bg-background">
      <div className="col-span-3 flex items-center justify-center border border-black bg-[#000000]">
        <Brand />
      </div>
      <div className="col-span-5 flex flex-col items-center justify-center border border-black">
        <SignInForm />
        <CreateAccountLink />
      </div>
    </main>
  );
}
