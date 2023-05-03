import React from "react";

const List = ({
  direction = "row",
  distribution = "flex-start",
  aligment = "center",
  space = 16,
  children = null,
  marginTop = false,
  maxHeight = 0,
  padding = false,
}: {
  direction?: "row" | "column";
  distribution?: "center" | "flex-start" | "flex-end" | "space-between";
  aligment?: "center" | "flex-start" | "flex-end";
  space?: number;
  children: any;
  marginTop?: boolean;
  maxHeight?: number;
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
        maxHeight: maxHeight > 0 ? maxHeight + "px" : "infinite",
        overflowY: maxHeight > 0 ? "auto" : "visible",
        padding: padding ? "1rem" : 0,
      }}
    >
      {children}
    </div>
  );
};

export default List;
