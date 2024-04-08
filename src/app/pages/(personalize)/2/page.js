import BoxCard from "@/components/BoxCard";
import PageHeading from "@/components/PageHeading";
import PrimaryBtn from "@/components/PrimaryBtn";
import { pagedata2 } from "@/utils/data";
import ChildHeader from "@/components/ChildHeader";


export default function Personalize( ) {
 
  return (
    <div className="h-screen p-6 space-y-4 items-center justify-center flex flex-col md:p-20 md:space-y-10">
      <ChildHeader path={pagedata2.path}/>
      <div className="space-y-2 text-center md:space-y-4">
      <PageHeading title={pagedata2.title} desc={pagedata2.desc} />
      </div>
      <div className="w-auto space-y-2 md:space-y-4 md:w-[600px] lg:w-[800px]">
        {pagedata2.subData.map((item) => (
          <BoxCard
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <PrimaryBtn btnName={pagedata2.btnName} path={"/pages/3"}/>
    </div>
  );
}
