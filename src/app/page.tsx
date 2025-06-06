"use client";

import { HomeEditor } from "@/components/HomeEditor";
import { Liquid } from "@/components/Liquid";
import { Signature } from "@/components/sign";
import clsx from "clsx";
import Image from "next/image";

const doc = `# About me
I was born on the Mid-Autumn Festival and grew up in a small town in Wuhan, 
where I completed primary school and junior high. After that, I was admitted 
to the best high school in the district. However, three years later, I didn't 
perform well in the university entrance examination, so I decided to take it again.

Eventually, I was admitted to Beihang, majoring in Software Engineering. Now, 
I’m about to begin my graduate studies in Software Engineering at Tsinghua.

When I'm bored, I like to play LOL and Hearthstone, read comics, and watch animations.
Also, I’ve attached a photo from earlier — I think I looked better back then than I do now...`;

export default function Home() {
  return (
    <main
      id="home"
      className={clsx("bg-nord-background dark:bg-nord-background-dark")}
    >
      <Liquid>
        <div
          className={clsx(
            "relative min-w-64 h-full",
            "flex flex-col items-center justify-center"
          )}
        >
          <Image
            src="/young.jpg"
            width={161}
            height={288}
            alt="me"
            priority
            className={clsx(
              "w-30 sm:w-35 xl:w-40",
              "liquid-content  content-delay-300"
            )}
          />
          <h1
            className={clsx(
              "font-bold text-xl sm:text-6xl xl:text-7xl",
              "my-4",
              "flex items-center",
              "liquid-content content-delay-500"
            )}
          >
            <div
              className={clsx(
                "w-10 h-12 sm:w-30 sm:h-36 xl:w-36 xl:h-43",
                "stroke-nord-neutral dark:stroke-nord-neutral-dark"
              )}
            >
              <Signature />
            </div>
            uan Zhongqiu
          </h1>
          <p
            className={clsx(
              "text-base sm:text-2xl text-center",
              "w-96 sm:w-full",
              "liquid-content content-delay-700"
            )}
          >
            Love clean code, exploring, gaming, and learning everything happens
            to come my way.
          </p>
        </div>
      </Liquid>
      <div className="mx-8 mb-10 md:mx-24 md:mb-24 lg:mx-40 xl:mx-80 2xl:mx-auto 2xl:max-w-4xl">
        <HomeEditor value={doc.trim()} />
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
