import { Skeleton } from "antd";

const LoadingCard = () => {
  return (
    <div className="w-60 h-80 bg-white rounded-xl block shadow-lg overflow-hidden border">
      <div className="h-[70%] flex items-center justify-center mx-4">
        <Skeleton active />
      </div>
      <div className=" w-full h-[30%] bg-slate-100">
        <div className="flex flex-col w-full h-full justify-center px-4 gap-y-1">
            <Skeleton.Input style={{ width: 100 }} size="small" active />
            <Skeleton.Input style={{ width: 100 }} size="small" active />
            <Skeleton.Input style={{ width: 100 }} size="small" active />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
