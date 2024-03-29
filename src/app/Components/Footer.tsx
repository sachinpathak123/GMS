"use client";
import React from "react";

interface props {
  ClassName: string;
}
const Contact = (props: props) => {

  return (
    <div className={props.ClassName}>
      <div className="bg-custom-purple w-3/4 flex justify-evenly h-48 flex-col items-center text-center rounded-md">
        <h4 className=" pt-5  text-white">Get access to exclusive updates</h4>
        <form className="w-full p-3 lg:p-0 lg:w-1/2 m-5 ">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center mx-3 pointer-events-none"></div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-5 ps-5 lg:ps-10 text-sm lg:text-xl text-gray-900 border border-gray-300 rounded bg-white placeholder:text-[#2E3E5C] focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#1e1e1e97] hover:bg-custom-purple hover:transition-colors transition-colors font-inter font-medium  text-xs md:text-sm px-2 md:px-10 py-3 md:py-2 "
              style={{
                boxShadow: "0px 6px 20px 0px rgba(112,111,229,0.50)",
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <Contact
        ClassName={"flex flex-row justify-center  translate-y-1/3 z-50"}
      />
      <footer className="text-gray-600 bg-purple-200 -z-10  body-font">
        <div className="container  px-5 pt-44 pb-24 mx-auto flex justify-center items-center lg:items-start md:flex-row  md:flex-nowrap flex-wrap flex-col">
          <div className="w-1/3 gap-3 flex-shrink-0 flex items-center justify-center flex-col md:mx-0 p-100 text-center md:text-left">
            <a className="flex h-auto title-font font-medium items-center w-[150px]  md:justify-start justify-center text-gray-900">
              <img className="w-full h-full" src="/getmaxlogo.png" alt="" />
            </a>
            <div className="flex flex-row">
              <svg
                className=" scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 6C19.1112 6 18.4992 6.0204 16.5792 6.108C14.6628 6.1956 13.3536 6.5004 12.2088 6.9456C11.0088 7.3968 9.9204 8.1048 9.0204 9.0216C8.10507 9.92056 7.39663 11.0082 6.9444 12.2088C6.5016 13.3536 6.1956 14.664 6.108 16.5804C6.0216 18.4992 6 19.11 6 24C6 28.89 6.0204 29.5008 6.108 31.4208C6.1956 33.3372 6.5004 34.6464 6.9456 35.7912C7.3968 36.9912 8.1048 38.0796 9.0216 38.9796C9.92058 39.8949 11.0082 40.6033 12.2088 41.0556C13.3536 41.4996 14.6628 41.8044 16.5792 41.892C18.4992 41.9796 19.1112 42 24 42C28.8888 42 29.5008 41.9796 31.4208 41.892C33.3372 41.8044 34.6464 41.4996 35.7912 41.0544C36.9912 40.6032 38.0796 39.8952 38.9796 38.9784C39.8949 38.0794 40.6034 36.9918 41.0556 35.7912C41.4996 34.6464 41.8044 33.3372 41.892 31.4208C41.9796 29.5008 42 28.8888 42 24C42 19.1112 41.9796 18.4992 41.892 16.5792C41.8044 14.6628 41.4996 13.3536 41.0544 12.2088C40.6025 11.0077 39.894 9.91959 38.9784 9.0204C38.0794 8.10507 36.9918 7.39663 35.7912 6.9444C34.6464 6.5016 33.336 6.1956 31.4196 6.108C29.5008 6.0216 28.89 6 24 6ZM24 9.2436C28.806 9.2436 29.376 9.2616 31.2744 9.348C33.0288 9.4284 33.9816 9.72 34.6164 9.9684C35.4564 10.2936 36.0564 10.6848 36.6864 11.3136C37.3164 11.9436 37.7064 12.5436 38.0316 13.3836C38.2788 14.0184 38.5716 14.9712 38.652 16.7256C38.7384 18.624 38.7564 19.194 38.7564 24C38.7564 28.806 38.7384 29.376 38.652 31.2744C38.5716 33.0288 38.28 33.9816 38.0316 34.6164C37.7435 35.3983 37.2839 36.1056 36.6864 36.6864C36.1057 37.284 35.3983 37.7437 34.6164 38.0316C33.9816 38.2788 33.0288 38.5716 31.2744 38.652C29.376 38.7384 28.8072 38.7564 24 38.7564C19.1928 38.7564 18.624 38.7384 16.7256 38.652C14.9712 38.5716 14.0184 38.28 13.3836 38.0316C12.6017 37.7435 11.8944 37.2839 11.3136 36.6864C10.7162 36.1055 10.2566 35.3982 9.9684 34.6164C9.7212 33.9816 9.4284 33.0288 9.348 31.2744C9.2616 29.376 9.2436 28.806 9.2436 24C9.2436 19.194 9.2616 18.624 9.348 16.7256C9.4284 14.9712 9.72 14.0184 9.9684 13.3836C10.2936 12.5436 10.6848 11.9436 11.3136 11.3136C11.8943 10.7161 12.6017 10.2564 13.3836 9.9684C14.0184 9.7212 14.9712 9.4284 16.7256 9.348C18.624 9.2616 19.194 9.2436 24 9.2436Z"
                  fill="url(#paint0_radial_1631_4824)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 30.0059C23.2113 30.0059 22.4303 29.8506 21.7016 29.5488C20.973 29.2469 20.3109 28.8045 19.7532 28.2468C19.1955 27.6891 18.7531 27.027 18.4512 26.2983C18.1494 25.5697 17.994 24.7887 17.994 23.9999C17.994 23.2112 18.1494 22.4302 18.4512 21.7015C18.7531 20.9729 19.1955 20.3108 19.7532 19.7531C20.3109 19.1954 20.973 18.753 21.7016 18.4511C22.4303 18.1493 23.2113 17.9939 24 17.9939C25.5929 17.9939 27.1206 18.6267 28.2469 19.7531C29.3733 20.8794 30.006 22.4071 30.006 23.9999C30.006 25.5928 29.3733 27.1205 28.2469 28.2468C27.1206 29.3732 25.5929 30.0059 24 30.0059ZM24 14.7479C21.5463 14.7479 19.193 15.7227 17.4579 17.4578C15.7228 19.1929 14.748 21.5462 14.748 23.9999C14.748 26.4537 15.7228 28.807 17.4579 30.5421C19.193 32.2772 21.5463 33.2519 24 33.2519C26.4538 33.2519 28.8071 32.2772 30.5422 30.5421C32.2773 28.807 33.252 26.4537 33.252 23.9999C33.252 21.5462 32.2773 19.1929 30.5422 17.4578C28.8071 15.7227 26.4538 14.7479 24 14.7479ZM35.9436 14.5799C35.9436 15.16 35.7132 15.7162 35.3031 16.1264C34.8929 16.5365 34.3367 16.7669 33.7566 16.7669C33.1766 16.7669 32.6203 16.5365 32.2102 16.1264C31.8001 15.7162 31.5696 15.16 31.5696 14.5799C31.5696 13.9999 31.8001 13.4436 32.2102 13.0335C32.6203 12.6234 33.1766 12.3929 33.7566 12.3929C34.3367 12.3929 34.8929 12.6234 35.3031 13.0335C35.7132 13.4436 35.9436 13.9999 35.9436 14.5799Z"
                  fill="url(#paint1_radial_1631_4824)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1631_4824"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(24 24) rotate(90) scale(18)"
                  >
                    <stop stopColor="#8C17E8" />
                    <stop offset="1" stopColor="#6020BD" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_1631_4824"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25.3458 22.8224) rotate(90) scale(10.4295 10.5978)"
                  >
                    <stop stopColor="#8C17E8" />
                    <stop offset="1" stopColor="#6020BD" />
                  </radialGradient>
                </defs>
              </svg>
              <svg
                className="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M44 24.1213C44 13.008 35.0467 4 24 4C12.9533 4 4 13.008 4 24.1213C4 34.1667 11.312 42.4907 20.8747 44V29.9387H15.7973V24.12H20.8747V19.688C20.8747 14.6453 23.86 11.8587 28.4293 11.8587C30.616 11.8587 32.9067 12.252 32.9067 12.252V17.204H30.3827C27.8987 17.204 27.1253 18.756 27.1253 20.348V24.1213H32.672L31.7853 29.9373H27.1253V44C36.688 42.4907 44 34.1667 44 24.1213Z"
                  fill="url(#paint0_linear_1631_4825)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1631_4825"
                    x1="24"
                    y1="4"
                    x2="24"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8C17E8" />
                    <stop offset="1" stopColor="#6020BD" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M42 8.64706V39.3529C42 40.055 41.7211 40.7283 41.2247 41.2247C40.7283 41.7211 40.055 42 39.3529 42H8.64706C7.94502 42 7.27173 41.7211 6.77531 41.2247C6.27889 40.7283 6 40.055 6 39.3529V8.64706C6 7.94502 6.27889 7.27173 6.77531 6.77531C7.27173 6.27889 7.94502 6 8.64706 6H39.3529C40.055 6 40.7283 6.27889 41.2247 6.77531C41.7211 7.27173 42 7.94502 42 8.64706ZM16.5882 19.7647H11.2941V36.7059H16.5882V19.7647ZM17.0647 13.9412C17.0675 13.5407 16.9914 13.1436 16.8407 12.7726C16.69 12.4016 16.4677 12.0638 16.1866 11.7787C15.9054 11.4936 15.5707 11.2666 15.2018 11.1108C14.8329 10.955 14.4369 10.8734 14.0365 10.8706H13.9412C13.1268 10.8706 12.3458 11.1941 11.7699 11.7699C11.1941 12.3458 10.8706 13.1268 10.8706 13.9412C10.8706 14.7555 11.1941 15.5366 11.7699 16.1124C12.3458 16.6883 13.1268 17.0118 13.9412 17.0118C14.3417 17.0216 14.7402 16.9525 15.1139 16.8083C15.4877 16.664 15.8293 16.4476 16.1194 16.1713C16.4095 15.895 16.6423 15.5642 16.8045 15.1979C16.9667 14.8316 17.0551 14.437 17.0647 14.0365V13.9412ZM36.7059 26.4141C36.7059 21.3212 33.4659 19.3412 30.2471 19.3412C29.1932 19.2884 28.1438 19.5129 27.2037 19.9922C26.2637 20.4715 25.4657 21.189 24.8894 22.0729H24.7412V19.7647H19.7647V36.7059H25.0588V27.6953C24.9823 26.7725 25.273 25.8567 25.8678 25.1469C26.4625 24.4372 27.3133 23.9908 28.2353 23.9047H28.4365C30.12 23.9047 31.3694 24.9635 31.3694 27.6318V36.7059H36.6635L36.7059 26.4141Z"
                  fill="url(#paint0_linear_1631_4826)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1631_4826"
                    x1="24"
                    y1="6"
                    x2="24"
                    y2="42"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6020BD" />
                    <stop offset="1" stopColor="#8C17E8" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="40"
                viewBox="0 0 43 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2967 21.3155L0.300781 0.833374H12.9707L22.8449 13.4927L33.3938 0.890373H40.3718L26.2187 17.8183L43.0003 39.3334H30.3682L19.6765 25.6431L8.26203 39.2954H1.2463L16.2967 21.3155ZM32.2094 35.5384L8.06954 4.62835H11.128L35.2375 35.5384H32.2094Z"
                  fill="url(#paint0_linear_1866_1443)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1866_1443"
                    x1="21.6505"
                    y1="0.833374"
                    x2="21.6505"
                    y2="39.3334"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.9999" stopColor="#6020BD" />
                    <stop offset="1" stopColor="#8C17E8" stopOpacity="0.36" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p
              className="text-[rgba(140,23,232,0.54)] text-base not-italic font-inter font-normal leading-6;
  font-family: Roboto"
            >
              skyrev theme 2021
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-inter  tracking-widest text-sm mb-3 text-[#8C17E8] text-[25px] not-italic font-black leading-[normal] uppercase;
              "
              >
                CATEGORIES
              </h2>
              <nav
                className="list-none text-black text-lg not-italic font-normal leading-5;
  font-['Lato] mb-10"
              >
                <li>
                  <a className="font-inter  text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-inter tracking-widest text-sm mb-3 text-[#8C17E8] text-[25px] not-italic font-black leading-[normal] uppercase;
               "
              >
                CATEGORIES
              </h2>
              <nav className="list-none text-black text-lg not-italic font-normal leading-5; mb-10">
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-inter  tracking-widest text-sm mb-3 text-[#8C17E8] text-[25px] not-italic font-black leading-[normal] uppercase;
                "
              >
                CATEGORIES
              </h2>
              <nav
                className="list-none text-black text-lg not-italic font-normal leading-5;
  font-family: Lato mb-10"
              >
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="font-inter text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
