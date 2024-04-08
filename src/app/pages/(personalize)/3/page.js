import {pagedata3} from "@/utils/data"
import BoxCard2 from "@/components/BoxCard2";
import PrimaryBtn from "@/components/PrimaryBtn";
import ChildHeader from "@/components/ChildHeader";


export default function Personalize() {
  return (
    <div className="p-6 h-scree items-center space-y-4 justify-center flex flex-col md:p-20 md:space-y-20">
      <ChildHeader path={pagedata3.path}/>
      <div className="w-10/12">
        <BoxCard2 img ={pagedata3.img} title={pagedata3.title} desc={pagedata3.desc}/>
      </div>
      <PrimaryBtn btnName={pagedata3.btnName} path={"/pages/4"}/>
    </div>
  );
}
