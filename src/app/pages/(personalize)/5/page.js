import { pagedata5, pagedata1 } from "@/utils/data";
import BoxCard2 from "@/components/BoxCard2";
import PrimaryBtn from "@/components/PrimaryBtn";
import ChildHeader from "@/components/ChildHeader";

export default function Personalize() {
  return (
    <div className="p-6 h-scree items-center space-y-4 justify-center flex flex-col md:p-20 md:space-y-20">
      <ChildHeader path={pagedata5.path} />
      <div className=" w-10/12">
        <BoxCard2
          img={pagedata5.img}
          title={pagedata5.title}
          desc={pagedata5.desc}
          author={pagedata5.author}
          star={pagedata5.star}
          style={pagedata5.style}
        />
      </div>
      <PrimaryBtn btnName={pagedata5.btnName} path={"/pages/6"} />
    </div>
  );
}
