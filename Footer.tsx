"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import SocialIcons from "./SocialIcons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const quickLinks = [
  "Home",
  "Features",
  "How to Play",
  "Roadmap",
  "Whitepaper",
  "Claim Airdrop",
];

const brands = [
  {
    imgSrc: "/dex-screener-seeklogo.svg",
    text: "Dexscreener",
    url: "https://dexscreener.com",
  },
  {
    imgSrc: "/coinmarketcap-seeklogo.png",
    text: "CoinMarketCap",
    url: "https://coinmarketcap.com",
  },
  {
    imgSrc: "/Pinksale Logo Vector.svg",
    text: "Pinksale",
    url: "https://www.pinksale.finance",
  },
];

const contractAddress = "PoPSP4HqDawRjdVxU2Bc8SWPduBpoHj7XSkKiPqLszw";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="bg-primary-dark relative lg:-mt-1">
      <div className="bg-[url(/footer-bg.svg)] bg-cover bg-center bg-no-repeat px-7.5 pt-26 pb-3">
        <span className="from-primary-dark to-primary-dark/0 absolute top-0 right-0 left-0 h-[40%] w-full bg-gradient-to-b lg:-top-1"></span>
        <span className="from-primary-dark to-primary-dark/0 absolute right-0 bottom-0 left-0 h-[40%] w-full bg-gradient-to-t"></span>

        {/* Main content */}
        <div className="relative z-10 flex max-w-[1709px] items-center justify-center max-lg:flex-col lg:mx-auto lg:flex lg:justify-between lg:space-x-10">
          <div className="flex flex-col items-center max-lg:space-y-3 lg:flex-row lg:space-x-10">
            <Image
              src="/popsy-f.svg"
              alt="popsy-image"
              width={142}
              height={121}
            />
            <p className="font-morguns-condensed text-3xl leading-none text-white max-lg:text-center lg:max-w-143 lg:text-[80px]">
              Join the arena, earn your rewards, and make your mark in the icy
              leaderboard
            </p>
          </div>

          {/* Links and trust */}
          <div className="w-full justify-between max-xl:max-w-110 lg:flex xl:max-w-156">
            {/* Quick Links */}
            <div className="relative z-5 space-y-6 overflow-hidden max-lg:mt-9.5 max-lg:mb-14 max-lg:rounded-[10px] max-lg:border-1 max-lg:border-[#FFFFFF80] max-lg:bg-[#00000033] max-lg:py-6 max-lg:backdrop-blur-lg">
              <h3 className="font-oddly-calming text-[40px] text-nowrap text-[#01FFFF] max-lg:text-center lg:text-[34px]/8">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-3 max-lg:items-center">
                {quickLinks.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="font-nohemi max-w-32 text-xl font-bold text-white max-lg:text-center"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Live price */}
            <div className="relative z-5 items-start justify-between overflow-hidden max-lg:space-y-6 max-lg:rounded-[10px] max-lg:border-1 max-lg:border-[#FFFFFF80] max-lg:bg-[#00000033] max-lg:py-6 max-lg:backdrop-blur-lg">
              <h3 className="font-oddly-calming text-center text-[40px] text-nowrap text-[#01FFFF] lg:text-[34px]/8">
                Live price
              </h3>
              <Image
                src="/popsy-f.svg"
                alt="footer"
                width={82}
                height={82}
                className="mx-auto"
              />
              <div className="flex flex-col items-center space-y-3">
                <p className="font-nohemi text-center text-xl font-bold text-white">
                  $0.00004
                </p>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 8L2 8L2 6L8 0L14 6V8H10V16H6V8Z" fill="#00FF22" />
                </svg>
              </div>
            </div>

            {/* Trust us */}
            <div>
              <h3 className="font-oddly-calming text-[40px]/8 text-nowrap text-[#01FFFF] max-lg:mt-14 max-lg:mb-5.5 max-lg:text-center lg:text-[34px]/8">
                Trust us
              </h3>
              <div className="flex flex-col items-center justify-center gap-x-5 max-lg:rounded-[10px] max-lg:border-1 max-lg:border-[#FFFFFF80] max-lg:bg-[#012152] max-lg:px-6 max-lg:backdrop-blur-lg lg:items-start">
                {brands.map((item, index) => (
                  <div key={index} className="relative flex space-x-2.5 py-2.5">
                    <Image
                      src={item.imgSrc}
                      alt={item.text}
                      width={24}
                      height={24}
                    />
                    <p className="font-nohemi text-lg font-bold text-white">
                      <Link href={item.url}>{item.text}</Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons and Logo */}
        <div className="relative z-10 max-w-440 lg:mx-auto lg:flex lg:flex-row-reverse lg:justify-between">
          <SocialIcons />
          <Image
            src="/5.svg"
            alt="footer"
            width={129}
            height={129}
            className="mx-auto -mb-4 lg:mx-0"
          />
        </div>

        {/* Newsletter + Smart Contract */}
        <div className="relative z-5 max-w-440 items-start justify-between rounded-[10px] border border-[#FFFFFF80] bg-[#00000033] p-6 backdrop-blur-lg lg:mx-auto lg:flex">
          <div>
            <h2 className="font-nohemi mb-2 text-center text-[33px] font-bold text-white">
              Sign up for our newsletter
            </h2>
            <p className="font-nohemi text-center text-base font-medium text-[#8896AB]">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <div className="lg:flex lg:max-w-115 lg:flex-col lg:items-end lg:space-y-2.5">
            <div className="mx-auto mb-4 flex max-w-80 flex-col items-start space-y-4 gap-x-6 lg:mb-0 lg:min-w-115 lg:flex-row lg:justify-between">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-[#D5DAE1] bg-white"
              />
              <Button className="font-poppins h-9.5 rounded-[4px] bg-[#01FFFF] text-sm text-[#001325] hover:bg-[#01FFFF]">
                Subscribe
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="font-poppins h-9.5 rounded-[4px] bg-[#01FFFF] text-sm text-[#001325] hover:bg-[#01FFFF]"
              >
                Smart Contract
              </Button>
            </div>
            <div className="text-center text-[10px] font-medium text-white">
              We care about your data in our{" "}
              <Link href="/privacy-policy" className="text-[#01FFFF]">
                privacy policy
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <div className="relative max-w-440 lg:mx-auto">
          <Link href="/#home">
            <Image
              src="/to-top.svg"
              alt="footer"
              width={87}
              height={87}
              className="mx-auto"
            />
          </Link>
          <div>
            <p className="font-nohemi mb-2 text-center text-xs font-bold text-white lg:absolute lg:top-6">
              <a
                href="https://popsy.gitbook.io/popsy-docs/legal-disclaimer/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Terms & Conditions
              </a>
              {" | "}
              <a
                href="https://popsy.gitbook.io/popsy-docs/legal-disclaimer/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </p>
            <p className="text-center text-xs font-medium text-[#8896AB] lg:absolute lg:right-0 lg:bottom-2">
              &copy; 2025 POPSY. Built with frost by magical devs.
            </p>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-[90%] max-w-md rounded-[10px] border border-[#FFFFFF80] bg-[#00000033] p-6 text-white backdrop-blur-lg">
              <h2 className="mb-4 text-center text-2xl font-bold">
                Smart Contract
              </h2>
              <div className="flex items-center justify-between rounded-md bg-white p-3 text-black">
                <span className="text-sm break-all">{contractAddress}</span>
                <ClipboardDocumentIcon
                  className="h-5 w-5 cursor-pointer text-black"
                  onClick={copyToClipboard}
                />
              </div>
              {copied && (
                <p className="mt-2 text-center text-sm text-green-400">
                  Copied!
                </p>
              )}
              <Button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 w-full bg-[#01FFFF] text-[#001325] hover:bg-[#01FFFF]"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
