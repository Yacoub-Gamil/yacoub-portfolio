import { useState } from "react";
import { HiMiniDevicePhoneMobile, HiMiniEnvelope } from "react-icons/hi2";
import { IoIosSend, IoMdSend } from "react-icons/io";

function Contact() {
  const [show, setShow] = useState(false);
  return (
    <section className=" mb-[4rem] p-4 container">
      <div id="contact" className=" mt-[4rem]">
        <h1 className=" xs:text-[1.5rem] sm:text-[1.4rem] xl:text-[2.4rem] font-semibold text-white">
          <span className="xs:text-[0.8rem] sm:text-[.8rem] xl:text-[1.4rem]">
            05.
          </span>{" "}
          Contact
        </h1>
      </div>
      <form className=" w-full  mt-[3rem] flex flex-col items-center">
        <div className=" xs:w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[45rem] xl:w-[60rem]  text-white gap-6 p-4 flex flex-col rounded-xl  shadow-[0px_0px_10px_0px_#5a605e]">
          <input
            required
            placeholder="Name"
            type="text"
            className=" outline-none text-black xs:p-2 xl:p-3  font-semibold  rounded-xl"
          />
          <input
            required
            type="email"
            placeholder="Email@example.com"
            className=" xl:p-3 rounded-xl outline-none xs:p-2 font-semibold  text-black "
          />
          <textarea
            maxLength={1000}
            minLength={100}
            placeholder="Message"
            required
            className=" xl:p-3 rounded-xl outline-none xs:p-2 font-semibold  text-black "
          ></textarea>
          <div className=" w-full flex justify-center">
            <button
              to=""
              className={`flex xs:w-[9rem] lg:w-[12rem] sm:py-[.6rem] justify-center items-center lg:py-[.4rem] gap-4 xs:py-1 xs:text-[.8rem] xs:px-[.5rem] lg:text-[1.2rem] rounded-lg  shadow-[0px_0px_10px_0px_#5a605e] `}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <span className="uppercase text-white">send</span>

              <span> {!show ? <IoMdSend /> : <IoIosSend />}</span>
            </button>
          </div>
        </div>
      </form>
      <footer className=" mt-8 text-white flex justify-center ">
        <div className=" flex gap-8">
          <h2 className=" xs:text-[.8rem] sm:text-[1rem] md:text-[1.2rem] flex items-center gap-2">
            <HiMiniDevicePhoneMobile />
            <span> 01210955561</span>
          </h2>
          <h2 className=" xs:text-[.8rem] sm:text-[1rem] md:text-[1.2rem] flex items-center gap-2">
            <HiMiniEnvelope />
            <a href="mailto:yacoub-gamil@hotmail.com">
              yacoub-gamil@hotmail.com
            </a>
          </h2>
        </div>
      </footer>
    </section>
  );
}

export default Contact;