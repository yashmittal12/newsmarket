import React from "react";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-3 h-[200px] border m-5 shadow-lg bg-gray-100">
        <div className="font-bold text-4xl font-mono h-10 mt-24" key="f-1-0">
          {" "}
          NewsMarket
        </div>
        <div className="space-y-4 p-4 text-gray-600" key="f-1-1">
          <div className="text-lg font-bold" key="f-1-1-1">
            About Us
          </div>
          <div className="text-lg font-bold" key="f-1-1-2">
            Career
          </div>
          <div className="text-lg font-bold" key="f-1-1-3">
            Contact US
          </div>
          <div className="text-lg font-bold" key="f-1-1-4">
            Advertise
          </div>
        </div>
        <div className="mt-8 ml-44" key="f-1-2">
          <img
            src="https://thumbs.dreamstime.com/b/app-store-155321619.jpg"
            className="w-30 h-36"
            alt="available stores"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
