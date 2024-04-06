import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";

export default function HomeOnePage() {
  return (
    <>
      <Helmet>
        <title>landing</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center self-end">
          <div className="h-[1000px] self-stretch bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat px-11 pt-11 md:h-auto md:px-5 md:pt-5">
            <Img
              src="images/img_foreground.png"
              alt="foreground_one"
              className="mt-[339px] h-[617px] w-full object-cover md:h-auto"
            />
          </div>
          <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="mt-9 h-[18px] w-[17px]" />
          <Heading as="h1" className="mt-3.5">
            Scroll Down
          </Heading>
        </div>
      </div>
    </>
  );
}
