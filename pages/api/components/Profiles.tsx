import Image from "next/image"

const Profiles = () => {
    return (
        <div className="text-white flex flex-col gap-12 w-full">
        <div className="flex gap-8">
        <div className="w-32 h-32 relative">
        <Image
              src="/assets/kamil.jpg"
              alt="ig"
              className="object-cover rounded-[100%]"
              layout="fill"
            
            />
          </div>
          <div className="2xl:text-[16px] text-[14px]">
            <h1 className="font-bold">KAMIL KURAN</h1>
            <p>513301029</p>
            <p>WOJ. MAZOWIECKIE</p>
            </div>
        </div>
        <div className="flex gap-8">
        <div className="w-32 h-32 relative">
        <Image
              src="/assets/pawel.jpg"
              alt="ig"
              className="object-cover rounded-[100%]"
              layout="fill"
            
            />
          </div>
          <div className="2xl:text-[16px] text-[14px]">
            <h1 className="font-bold">PAWEŁ ŻYWIECKI</h1>
            <p>733260140</p>
            <p>WOJ. MAZOWIECKIE</p>
            </div>
        </div>
        <div className="flex gap-8">
        <div className="w-32 h-32 relative">
        <Image
              src="/assets/bartek.jpg"
              alt="ig"
              className="object-cover rounded-[100%]"
              layout="fill"
            
            />
          </div>
          <div className="2xl:text-[16px] text-[14px]">
          <h1 className="font-bold">BARTEK GRZYWIŃSKI</h1>
          <p>798739756</p>
          <p>WOJ.POMORSKIE</p>
          </div>
        </div>
      </div>
    )
}

export default Profiles