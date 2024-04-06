import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button } from "../../components";

export default function HomeTwoPage() {
  return (
    <>
      <Helmet>
        <title>landing</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1007px] w-full bg-white-A700 md:h-auto">
        <Img src="images/img_background.png" alt="background_one" className="h-[1003px] w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full max-w-[1447px] flex-col items-center gap-28 md:gap-[84px] md:p-5 sm:gap-14">
          <header className="self-stretch">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Text size="md" as="p" className="!font-baloo !text-[37.36px]">
                Ace
              </Text>
              <div className="flex w-[54%] items-center justify-between gap-5 md:w-full md:flex-col">
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text as="p">Home</Text>
                </a>
                <a href="Experiences" target="_blank" rel="noreferrer">
                  <Text as="p">Experiences</Text>
                </a>
                <a href="#" className="mt-2.5 self-start">
                  <Text as="p">About Us</Text>
                </a>
                <a href="Pricing" target="_blank" rel="noreferrer">
                  <Text as="p">Pricing</Text>
                </a>
                <Button shape="round">Book A Session</Button>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center gap-[13px]">
            <Text size="lg" as="p" className="!font-baloo !text-[56.35px]">
              Unleash the Nature
            </Text>
            <Text size="xs" as="p">
              Lorem ipsum dolor sit amet consectetur. Sed neque viverra erat duis suscipit sit sem. Quis morbi integer
              aliquam eros et quam lectus ut volutpat.
            </Text>
          </div>
          <Img src="images/img_foreground.png" alt="foreground_one" className="h-[434px] w-[73%] object-cover" />
        </div>
      </div>
    </>
  );
}
