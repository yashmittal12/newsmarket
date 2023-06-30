import React from "react";
import useData from "../utils/useData";
import { TOP_BUSINESS_URL, TOP_HEADLINE_URL } from "../utils/constant";
import TopHeadline from "./TopHeadline";

function Body() {
  const headlines = useData(TOP_HEADLINE_URL);
  const business = useData(TOP_BUSINESS_URL);
  console.log(business?.data);

  return (
    <div className="space-y-5" key="landing-page">
      <div
        className="text-bold font-mono text-xl mt-5  font-bold bg-gray-200 p-4"
        key="headline-title-0"
      >
        TOP HEADLINES
      </div>
      <div
        className="flex flex-wrap gap-5 justify-center align-middle"
        key="headline-container-0-1"
      >
        {headlines?.data?.length > 0 &&
          headlines?.data?.map((headline, index) => {
            return <TopHeadline {...headline} key={headline + "-" + index} />;
          })}
      </div>
      <div
        className="text-bold font-mono text-xl mt-5 font-bold bg-gray-200 p-4"
        key="headline-title-1"
      >
        BUSINESS HEADLINES
      </div>
      <div
        className="flex flex-wrap gap-5 justify-center align-middle"
        key="headline-container-1-0"
      >
        {business?.data?.length > 0 &&
          business?.data?.map((headline, index) => {
            return (
              <TopHeadline {...headline} key={headline.title + "-" + index} />
            );
          })}
      </div>
    </div>
  );
}

export default Body;
