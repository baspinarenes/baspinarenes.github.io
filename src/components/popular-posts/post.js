import React from "react";
import { Link } from "gatsby"
// import { UserIcon } from "@heroicons/react/solid";

const Post = ({ views, name, desc, slug, isTranslate }) => {
  return (
    <Link className="post" to={`blog${slug}`}>
      <div className="flex justify-between">
        {isTranslate && <p className="font-bold text-yellow-500">TRANSLATE</p>}
        {/* <div className="post-views">
          <UserIcon />
          <span>{views}</span>
        </div> */}
      </div>
      <h4 className="post-name">{name}</h4>
      <p className="post-desc">{desc}</p>
    </Link>
  );
};

export default Post;
