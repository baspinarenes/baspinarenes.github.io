import { memo } from "react";
import Navbar from "./Navbar";

const NormalMenu = () => (
  <div className="hidden sm:block mr-auto">
    <Navbar />
  </div>
);

export default memo(NormalMenu);
