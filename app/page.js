import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home - ThankBank",
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-6 md:gap-20 md:text-5xl justify-center items-center text-3xl">
          ThankBank
          <span>
            <Image
              className="invertImg"
              src="/heart.png"
              width={50}
              height={50}
              alt="ThankBank Logo"
              priority
            />
          </span>
        </div>
        <p className="text-center md:text-left">
          ThankBank lets your fans directly fund your creative projects. Empower your community and turn your ideas into reality!
        </p>
        <p className="text-center md:text-left">
          ThankBank connects creators with their fans, turning support into real-world projects.
        </p>
        <div>
          <Link href="/login">
            <button type="button" className="bg-blue-600 px-4 py-2 m-2 rounded-xl hover:rounded-full w-32">
              Start Here
            </button>
          </Link>

          <Link href="/about">
            <button type="button" className="bg-blue-600 px-4 py-2 m-2 w-32 rounded-xl hover:rounded-full">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Why Your Fans Will Support You</h2>
        <div className="flex gap-5 justify-center sm:justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full object-fill text-black" width={88} height={88} src="/support.png" alt="Fans Support" />
            <p className="font-bold text-center">Fans Want to Show Support</p>
            <p className="text-center">Your fans believe in your creativity and want to help you succeed.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full object-contain text-black" width={88} height={88} src="/vision.png" alt="Fans Invest" />
            <p className="font-bold text-center">Fans Want to Invest in Your Vision</p>
            <p className="text-center">They’re ready to financially back your projects and bring your ideas to life.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full object-contain text-black" width={88} height={88} src="/teamwork.png" alt="Fans Collaborate" />
            <p className="font-bold text-center">Fans Want to Collaborate</p>
            <p className="text-center">Your fans are excited to be part of the creative process and contribute their ideas.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive YouTube embed */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh] flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CiFoHm7HD94?si=rFSuzVz3XrcvOceR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
