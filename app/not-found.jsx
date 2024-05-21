import Link from "next/link";
import React from "react";
import notFound from "./components/404.webp";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="text-center">
      <h4 className="text-3xl text-blue-500 mb-3">There is a problem</h4>
      <p className="mb-2">
        Lets go back to <Link href="/">Dashboard</Link>
      </p>
      <div className="flex text-center justify-center">
        <Image src={notFound} alt="Not Found" width={360} />
      </div>
    </main>
  );
}
