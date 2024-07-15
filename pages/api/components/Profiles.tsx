import Image from "next/image"

const Profiles = () => {
    return (
        <div className="text-white flex flex-col gap-12">
        <div className="flex gap-6">
        <div className="2xl:w-36 2xl:h-36 w-32 h-32 relative">
        <Image
              src="/assets/kamil.jpg"
              alt="ig"
              className="object-cover shadow-2xl shadow-black rounded-[100%] border-1 border-black p-2"
              layout="fill"
            
            />
          </div>
          <div className="2xl:text-[16px] text-[14px] mt-4">
            <h1 className="font-bold">KAMIL KURAN</h1>
            <p>513301029</p>
            <p>WOJ. MAZOWIECKIE</p>
            </div>
        </div>
        <div className="flex gap-6">
        <div className="2xl:w-36 2xl:h-36 w-32 h-32 relative">
        <Image
              src="/assets/pawel2.JPG"
              alt="ig"
              className="object-cover shadow-2xl shadow-black rounded-[100%] border-1 border-black p-2"
              layout="fill"
            
            />
          </div>
          <div className="2xl:text-[16px] text-[14px] mt-4">
            <h1 className="font-bold">PAWEŁ ŻYWIECKI</h1>
            <p>733260140</p>
            <p>WOJ. MAZOWIECKIE</p>
            </div>
        </div>
        <div className="flex gap-6">
        <div className="2xl:w-36 2xl:h-36 w-32 h-32 relative">
        <Image
              src="/assets/bartek.jpg"
              alt="ig"
              className="object-cover shadow-2xl shadow-black rounded-[100%] border-1 border-black p-2"
              layout="fill"
            
            />
          </div>
          <div className="2xl:text-[16px] text-[14px] mt-4">
          <h1 className="font-bold min-w-[150px]">BARTEK GRZYWIŃSKI</h1>
          <p>798739756</p>
          <p>WOJ.POMORSKIE</p>
          </div>
        </div>
      </div>
    )
}

export default Profiles