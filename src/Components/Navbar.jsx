import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar({ data }) {
  return (
    <nav className="container py-[1.875rem] flex items-center justify-between">
      <div className="cursor-pointer">
        <Image
          src={data?.logo?.src}
          width={100}
          height={100}
          alt={data?.logo?.alt}
        />
      </div>
      <div className="border-2 border-light rounded-xl max-lg:hidden flex 2xl:gap-[3.375rem] p-2.5">
        {data?.links?.map((item) => (
          <Link
            href={item?.url}
            className="text-navlinks px-6 py-3.5 hover:text-white hover:drop-shadow-md hover:bg-lightcolor hover:rounded-lg"
          >
            {item?.label}
          </Link>
        ))}
      </div>
      <div className="cursor-pointer">
        {data?.icons?.map((icon) => (
          <Image src={icon.src} alt={icon.alt} width={100} height={100} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
