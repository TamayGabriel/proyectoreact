import React from "react";
import Box from "@material-ui/core/Box";

import BookList from "./BookList";

export default function JustifyContent() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        <Box p={1} bgcolor="grey.300">
          <BookList />
        </Box>
      </Box>
    </div>
  );
}
