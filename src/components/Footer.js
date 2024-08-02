/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <div className="pb-10 mt-10">
      <div className=" md:flex">
        <div className="w-full md:w-1/2">
          <img
            src="/img/footer_logo.png"
            alt="Logo"
            className="w-1/2 mx-auto md:ml-0"
          />
        </div>
        <div className="w-full gap-10 text-white md:flex md:w-1/2">
          <div className="mt-10 text-center md:w-1/3 md:mt-0">
            <h1 className="mb-3 font-medium ">TOOLS</h1>

            <a href="#" className="block">
              Image Generator
            </a>
            <a href="#" className="block">
              Image Options
            </a>
          </div>

          <div className="mt-10 text-center md:w-1/3 md:mt-0">
            <h1 className="mb-3 font-medium ">FEATURES</h1>
            <a href="#" className="block">
              cale
            </a>
            <a href="#" className="block">
              Remove Background
            </a>
            <a href="#" className="block">
              Enhance
            </a>
            <a href="#" className="block">
              Cut out
            </a>
          </div>

          <div className="mt-10 text-center md:w-1/3 md:mt-0">
            <h1 className="mb-3 font-medium ">ABOUT</h1>
            <a href="#" className="block">
              Pricing
            </a>
            <a href="#" className="block">
              Guides
            </a>
            <a href="#" className="block">
              FAQ
            </a>
            <a href="#" className="block">
              Email
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 mt-36" />
      <p className="mx-auto mt-4 text-center text-white">
        Copyright © 2024 Besaudi.ai. All rights reserved
      </p>
    </div>
  );
}
