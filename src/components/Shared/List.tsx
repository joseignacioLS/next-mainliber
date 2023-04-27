import React from "react";

const List = ({
  direction = "row",
  distribution = "flex-start",
  space = 16,
  content = null,
}: {
  direction?: "row" | "column";
  distribution?: "center" | "flex-start" | "flex-end" | "space-between";
  space?: number;
  content: any;
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
      }}
    >
      {content}
    </div>
  );
};

export default List;
