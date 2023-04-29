import React from "react";

const List = ({
  direction = "row",
  distribution = "flex-start",
  space = 16,
  content = null,
  marginTop = false,
  maxHeight = 0,
  padding = false,
}: {
  direction?: "row" | "column";
  distribution?: "center" | "flex-start" | "flex-end" | "space-between";
  space?: number;
  content: any;
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
        alignItems: "center",
        gap: space + "px",
        marginTop: marginTop ? "1rem" : "0",
        maxHeight: maxHeight > 0 ? maxHeight + "px" : "infinite",
        overflowY: maxHeight > 0 ? "auto" : "visible",
        padding: padding ? "1rem" : 0,
      }}
    >
      {content}
    </div>
  );
};

export default List;
