import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="grid-cols-14 lg:mt-40 lg:grid xl:mt-56">
        <div className="z-10 order-1 px-6.5 pt-40 lg:col-span-4 lg:mt-20 lg:-mb-18 lg:flex lg:flex-col lg:items-end lg:justify-end lg:pt-0 lg:pl-12 xl:mt-86 2xl:mt-120 2xl:-mb-6">
          <Image
            src="/popsy_hero.svg"
            alt="Popsy Hero Image"
            width={341}
            height={128}
            className="mx-auto mb-2 lg:max-w-40 2xl:max-w-64"
          />
          <p className="font-nohemi mb-7.5 text-center text-sm font-bold text-white lg:text-[9px] 2xl:text-sm">
            Power Up, Play to Earn, Own the Game
          </p>
        </div>

        <JoinAndClaimButtonsPair />

        <div className="hidden items-center justify-center lg:order-2 lg:col-span-6 lg:flex">
          <div className="relative">
            <span className="from-primary to-primary-dark absolute inset-4 bg-radial lg:inset-6 xl:inset-8"></span>
            <Image
              src="/article_battle_bg_desktop.svg"
              className="pointer-events-none relative z-10 hidden lg:block"
              alt="Hero Section Buttons Background"
              width={785}
              height={487}
            />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center lg:mb-10">
              <Link href="https://youtu.be/tv1z0rxBDuY" target="_blank">
                <Image
                  src="/play_icon_desktop.svg"
                  height={80}
                  width={80}
                  alt="Play Icon"
                  className="absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block lg:size-10 xl:size-14 2xl:size-20"
                />
              </Link>
              <Image
                src="/char2.gif"
                height={217}
                width={217}
                alt="Article Battle Char"
                className="size-17.5 lg:size-32 xl:size-46 2xl:size-54"
              />
              <span className="font-morguns-condensed text-sm text-white lg:text-base xl:text-xl 2xl:text-3xl">
                The Arctic Battle Begins
              </span>
            </div>
          </div>
        </div>

        <ArcticBattleContainer />
      </div>

      <Image
        src="/mobile_b_bg.svg"
        width={1920}
        height={100}
        alt="Mobile Background"
        className="-mt-6 h-auto w-full object-cover lg:hidden"
      />
      <Image
        src="/hero_desktop_b_bg.svg"
        width={1920}
        height={219}
        alt="desktop Background"
        className="-z-10 -mt-14 hidden h-auto w-full object-cover lg:block xl:-mt-20 2xl:-mt-40"
      />
      <Image
        src="/desktop_hero_bottom_line.svg"
        height={49}
        width={807}
        alt="Hero Right Line"
        className="absolute bottom-[5%] left-1/2 hidden max-w-[42%] -translate-x-1/2 lg:block"
      />
      <Image
        src="/hero_bottom_left_line.svg"
        height={1}
        width={295}
        alt="Hero Left Line"
        className="absolute left-[10%] z-30 hidden h-px max-w-[20%] lg:bottom-[18%] lg:block xl:bottom-[17%] 2xl:max-w-[23%] @min-[1780px]:bottom-[20%] @min-[1900px]:bottom-[22%]"
      />
    </>
  );
};

const ArcticBattleContainer = () => (
  <div className="relative flex h-39 items-center justify-center lg:hidden">
    <div className="absolute top-1/2 left-1/2 min-h-40 min-w-60 -translate-x-1/2 -translate-y-1/2">
      <Image
        src="/article_battle_bg.svg"
        className="min-h-40 w-full min-w-56 object-contain lg:hidden"
        alt="Hero Section Buttons Background"
        width={256}
        height={159}
      />
      <span className="from-primary to-primary-dark absolute inset-4 -z-10 bg-radial"></span>
    </div>

    <div className="relative flex flex-col items-center">
      {/* ✅ Wrapped play icon in Link for mobile */}
      <Link
        href="https://youtu.be/tv1z0rxBDuY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/play_icon.svg"
          height={16}
          width={16}
          alt="Play Icon"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer lg:hidden"
        />
      </Link>

      <Image
        src="/char2.gif"
        height={217}
        width={217}
        alt="Article Battle Char"
        className="size-17.5 lg:size-32 xl:size-46 2xl:size-54"
      />
      <span className="font-morguns-condensed text-sm text-white lg:text-base xl:text-xl 2xl:text-3xl">
        The Arctic Battle Begins
      </span>
    </div>
  </div>
);

const JoinAndClaimButtonsPair = () => (
  <div className="lg:relative lg:z-10 lg:order-3 lg:col-span-4 lg:-mb-10 lg:flex lg:flex-col lg:items-start lg:justify-end 2xl:top-[20%] 2xl:justify-center">
    <div className="mb-28 flex items-center justify-center gap-2 lg:mt-10 lg:mb-0 lg:items-end lg:justify-start lg:gap-0 2xl:mt-10">
      <div className="relative mt-4 ml-4 flex h-18 w-35 items-center justify-center lg:max-w-26 2xl:max-w-32.5">
        <Image
          src="/buttons_bg.svg"
          className="absolute inset-0"
          alt="Hero Section Buttons Background"
          width={142}
          height={72}
        />
        <div className="relative flex items-center lg:absolute lg:-translate-y-1/2 2xl:translate-y-0">
          <button className="font-nohemi inline-flex cursor-pointer items-center justify-center gap-2 text-xs font-bold text-white transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 lg:text-[8px] 2xl:text-sm">
            <Image
              src="/token_ton.svg"
              height={40}
              width={40}
              alt="Token Icon"
              className="h-5 w-5"
            />
            Join Presale
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
