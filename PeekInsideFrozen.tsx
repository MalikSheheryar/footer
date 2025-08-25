import Ability from "@/assets/ability.png";
import Hat from "@/assets/Hat.png";
import IceSpactor from "@/assets/ice-spactor.png";
import BottomLine from "@/assets/whatIsPopsy/bottom_line.svg";
import circleLine from "@/assets/whatIsPopsy/circle_line_mobile.svg";
import CircleLineDesktop from "@/assets/whatIsPopsy/left_circle_and_line_desktop.svg";
import PeekDesktopText from "@/public/peek-desktop-text.svg";
import PeekMobileText from "@/public/peek-mobile-text.png";

import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "./GradientText";

const cards = [IceSpactor, Ability, Hat];

const PeekInsideFrozenArena = () => {
  return (
    <div className="bg-primary-dark lg:-mt-1">
      <div className="relative bg-[url('/desktop_hero_bg.svg')] bg-cover bg-center bg-no-repeat px-5.5 pt-6 lg:bg-left lg:py-[121px]">
        <span className="from-primary-dark to-primary-dark/0 absolute top-0 right-0 left-0 h-[40%] w-full bg-gradient-to-b lg:-top-1"></span>
        <span className="from-primary-dark to-primary-dark/0 absolute right-0 bottom-0 left-0 h-[40%] w-full bg-gradient-to-t"></span>
        <div className="mx-auto max-w-480 rounded-[11px] border-[0.3px] border-white/50 bg-[#00000033] p-4.5 backdrop-blur-sm lg:flex lg:w-full 2xl:gap-19">
          <div className="xl:7/12 2xl:5/12 mb-4 grid grid-cols-10 lg:w-9/12">
            <div className="col-span-2 flex items-center">
              <Image
                src={circleLine}
                alt="circle and line"
                className="lg:hidden"
              />
              <Image
                src={CircleLineDesktop}
                alt="circle and line"
                className="hidden lg:block"
              />
            </div>
            <div className="col-span-8">
              <Image
                src={PeekMobileText}
                priority
                alt="Popsy is not"
                className="-mt-3 mb-3 lg:hidden"
              />

              <Image
                src={PeekDesktopText}
                priority
                alt="Popsy is not"
                className="hidden lg:block"
              />
              <GradientText
                as="h2"
                className="font-nohemi justify-start self-stretch text-xl font-bold uppercase lg:mb-2 lg:max-w-147 lg:text-[30px]"
              >
                An arcade journey powered by Web3 magic
              </GradientText>
              {/* <Image
                src={JustAGame}
                priority
                alt="Just a game"
                className=" lg:hidden"
              /> */}

              <p className="font-nohemi mb-5 text-[13px]/4 text-white lg:mb-10 lg:max-w-147 lg:text-xl">
                Step into a snow-fueled arcade world where chaos, charm, and
                crypto rewards collide
              </p>
              <div className="mb-5 flex gap-4">
                {cards.map((item, index) => (
                  <div key={index} className="relative lg:max-h-54 lg:max-w-36">
                    <div className="absolute right-2 bottom-3 z-10 max-lg:bottom-1">
                      <Info size={12} color="#01FFFF" className="lg:size-5" />
                    </div>
                    <Image
                      src={item}
                      priority
                      alt="card"
                      width={75}
                      height={113}
                      className="relative size-full rounded-[5px] object-cover lg:max-h-54 lg:min-h-54 lg:max-w-36 lg:min-w-36 lg:rounded-[10px]"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="http://t.me/Popsy_p2e_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/claim-airdrop.svg"
                  priority
                  alt="claim-airdrop-button"
                  width={123}
                  height={63}
                  className="cursor-pointer lg:min-h-27 lg:min-w-53"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center overflow-hidden bg-radial lg:mt-9 lg:w-7/12">
            <Link href="https://youtu.be/lz8VVeCfnXI" target="_blank">
              <Image
                src="/peek-video.svg"
                height={218}
                width={356}
                alt="peek-video"
                className="h-full max-w-150 max-lg:w-full max-lg:max-w-200 lg:min-w-120 xl:min-w-150 2xl:min-w-250"
              />
            </Link>
          </div>
        </div>
        <Image src={BottomLine} alt="Bottom line" className="mt-6 lg:hidden" />
      </div>
    </div>
  );
};

export default PeekInsideFrozenArena;
