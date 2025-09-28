import { type FC, memo } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = () => {
  const dispatch= useDispatch();

  function increment(){
    dispatch(happyButtonClicked);
  }

  return(
    <div>
        <h3>Are  you happy?</h3>
        <button onClick={increment} className="bg-orange-700 p-2 rounded-xl">Yes</button>

    </div>
  )
};

export default memo(HappyIncrementor);



