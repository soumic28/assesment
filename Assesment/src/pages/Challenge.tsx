import { FunctionComponent, useCallback } from "react";

const Challenge: FunctionComponent = () => {
  const onButtonFrameClick = useCallback(() => {
    // Please sync "Challenge #01 ~ Mobile Version" to the project
  }, []);

  return (
    <div className="w-full relative shadow-[163px_309px_98px_rgba(0,_0,_0,_0),_105px_198px_90px_rgba(0,_0,_0,_0.03),_59px_111px_76px_rgba(0,_0,_0,_0.09),_26px_49px_56px_rgba(0,_0,_0,_0.15),_7px_12px_31px_rgba(0,_0,_0,_0.18)] bg-honeydew h-[1080px] overflow-hidden text-left text-[40px] text-gray-200 font-aladin">
      <div className="absolute top-[0px] right-[-1px] shadow-[-139px_0px_39px_rgba(0,_0,_0,_0),_-89px_0px_36px_rgba(0,_0,_0,_0.01),_-50px_0px_30px_rgba(0,_0,_0,_0.03),_-22px_0px_22px_rgba(0,_0,_0,_0.04),_-6px_0px_12px_rgba(0,_0,_0,_0.05)] w-[960px] h-[1080px]">
        <div className="absolute top-[0px] right-[0px] rounded-tl-6xl rounded-tr-none rounded-br-none rounded-bl-6xl bg-gray-100 w-[960px] h-[1080px]" />
        <div className="absolute top-[calc(50%_-_465.5px)] left-[101px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-center justify-start gap-[30px]">
                <div className="flex flex-col items-center justify-start gap-[50px]">
                  <div className="flex flex-col items-center justify-start gap-[40px]">
                    <div className="flex flex-row items-center justify-center gap-[16px]">
                      <img
                        className="w-[41px] relative h-[40.4px]"
                        alt=""
                        src="/vector.svg"
                      />
                      <div className="relative opacity-[0.9]">Leaf</div>
                    </div>
                    <div className="relative text-[34px] font-semibold font-poppins text-black-dark opacity-[0.7]">
                      Create Account
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[70px] text-xl text-black-dark font-poppins">
                    <div className="flex flex-col items-start justify-start gap-[30px] opacity-[0.7]">
                      <div className="w-[758.3px] relative h-[108.2px]">
                        <div className="absolute top-[0px] left-[2.53px] font-medium opacity-[0.8]">
                          Full Name
                        </div>
                        <div className="absolute top-[39.64px] left-[0px] w-[758.3px] h-[68.6px]">
                          <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[758.3px] h-[68.6px] border-[2.5px] border-solid border-gray-300" />
                          <div className="absolute top-[19.36px] left-[27px] flex flex-row items-center justify-start gap-[8px]">
                            <img
                              className="w-6 relative h-6 opacity-[0.5]"
                              alt=""
                              src="/user.svg"
                            />
                            <div className="relative opacity-[0.5]">
                              Enter Full Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[758.3px] relative h-[108.2px]">
                        <div className="absolute top-[0px] left-[2.53px] font-medium opacity-[0.8]">
                          Email
                        </div>
                        <div className="absolute top-[39.64px] left-[0px] w-[758.3px] h-[68.6px]">
                          <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[758.3px] h-[68.6px] border-[2.5px] border-solid border-gray-300" />
                          <div className="absolute top-[19.36px] left-[27px] flex flex-row items-center justify-start gap-[8px]">
                            <img
                              className="w-6 relative h-6 opacity-[0.5]"
                              alt=""
                              src="/mail02.svg"
                            />
                            <div className="relative opacity-[0.5]">
                              Enter Your Email
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[758.3px] relative h-[108.2px]">
                        <div className="absolute top-[0px] left-[2.53px] font-medium opacity-[0.8]">
                          Password
                        </div>
                        <div className="absolute top-[39.64px] left-[0px] w-[758.3px] h-[68.6px]">
                          <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[758.3px] h-[68.6px] border-[2.5px] border-solid border-gray-300" />
                          <div className="absolute top-[19.36px] left-[27px] flex flex-row items-center justify-start gap-[8px]">
                            <img
                              className="w-6 relative h-6"
                              alt=""
                              src="/lock.svg"
                            />
                            <div className="relative opacity-[0.5]">
                              Enter Your Password
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[750px] relative h-[70px] text-[22px] text-gray-100">
                      <div
                        className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_375px)] rounded-tl-11xl rounded-tr-xl rounded-br-11xl rounded-bl-xl bg-darkolivegreen w-[750px] h-[70px] cursor-pointer"
                        onClick={onButtonFrameClick}
                      />
                      <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_46px)] font-semibold">
                        Sign-Up
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[26px] font-medium font-poppins text-silver">
                  - OR -
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[36px]">
              <div className="rounded-81xl flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-gray-400">
                <img
                  className="w-[30px] relative h-[30px] overflow-hidden shrink-0 opacity-[0.9]"
                  alt=""
                  src="/social-icons.svg"
                />
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-end p-2.5 border-[1px] border-solid border-gray-400">
                <img
                  className="w-[30px] relative h-[30px] overflow-hidden shrink-0 opacity-[0.9]"
                  alt=""
                  src="/social-icons1.svg"
                />
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-end p-2.5 border-[1px] border-solid border-gray-400">
                <img
                  className="w-[30px] relative h-[30px] overflow-hidden shrink-0 opacity-[0.9]"
                  alt=""
                  src="/social-icons2.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px] opacity-[0.9] text-lg text-darkslategray font-poppins">
            <div className="relative">Already have an account?</div>
            <b className="relative text-darkolivegreen">Login</b>
          </div>
        </div>
      </div>
      <img
        className="absolute h-[55.56%] w-[31.25%] top-[22.22%] right-[59.38%] bottom-[22.22%] left-[9.38%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/autumnamico-1.svg"
      />
    </div>
  );
};

export default Challenge;
