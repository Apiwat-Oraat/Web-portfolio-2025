/* eslint-disable @next/next/no-img-element */
// import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"


const reviews = [
  {
    name: "TailwindCss",
    username: "css framwork",
    body: "",
    img: "https://avatars.githubusercontent.com/u/30317862?s=280&v=4",
  },
  {
    name: "Java",
    username: "language",
    body: "",
    img: "https://e7.pngegg.com/pngimages/933/14/png-clipart-java-programming-language-computer-programming-object-oriented-programming-programmer-java-electronics-text.png",
  },
  {
    name: "React.js",
    username: "front end",
    body: "",
    img: "https://miro.medium.com/1*Yafu7ihc1LFuP4azerAa4w.png",
  },
  {
    name: "Next.js",
    username: "front end",
    body: "",
    img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
  },
  {
    name: "JavaScript",
    username: "language",
    body: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "PHP",
    username: "language",
    body: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhynuhvooPigJdBSnSo7-hTRyD1fu6s8AdbL7JZ1VOFOi7yB5PwlPjsk-zTR-d2i_pIAw&usqp=CAU",
  },
  {
    name: "Postgresql",
    username: "Database",
    body: "",
    img: "https://stickersdevs.com.br/wp-content/uploads/2022/01/postgreesql-logo-adesivo-sticker.png",
  },
  {
    name: "Prisma",
    username: "Database",
    body: "",
    img: "https://cdn-1.webcatalog.io/catalog/prisma-data-platform/prisma-data-platform-icon-filled-256.webp?v=1714776724281",
  },
  {
    name: "Node.js",
    username: "black end",
    body: "",
    img: "https://www.borntodev.com/wp-content/uploads/2023/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-8.png",
  },
  {
    name: "C++",
    username: "language",
    body: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
]

const firstRow = reviews.slice(0,reviews.length / 1)
const secondRow = reviews.slice(0,reviews.length / 1)
const treeRow = reviews.slice(0,reviews.length / 1)
const founrRow = reviews.slice(0,reviews.length / 1)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:35s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:35s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:35s]">
        {treeRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:35s]">
        {founrRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div> */}
    </div>
  )
}


function SkillContainer() {
  return (
    <div className="flex justify-center items-center">
      <MarqueeDemoVertical />
    </div>
  );
}

export default SkillContainer;