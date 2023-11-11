import { FiberManualRecordRounded, InfoRounded } from "@mui/icons-material";
import TimeAgo from "timeago-react";
// import adImg from "../public/adImg.jpg";
import Image from "next/image";

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2">
      <div className="bg-white dark:bg-[#1d2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>LinkedIn News</h4>
          <InfoRounded />
        </div>

        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
            >
              <FiberManualRecordRounded className="!h-2 !w-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-sm mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-[#1d2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none">
        <Image
          alt="ads image"
          src="/adImg.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Widgets;
