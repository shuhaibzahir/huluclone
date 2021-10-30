import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result, index) => (
        <Thumbnail key={index} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
