import BoxCard from "@/components/BoxCard";
import PageHeading from "@/components/PageHeading";
import PrimaryBtn from "@/components/PrimaryBtn";
import { pagedata1 } from "@/utils/data";

export default function Personalize() {
  return (
    <div className="h-screen p-6 space-x-4 space-y-4 items-center justify-center flex flex-col lg:flex md:flex-col lg:flex-col md:p-20 md:space-y-10">
      <div className="space-y-2 text-center md:space-y-4">
        <PageHeading title={pagedata1.title} desc={pagedata1.desc} star={pagedata1.star} />
      </div>
      <div className="w-auto space-y-2 md:space-y-4 md:w-[600px] lg:w-[800px]">
        {pagedata1.subData.map((item) => (
          <BoxCard
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <PrimaryBtn btnName={pagedata1.btnName} path={"/pages/2"} />
    </div>
  );
}
