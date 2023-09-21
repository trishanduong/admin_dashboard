import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <main className="p-4">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default SetupPage;
