import "./src/styles/globals.scss";
import "./src/styles/components.scss";
import "./src/styles/code-theme.scss";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "prismjs/plugins/diff-highlight/prism-diff-highlight.css";

import React from "react";
import PageLayout from "./src/templates/page";

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);
