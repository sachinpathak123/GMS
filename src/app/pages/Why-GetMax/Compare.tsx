import React from "react";

const Compare = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-screen">
        <div className="mx-20 my-32 p-5 shadow-2xl rounded-md">
          <div className="grid grid-rows-3 gap-8">
            <div className="py-5">
              <h2 className="text-center font-medium text-2xl">
                Medical Billings
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-6">
                <img src="/check_tick.png" alt="an image" className="w-5 h-5" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex items-center gap-6">
                <img src="/check_tick.png" alt="an image" className="w-5 h-5" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex items-center gap-6">
                <img src="/check_tick.png" alt="an image" className="w-5 h-5" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex items-center gap-6">
                <img src="/check_tick.png" alt="an image" className="w-5 h-5" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex items-center gap-6">
                <img src="/check_tick.png" alt="an image" className="w-5 h-5" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="grid py-9 px-14">
              <button className="bg-red-400 text-white rounded-md font-semibold text-center">
                ONLY 4 BENEFITS!
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="mx-20 bg-purple-100 h-fit p-5 shadow-2xl rounded-md">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="py-5">
                <h2 className="text-center font-semibold text-2xl text-custom-purple">
                  Medical Billings
                </h2>
              </div>
              <div className="py-5 flex flex-col gap-8 items-center justify-center">
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/check_tick.png"
                    alt="an image"
                    className="w-5 h-5"
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="mx-20 my-32 p-5 shadow-2xl rounded-md">
            <div className="grid grid-rows-3 gap-8">
              <div className="py-5">
                <h2 className="text-center font-medium text-2xl">
                  Medical Billings
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-6">
                  <img src="/wrong.png" alt="an image" className="w-5 h-5" />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/wrong.png" alt="an image" className="w-5 h-5" />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/wrong.png" alt="an image" className="w-5 h-5" />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/wrong.png" alt="an image" className="w-5 h-5" />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/wrong.png" alt="an image" className="w-5 h-5" />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="grid py-9 px-14">
                <button className="bg-red-400 text-white rounded-md font-semibold text-center">
                  CHECK ERRORS!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
