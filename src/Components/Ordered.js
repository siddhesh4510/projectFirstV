import React from "react";
import { useHistory } from "react-router-dom";


function Ordered() {
  const history = useHistory();
  setTimeout(() => {
    history.push("/");
  }, 5000);

  return (
    <div>
      {/* <h3> Ordered and you will be redirected to homepage in 5 seconds ...</h3> */}
    </div>
  );
}
export default Ordered;