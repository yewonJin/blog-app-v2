"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import {
  prism,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { memo, Fragment, useRef } from "react";
import "./markdown.css";

import { Icon } from "@/shared/ui";
import { getPostIndex } from "@/entities/post/lib/postIndex";

type Props = {
  markdown: string;
};

export function MDViewer({ markdown }: Props) {
  const ref = useRef(0);

  const postIndex = getPostIndex(markdown);

  const getHeadValue = () => {
    const value = postIndex[ref.current++].content;

    if (ref.current >= postIndex.length) {
      ref.current = 0;
    }

    return value;
  };

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

    h1({ node, ...props }: { node: any; [x: string]: any }) {
      const value = getHeadValue();

      return (
        <h1 id={value}>
          <a href={`#${value}`}>{props.children}</a>
          <Icon type="link" />
        </h1>
      );
    },

    h2({ node, ...props }: { node: any; [x: string]: any }) {
      const value = getHeadValue();

      return (
        <h2 id={value}>
          <a href={`#${value}`}>{props.children}</a> <Icon type="link" />
        </h2>
      );
    },

    h3({ node, ...props }: { node: any; [x: string]: any }) {
      const value = getHeadValue();

      return (
        <h3 id={value}>
          <a href={`#${value}`}>{props.children}</a> <Icon type="link" />
        </h3>
      );
    },

    h4({ node, ...props }: { node: any; [x: string]: any }) {
      const value = getHeadValue();

      return (
        <h4 id={value}>
          <a href={`#${value}`}>{props.children}</a> <Icon type="link" />
        </h4>
      );
    },
  };

  return (
    <div>
      <ReactMarkdown
        className="markdownBox"
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export const MemoizedMDViwer = memo(MDViewer);
