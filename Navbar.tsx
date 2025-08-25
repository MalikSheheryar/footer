import { cn } from "@/lib/utils";
import UpdatedLogo from "@/public/logowithoutback.png";
import Image from "next/image";
import Link from "next/link";
import NavbarSheet from "./NavbarSheet";
import { Button } from "./ui/button";

const buttonsData = [
  {
    text: "Connect",
    iconSrc: "/connect_icon.svg",
  },
  {
    text: "Whitepaper",
    iconSrc: "/carbon_white-paper.svg",
    url: "https://popsy.gitbook.io/",
  },
  {
    text: "Claim Airdrop",
    iconSrc: "/mingcute_airdrop-fill.svg",
    url: "http://t.me/Popsy_p2e_bot", // 👈 Add this line
  },
];

const Navbar = () => {
  return (
    <div className="bg-primary-dark flex items-center justify-between border-[0.3px] border-white/50 px-1 py-3.5 backdrop-blur-md lg:gap-x-2 lg:border-none lg:bg-transparent lg:backdrop-blur-none xl:gap-x-4 2xl:gap-x-6.5 2xl:py-4">
      {/* mobile logo */}
      <div className="relative flex min-h-7.5 min-w-14.5 items-center justify-center lg:hidden">
        {/* <Image
          src="/logo_bg_desktop.svg"
          alt="Popsy Logo Background"
          width={58}
          height={30}
          className="absolute inset-0 size-full object-cover"
        /> */}
        <Image
          src={UpdatedLogo}
          alt="Logo"
          width={196}
          height={158}
          className="relative z-10 h-[78px] w-[116px]"
        />
        {/* <Image
          src="/logo_mobile.svg"
          // src="/logo.png"
          alt="Popsy Logo"
          width={20}
          height={16}
          className="relative z-10 flex items-center justify-center object-contain"
        /> */}
      </div>
      {buttonsData.map((button, index) => (
        <Button
          key={index}
          className="from-gradient-start to-gradient-end relative inline-flex h-auto items-center justify-center rounded-sm bg-gradient-to-b p-px"
        >
          <span
            className={cn(
              "font-nohemi bg-background-dark hover:bg-background-dark flex size-full items-center justify-center gap-1 rounded-sm px-2.5 py-2 text-[8.5px] text-white lg:px-2 lg:py-1 lg:text-xs lg:font-normal xl:px-3 xl:py-2 2xl:px-5 2xl:py-2.5 2xl:text-lg",
              index === 0 && "bg-background-dark hover:bg-background-dark",
              index === 2 && "bg-primary-dark hover:bg-primary-dark",
            )}
          >
            <Image
              src={button.iconSrc}
              alt="Connect Icon"
              height={24}
              width={24}
              className="size-3 flex-none lg:size-6"
            />
            <Link href={button.url ?? "#"} target={button.url ? "_blank" : ""}>
              <span className="absolute inset-0 cursor-pointer"></span>
              {button.text}
            </Link>
          </span>
        </Button>
      ))}

      <NavbarSheet />
    </div>
  );
};

export default Navbar;
