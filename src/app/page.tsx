"use client";

import { useState } from "react";
export default function Home() {
  const [code, setCode] = useState("SNOWCHILD");

  const clickHandler = () => {
    const hexCode = "0123456789ABCDEF";
    let random = "#";
    for (let i = 0; i < 6; i++) {
      random += hexCode[Math.floor(Math.random() * 16)];
    }
    setCode(random);
  };
  return (
    <>
      <div style={{ backgroundColor: `${code}` }}>©snowchild ©4d616e616e</div>
      <div
        style={{ backgroundColor: `${code}` }}
        className="text-slate-200 h-screen flex justify-center items-center"
      >
        <div className="w-2/4 border border-slate-500 p-4 flex flex-col gap-y-5 rounded-lg bg-slate-950/50 ">
          <div className="flex justify-center items-center text-xl">{code}</div>
          <button
            onClick={clickHandler}
            className="w-full px-10 py-1 rounded-lg border border-slate-500 bg-transparent text-xl hover:bg-slate-500"
          >
            click
          </button>
        </div>
      </div>
    </>
  );
}
