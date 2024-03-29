import { memo } from "react";
import { socials } from "constants/index";
import Social from "./Social";

const Socials = () => (
  <div className="flex gap-2">
    {socials.map((social) => (
      <Social key={social.name} name={social.name} url={social.url} />
    ))}
  </div>
);

export default memo(Socials);
