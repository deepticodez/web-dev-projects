import HappyTracker from "./HappyTracker"
import SadTracker from "./SadTracker"
import HappyIncrementor from "./HappyIncrementor"
import SadIncrementor from "./SadIncrementor"

function App() {

  return (
    <div className="p-2 space-y-2">
      <HappyTracker/>
      <SadTracker/>
      <HappyIncrementor/>
      <SadIncrementor/>
    </div>
  )
}

export default App
