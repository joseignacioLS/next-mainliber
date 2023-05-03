import React, { ReactNode } from "react";

const List = ({
  direction = "row",
  distribution = "flex-start",
  aligment = "center",
  space = 16,
  children = null,
  marginTop = false,
  maxHeight = 0,
  padding = false,
  maxWidth = 0,
}: {
  direction?: "row" | "column";
  distribution?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly";
  aligment?: "center" | "flex-start" | "flex-end";
  space?: number;
  children: ReactNode;
  marginTop?: boolean;
  maxHeight?: number;
  maxWidth?: number;
  padding?: boolean;
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: direction,
        justifyContent: distribution,
        alignItems: aligment,
        gap: space + "px",
        marginTop: marginTop ? "1rem" : "0",
        maxHeight: maxHeight > 0 ? maxHeight + "px" : "initial",
        maxWidth: maxWidth > 0 ? maxWidth + "px" : "initial",
        overflowY: maxHeight > 0 ? "auto" : "visible",
        padding: padding ? "1rem" : 0,
      }}
    >
      {children}
    </div>
  );
};

export default List;
