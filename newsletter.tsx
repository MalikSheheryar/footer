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
      {/* ✅ Formspree form wraps only email + subscribe button */}
      <form
        action="https://formspree.io/f/mjkevkez" // <-- Replace this with your actual Formspree URL
        method="POST"
        className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4"
      >
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="border-2 border-[#D5DAE1] bg-white"
        />
        <Button
          type="submit"
          className="font-poppins h-9.5 rounded-[4px] bg-[#01FFFF] text-sm text-[#001325] hover:bg-[#01FFFF]"
        >
          Subscribe
        </Button>
      </form>

      {/* ✅ Smart Contract button in the same row */}
      <Button
        onClick={() => setIsModalOpen(true)}
        className="font-poppins h-9.5 rounded-[4px] bg-[#01FFFF] text-sm text-[#001325] hover:bg-[#01FFFF]"
      >
        Smart Contract
      </Button>
    </div>

    {/* Privacy Policy */}
    <div className="text-center text-[10px] font-medium text-white">
      We care about your data in our{" "}
      <a
        href="https://popsy.gitbook.io/popsy-docs/legal-disclaimer/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#01FFFF] hover:underline"
      >
        Privacy Policy
      </a>
    </div>
  </div>
</div>;
