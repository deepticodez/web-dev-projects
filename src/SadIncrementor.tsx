import { type FC, memo } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = () => {
  const dispatch= useDispatch();

  function increment(){
    dispatch(sadButtonClicked);
  }
  return(
    <div>
        <h3>Are  you sad?</h3>
        <button onClick={increment} className="bg-blue-500 p-2 rounded-xl">Yes</button>

    </div>
  )
};



export default memo(SadIncrementor);
