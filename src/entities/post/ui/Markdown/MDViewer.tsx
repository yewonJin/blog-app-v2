"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import {
  prism,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { Fragment } from "react";
import "./markdown.css";

type Props = {
  markdown: string;
};

export function MDViewer({ markdown }: Props) {
  const MarkdownComponents: object = {
    code({
      node,
      inline,
      className,
      ...props
    }: {
      node: any;
      inline: any;
      className: any;
      [x: string]: any;
    }) {
      const hasLang = /language-(\w+)/.exec(className || "");
      return hasLang ? (
        <Fragment>
          <SyntaxHighlighter
            language={hasLang[1]}
            PreTag="div"
            className="codeStyle dark"
            useInlineStyles={true}
            style={vscDarkPlus}
            {...props}
          >
            {props.children}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language={hasLang[1]}
            PreTag="div"
            className="codeStyle light"
            useInlineStyles={true}
            style={prism}
            {...props}
          >
            {props.children}
          </SyntaxHighlighter>
        </Fragment>
      ) : (
        <code
          style={{
            padding: "0.3em 0.5em",
            backgroundColor: "rgba(175, 184, 193, 0.2)",
            borderRadius: "4px",
            fontSize: "16px",
          }}
          className={className}
          {...props}
        />
      );
    },

    table({ ...props }) {
      return (
        <div className="tableBox">
          <table>{props.children}</table>
        </div>
      );
    },
  };

  return (
    <ReactMarkdown
      className="markdownBox"
      components={MarkdownComponents}
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </ReactMarkdown>
  );
}
