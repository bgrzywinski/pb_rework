import Link from "next/link"
import Image from "next/image";

const Links = () => {
    return (
        <div className="flex justify-center items-center 2xl:gap-12 gap-6 2xl:my-0 my-12">
            <h1 className="text-amber-500 font-bold text-[20px]">Znajdź nas!</h1>
          <Link
            href="https://www.instagram.com/panstwo_barmanstwo/?hl=af"
            passHref
            target="_blank"
          >
            <div className="relative w-12 h-12">
            <Image
              src="/assets/ig_icon.png"
              alt="ig"
              layout="fill"
              className="object-cover cursor-pointer transition transform-y hover:scale-110"
            />
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100058561542498"
            passHref
            target="_blank"
          >
            <div className="relative w-12 h-12">
            <Image
              src="/assets/fb_icon.png"
              alt="ig"
              layout="fill"
              className="object-cover cursor-pointer transition transform-y hover:scale-110"
            />
            </div>
          </Link>
          <Link
            href="https://www.google.com/search?sca_esv=8c80ca52ec31775b&rlz=1C1CHZN_plPL971PL971&sxsrf=ADLYWII7TnhtRN0yCpaW1v2CU9MgfgOoIA:1720716648195&q=pa%C5%84stwo+barma%C5%84stwo&uds=ADvngMhHv6I8FHjkwi3JF6y5i6pBfPjm8KyuaeI0TXTdaNv1PV9pFlnbDNxBdpRcawJfNVSVUVucd65adCXtTfylBbMLZFxwmQ5nExjzqm1U8kzuZ-cJsCbe4_FsX7gf7AFbJJEhxlJK&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7vHLFGdQNXH7ruFSWJ7lmbvGb5jMUI05n-Ek1VDwRVMltZ9MM7uAUYRbTTEu7R_55wi8cVE%3D&sa=X&ved=2ahUKEwjHnsyEuZ-HAxXMRPEDHaCcCKMQ3PALegQIEhAE&biw=1920&bih=953&dpr=1"
            passHref
            target="_blank"
          >
            <p className="text-white cursor-pointer transition transform-y hover:scale-110 font-bold text-[20px]">Zobacz co o nas piszą!</p>
          </Link>
        </div>
    )
}

export default Links;