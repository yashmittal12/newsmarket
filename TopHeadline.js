import React from "react";
import { Link } from "react-router-dom";
function TopHeadline({ author, urlToImage, title, url, publishedAt }) {
  return (
    <div className="w-[300px] border h-auto space-y-5" key="th-1-0">
      <div className="p-2 h-[150px] overflow-hidden" key="th-1-1">
        <Link to={url}>
          <img
            className="rounded-lg"
            src={
              urlToImage !== null
                ? urlToImage
                : "https://play-lh.googleusercontent.com/hctyczj6W9AZPTTrhp8PCywK2LVFa13jucUE4Jrl600hfFGKmiRxlsZZi7g2EOMuf3M"
            }
            alt={title}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2" key="th-1-2">
        <div className="font font-mono" key="th-1-3">
          {title}
        </div>
        <div className="font-bold" key="th-1-4">
          {author}
        </div>
        <div className="font-bold" key="th-1-5">
          Published {publishedAt}
        </div>
      </div>
    </div>
  );
}

export default TopHeadline;
