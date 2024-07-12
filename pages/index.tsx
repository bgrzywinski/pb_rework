import Image from "next/image";
import { Inter } from "next/font/google";
import ContactForm from "./api/components/ContactForm";
import { useState } from "react";
import Profiles from "./api/components/Profiles";
import Links from "./api/components/Links";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <main
      className={`w-[100vw]${inter.className} m-12`}
    > 
    <div className="flex 2xl:flex-row flex-col gap-16 justify-between ">
      <p className="text-justify text-white text-[17px] border-b border-amber-500 pb-6">
            Obecnie nasza strona jest w fazie modernizacji. <br></br> Część naszego portfolio z wydarzeń możesz sprawdzić na  naszych ​social mediach. <br></br>W  prawym dolnym rogu  sprawdzisz aktualną ​ofertę weselną na sezon 2025.<br></br> W sprawach eventowych możesz do nas ​zadzwonić lub wysłać zapytanie przez formularz kontaktowy.
      </p>
      <Links />
    </div>
    <div className="flex xl:flex-row flex-col gap-16 items-center justify-between mt-8">
      <div className="max-w-[400px]">
        <div className="max-w-[400px] flex flex-wrap mb-8 2xl:text-[25px] text-[23px] font-bold">
        <h1 className="text-white 2xl:text-[27px] text-[25px]">
          Napisz do nas,
        </h1>
        <p className="text-amber-500">krótką wiadomość, a my skontaktujemy się z Tobą tak szybko, że nawet nie zauważysz...</p>
        </div>
        {formSubmitted ? (
          <div className="flex flex-col items-center relative">
            <Image
              src="/assets/salute.png"
              alt="salute"
              width={200}
              height={200}
            />
            <p className="text-white text-center text-[20px] font-bold">Wkrótce się z Tobą skontaktujemy!</p>
          </div>
        ) : (
          <ContactForm onFormSubmit={handleFormSubmit} />
        )}
      </div>
      <div className="flex justify-center">
         <Profiles />
      </div>
      <div>
         <Image
            src="/assets/blacklogo.png"
            alt="logo"
            width={500}
            height={1}
            className="shadow-2xl shadow-black rounded-[100%] 2xl:mr-8 mr-0"
          />
          <Link
            href="https://drive.google.com/file/d/1IGiD76Jwgb1EThNJHnEmyn0Zx1-MOCOK/view?fbclid=IwZXh0bgNhZW0CMTAAAR0oINe5F-ZqffikfG7FBwsQb4Gg4uzpmRcW7ReIrkh89kek7ShSCvdaiII_aem_TlTE6_Fc6rjy22E8ZsIWjA"
            passHref
            target="_blank"
          >
          <div className="flex 2xl:gap-4 gap-2 flex-wrap py-12 cursor-pointer transition transform-y hover:scale-110 2xl:text-[30px] text-[20px] justify-center text-center font-bold">
          <p className="text-white">KLIKNIJ ABY PRZEJŚĆ DO</p><p className="text-amber-500">OFERTY</p>
          </div>
          </Link>
      </div>
    </div>
    <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </main>
  );
}
