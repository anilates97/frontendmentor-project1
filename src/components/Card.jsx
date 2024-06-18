import backImg from "../assets/images/image-product-desktop.jpg";
import backImgMobile from "../assets/images/image-product-mobile.jpg";
import iconCart from "../assets/images/icon-cart.svg";
import { useState } from "react";
import { useEffect } from "react";

function Card() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = windowWidth <= 450 ? backImgMobile : backImg;
  return (
    <div className="md:flex md:justify-center md:items-center md:h-screen">
      <div className="flex md:flex-row flex-col md:w-[600px] w-auto bg-neutral-white rounded-lg md:h-[450px] h-[540px] ">
        <div className=" md:flex-1 ">
          {/* left side */}

          <img
            src={backgroundImage}
            alt=""
            className="rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none rounded-tr-lg md:h-[450px] h-[200px] w-screen md:w-[300px] "
          />
        </div>

        <div className="flex flex-col md:flex-1 ">
          {/* right side */}

          <span className="font-montserrat tracking-[7px] mt-7 mb-4 text-left md:text-[14px] text-[10px] text-neutral-darkGrayishblue ml-5 md:ml-7 ">
            PERFUME
          </span>
          <div className="md:mb-5 mb-3 font-fraunces md:text-[37px] text-left md:leading-[2.4rem] leading-[1.4rem] text-neutral-veryDarkBlue text-[25px] ml-5 md:ml-7">
            <span>
              Gabrielle Essence <br className="md:hidden" /> Eau{" "}
              <br className="hidden md:block" /> De Parfum
            </span>
          </div>
          <div className="font-montserrat  text-left mb-6 md:text-[14px] text-[12px] leading-[1.4rem] ml-5 md:ml-7">
            <span className="text-neutral-darkGrayishblue break-words">
              A floral, solar and voluptuous <br className="md:hidden" />{" "}
              interpretation composed by <br className="hidden md:block" />{" "}
              Olivier
              <br className="md:hidden" /> Polge, Perfumer-Creator{" "}
              <br className="hidden md:block" /> for the House of CHANEL.
            </span>
          </div>
          <div className="flex space-x-5 justify-start items-center ml-5 md:ml-7">
            <span className="text-primary-darkCyan md:text-3xl  text-xl font-fraunces ">
              $149.99
            </span>
            <span className="text-neutral-darkGrayishblue font-montserrat text-[10px] md:text-[14px]">
              $169.99
            </span>
          </div>

          <button className="bg-primary-darkCyan text-neutral-white p-2 md:mr-7 ml-5 w-auto mr-5  md:ml-7 md:w-55 rounded-lg md:mt-5 mt-3 flex items-center gap-x-2 justify-center active:bg-primary-veryDarkCyan">
            <span>
              <img src={iconCart} alt="" />
            </span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
