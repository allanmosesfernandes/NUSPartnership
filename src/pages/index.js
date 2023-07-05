import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main className="flex w-full gap-2 justify-normal items-center">  
      <h1 className="bg-zinc-950 text-allan border-2 border-slate-950 lg:text-5xl text-2xl p-8">NUS Partnership</h1>
      <Link to="/about" className="ml-auto">About</Link>
    </main>
  );
}

export default IndexPage

  