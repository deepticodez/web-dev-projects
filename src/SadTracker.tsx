import { type FC, memo } from "react";
import { useSelector } from "react-redux";
import { SadCountSelector } from "./selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = () => {
  const sadCount= useSelector(SadCountSelector);
  return(
    <div className="bg-blue-500 px-8 py-4 rounded-2xl">
        You were sad {sadCount} times.
    </div>
  )
};



export default memo(SadTracker);
