import { useState } from "react";
import GraphData from "./graphData";
import { GraphContainer } from "./index.styled";
import CustomDatePicker from "./customDatePicker";

const Graph = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <GraphContainer>
      <div className="header">
        <p>Active Hours (All Courses)</p>
        <CustomDatePicker setStartDate={setStartDate} startDate={startDate} />
      </div>
      <GraphData />
    </GraphContainer>
  );
};

export default Graph;
