import React from "react";
import { socials } from "../../../../constants";
import Social from "./Social";

const Socials = () => (
  <div className="flex gap-2">
    {socials.map((social) => (
      <Social key={social.name} name={social.name} url={social.url} />
    ))}
  </div>
);

export default Socials;
