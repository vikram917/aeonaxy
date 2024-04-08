import BoxCard3 from "@/components/BoxCard3";
import PageHeading from "@/components/PageHeading";
import PrimaryBtn from "@/components/PrimaryBtn";
import { pagedata4, pagedata1 } from "@/utils/data";
import ChildHeader from "@/components/ChildHeader";


export default function Personalize() {
  return (
    <div className="h- screen p-6 space-y-4 items-center justify-center flex flex-col md:p-20 md:space-y-20">
      <ChildHeader path={pagedata4.path}/>
      <div className="text-center p-4">
        <PageHeading title={pagedata4.title} desc={pagedata4.desc} />
      </div>
      <div className="flex flex-col space-y-2 lg:space-y-0 md:flex-row md:space-x-2">
        {pagedata4.subData.map((item) => (
          <BoxCard3 
            key={item.id}
            expressions={item.expressions}
            title={item.title}
            level={item.level}
          />
        ))}
      </div>
      <PrimaryBtn btnName={pagedata1.btnName} path={"/pages/5"}/>
    </div>
  );
}
