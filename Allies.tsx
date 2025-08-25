import BecomeAPartner from "@/public/bacome_a_partner.svg";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const allies = [
  "/c-1.svg",
  "/c-2.svg",
  "/c-3.svg",
  "/c-4.svg",
  "/c-1.svg",
  "/c-2.svg",
  "/c-3.svg",
  "/c-4.svg",
  "/c-1.svg",
  "/c-2.svg",
  "/c-3.svg",
  "/c-4.svg",
];
export default function Allies() {
  return (
    <div className="relative bg-[url(/allies-bg.svg)] bg-cover bg-bottom bg-no-repeat pt-17.5 pb-26">
      <div className="">
        <Image
          src="/allies-left.svg"
          alt="allies-bg"
          width={170}
          height={170}
          className="absolute top-1/2 -translate-y-1/2"
        />
        <p className="font-nohemi max-w-70 bg-gradient-to-b from-[#D8FCFE] to-[#20CFFF] bg-clip-text text-sm leading-none font-bold text-transparent uppercase max-lg:mx-auto max-lg:text-center lg:ml-40 lg:max-w-124 lg:text-[22px]">
          Our growing league of partners, builders, and icy warriors
        </p>
        <Image
          src="/allies-text.svg"
          alt="allies-bg"
          width={682}
          height={196}
          className="max-lg:hidden lg:ml-40"
        />
        <Image
          src="/allies-text-sm.svg"
          alt="allies-bg"
          width={287}
          height={205}
          className="mx-auto lg:hidden"
        />
        <Carousel
          opts={
            {
              // align: "center",
              // startIndex:2
            }
          }
          className="relative z-10 mt-40"
        >
          <CarouselContent className="isolate mx-auto w-[calc(100vw-30%)]">
            {allies.map((item, index) => (
              <CarouselItem
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <div className="flex items-center justify-center rounded-[10px] border-1 border-[#FFFFFF80] bg-[#00000033] p-6 backdrop-blur-lg lg:min-h-35">
                  {" "}
                  <Image
                    src={item}
                    alt="allies-bg"
                    width={164}
                    height={50}
                    className="max-h-12.5"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-10 z-50 size-20 border-none bg-transparent hover:bg-transparent disabled:opacity-100 max-md:top-40 max-md:left-[30%] lg:size-45" />
          <CarouselNext className="right-0 z-50 size-20 border-none bg-transparent hover:bg-transparent disabled:opacity-100 max-md:top-40 max-md:right-[30%] lg:size-45" />
        </Carousel>
        <div className="flex items-center justify-between max-lg:mt-26">
          <Image
            src="/globe2.svg"
            alt="allies-bg"
            width={365}
            height={365}
            className="max-lg:mx-auto max-lg:size-49"
          />
          <div className="mr-20 hidden lg:block">
            <Link
              href="https://t.me/greygoss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={BecomeAPartner}
                alt="Become a Partner"
                width={245}
                height={125}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <Image
          src="/allies-right.svg"
          alt="allies-bg"
          width={170}
          height={170}
          className="absolute top-1/2 right-0 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
