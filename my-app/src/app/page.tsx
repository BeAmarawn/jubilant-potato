import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="bg-amber-50 w-150 h-150">
            <table>
              <thead className="text-amber-950">
                <tr>
                  <th className="px-10 py-3 border-2">Id</th>
                  <th className="px-10 py-3 border-2">Name</th>
                  <th className="px-10 py-3 border-2">Description</th>
                  <th className="px-10 py-3 border-2">Is Completed?</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
