import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* main div */}
      <div>
        {/* firstbox */}
        <div className="relative min-h-screen ">
          <div
            className="absolute inset-0 bg-contain bg-center z-[-1]"
            style={{ backgroundImage: "url('/654334612da0ca9c82851e206c4b922b.jpeg')" }}
          ></div>
          {/* nav bar */}
          <div className=" ml-14 space-x-20 pt-10 float-left">
            <a href="" className="hover:text-zinc-500 ">Merch</a>
            <a href="" className="hover:text-zinc-500 ">Press</a>
            <a href="" className="hover:text-zinc-500  ">Tour</a></div>
          <div>
            {/* middle text */}
            <Image className="text-white mt-10 float-left ml-52"
              src={"/Group.png"}
              alt="am awsome image"
              width={200}
              height={200}
            />
            {/* right box */}
            <div className="absolute right-56 mt-10 w-42 h-10">
              <Image className="float-left ml-0 mt-1 pl-0"
                src={"/icons8-instagram-50.png"}
                alt="am awsome image"
                width={26}
                height={20}
              />
              <button className="w-24 h-10 bg-pink-200 ml-6 text-white rounded-md ">Contact</button>
            </div>
          </div>
        </div>
        {/* second box */}
        <div className=" w-full h-screen -mt-56 bg-white">
          <div className=" w-80 h-72 ml-80 mt-32 float-left ">
            <p className="text-black text-3xl font-bold text-justify">New album available
              on vynil on June 15th</p>
            <p className="text-black pt-14 text-xs ">Featuring “Dummy,” as well as non-album tracks “Jail Time” and “Mexican Vacation.” A very limited run of 500 copies pressed on beautiful 180 gram vinyl. Get it before it’s gone!</p>
            <button className="w-20 h-10 bg-rose-300 ml-0 text-white text-xs rounded-sm mt-14 ">Listen now</button>
          </div>
          <div className=" rounded-sm w-96 h-96  mt-20 absolute right-60 bg-rose-200">
            <Image className=" w-96 h-80 mt-10"
              src={"/d9d2dae5632b7bf0f519bbf1fe2300ed.png"}
              alt="an awsome image"
              width={200}
              height={200}
            />
          </div>

        </div>
        {/* third box */}
        <div className=" w-full h-screen -mt-40 bg-red-300">
          <p className="text-3xl font-bold text-center pt-10"> Upcoming Dates</p>
          <div className="> w-56 h-52 ml-60 mt-32 float-left ">
            <p className="text-center text-xs mt-2">une 27th</p>
            <p className="text-3xl font-semibold  text-center mt-3">Ziggo Dome</p>
            <p className="text-3xl font-semibold text-center mt-1">Arena</p>
            <p className="text-xs  text-center mt-3">Amsterdam, NL</p>
            <p className="text-xs  text-center mt-1">10 PM </p>
          </div>
          <div className="> w-56 h-52 ml-1 mt-32 float-left ">
            <p className="text-center text-xs mt-2">une 27th</p>
            <p className="text-3xl font-semibold  text-center mt-3">Ziggo Dome</p>
            <p className="text-3xl font-semibold text-center mt-1">Arena</p>
            <p className="text-xs  text-center mt-3">Amsterdam, NL</p>
            <p className="text-xs  text-center mt-1">10 PM </p>
          </div>
          <div className="> w-56 h-52 ml-1 mt-32 float-left ">
            <p className="text-center text-xs mt-2">une 27th</p>
            <p className="text-3xl font-semibold  text-center mt-3">Ziggo Dome</p>
            <p className="text-3xl font-semibold text-center mt-1">Arena</p>
            <p className="text-xs  text-center mt-3">Amsterdam, NL</p>
            <p className="text-xs  text-center mt-1">10 PM </p>
          </div> <div className=" w-56 h-52 ml-1 mt-32 float-left ">
            <p className="text-center text-xs mt-2">une 27th</p>
            <p className="text-3xl font-semibold  text-center mt-3">Ziggo Dome</p>
            <p className="text-3xl font-semibold text-center mt-1">Arena</p>
            <p className="text-xs  text-center mt-3">Amsterdam, NL</p>
            <p className="text-xs  text-center mt-1">10 PM </p>
            <button className="w-32 h-10 bg-transparent border hover:bg-red-400 mt-14 -ml-80 text-white rounded-md  ">Buy Tickects</button>
          </div>
        </div>


        {/* fourth box */}
        <div className=" w-full h-screen -mt-48 bg-white">
          <p className="text-3xl font-bold text-center pt-10 text-black" >Merch</p>
          <div className=" bg-rose-100 w-60 h-60 ml-96 mt-10">
            <Image className=" w-60 h-56 mt-3"
              src={"/d9d2dae5632b7bf0f519bbf1fe2300ed.png"}
              alt="an awsome image"
              width={200}
              height={200}
            />
          </div>
          <div className=" bg-rose-200 w-60 h-60 ml-96 mt-7 float-left">
            <Image className=" w-60 h-60 mt-0"
              src={"/004948e2facf2c363a339a7d3df75d43 (1).png"}
              alt="an awsome image"
              width={100}
              height={200}
            />
          </div>
          <div className=" w-80 h-3/4 ml-10 -mt-60 float-left">
            <Image className=" w-80 h-full mt-0"
              src={"/d0dafa8548a44416eebe11f6f8712546.jpeg"}
              alt="an awsome image"
              width={100}
              height={200}
            /></div>
        </div>

        {/* fifth box */}
        <div className=" w-full h-screen  bg-red-300">
          <p className="text-3xl font-bold text-center pt-10 " >Press</p>
          <div className=" w-80 h-3/4 ml-40 mt-20 float-left">
            <p className="text-xs text-left mt-3">June 27th</p>
            <p className=" text-left font-black mt-3">Additional Tour Dates Announced</p>
            <p className="text-xs text-left mt-3">We’re only halfway through summer, but rock legend Vandam is already giving us more to look forward to in the fall.</p>
            <p className="text-xs font-medium mt-6">read more</p>
            <p className="text-xs text-left mt-24">June 27th</p>
            <p className="text-left font-black mt-3">Twinning in music and life</p>
            <p className="text-xs text-left mt-3">We’re only halfway through summer, but rock legend Vandam is already giving us more to look forward to in the fall.</p>
            <p className="text-xs mt-6">read more</p>
          </div>
          <div className=" w-80 h-3/4 ml-2 mt-20 float-left">
            <p className="text-xs text-left mt-3">June 27th</p>
            <p className=" text-left font-black mt-3">Additional Tour Dates Announced</p>
            <p className="text-xs text-left mt-3">We’re only halfway through summer, but rock legend Vandam is already giving us more to look forward to in the fall.</p>
            <p className="text-xs font-medium mt-6">read more</p>
            <p className="text-xs text-left mt-24">June 27th</p>
            <p className="text-left font-black mt-3">Twinning in music and life</p>
            <p className="text-xs text-left mt-3">We’re only halfway through summer, but rock legend Vandam is already giving us more to look forward to in the fall.</p>
            <p className="text-xs mt-6">read more</p>
          </div>
          <div className=" w-80 h-3/4 ml-2 mt-20 float-left">
            <p className="text-xs text-left mt-3">June 27th</p>
            <p className=" text-left font-black mt-3">Additional Tour Dates Announced</p>
            <p className="text-xs text-left mt-3">We’re only halfway through summer, but rock legend Vandam is already giving us more to look forward to in the fall.</p>
            <p className="text-xs font-medium mt-6">read more</p>
            <p className="text-xs text-left mt-24">June 27th</p>
            <p className="text-left font-black mt-3">Twinning in music and life</p>
            <p className="text-xs text-left mt-3">We’re only halfway through summer, but rock legend Vandam is already giving us more to look forward to in the fall.</p>
            <p className="text-xs mt-6">read more</p>

          </div>
        </div>
        {/* sixth box */}
        <div className=" w-full h-52 bg-white">
          <p className="text-black text-center font-normal text-xs pt-6 " >Sign up with your email address to receive news and updates.</p>
          <input
            type="text"
            placeholder="    Email"
            className="placeholder-red-400 placeholder-opacity-75 text-xs ml-96 mt-5  border  border-gray-400 pt-1 pb-1 pr-11  focus:outline-none focus:ring-2 focus:ring-blue-500 float-left"
          />
          <button className="w-32 h-7 text-xs  shadow-sm  bg-red-400 mt-5 ml-5 text-white float-left  ">Listen Now</button>
          <p className="float-left text-xs ml-9 text-black mt-6">Or</p>
          <p className="float-left text-xs ml-7 text-black mt-6">follow us on Instagram</p>
          <Image className="float-left ml-3 mt-6 "
            src={"/Group (2).png"}
            alt="am awsome image"
            width={15}
            height={20}
          />

          <div className="mt-20 ml-96 float-none ">
            <Image className="ml-48  "
              src={"/Group (3).png"}
              alt="am awsome image"
              width={200}
              height={200}
            />
          </div>
          <p className="text-center text-black text-xs font-medium mt-3">We respect your privacy</p>
        </div>




      </div>
    </>
  );
} 
