import Boxcard4 from "@/components/Boxcard4";
import PageHeading from "@/components/PageHeading";

import { page7 } from "@/utils/data";

export default function Personalize() {
  return (
    <div className="w-screen h-screen relative p-4 items-center justify-center flex flex-col space-y-8 md:space-y-12 lg:space-y-16">
      <div className="text-center md:space-y-4">
        <PageHeading title={page7.title} desc={page7.desc} />
      </div>
      <div className="space-y-2 md:flex md:justify-center md:flex-row md:space-x-4 md:space-y-0">
        {page7.subdata.map((item) => (
          <Boxcard4
            key={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            suggest={item.suggest}
          />
        ))}
      </div>
    </div>
  );
}
