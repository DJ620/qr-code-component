import Image from "next/image";
import qrCode from "../assets/image-qr-code.png";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-80 h-[497px] bg-white rounded-2xl p-4 text-center shadow-sm">
        <Image src={qrCode} alt="QR Code" className="h-72 w-72 rounded-xl" />
        <div className="border-black border w-72 h-32 px-3 mt-6">
          <strong className="text-xl text-dark-blue">
            Improve your front-end skills by building projects
          </strong>
          <p className="text-sm px-2 mt-3 text-gray">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
