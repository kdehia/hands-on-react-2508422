import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {/* {
        (() => {
          if (count === 0) {
            return "Click to Support"
          }
          else {
            return `Support ${count}`
          }

        })()
      } */}
      {count === 0 ? "Click to Support" : `Support ${count}`}
    </button>
  );
}