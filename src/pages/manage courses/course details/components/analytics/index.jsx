import {
  CourseAnalyticsContainer,
  CourseAnalyticsChartWrapper,
} from "./index.styled";
import Graph from "../../../../../components/graph";
import { graphSideData } from "../../../../../exports/dashboardExports";

const CourseAnalytics = () => {
  return (
    <CourseAnalyticsContainer>
      <CourseAnalyticsChartWrapper>
        <div className="graph__wrapper">
          <Graph
            graph={{
              style: {
                height: "100px",
              },
            }}
          />
        </div>
        <div className="graph_aside">
          {graphSideData.map((item, idx) => (
            <div key={idx}>
              <p>{item.month}</p>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </CourseAnalyticsChartWrapper>
    </CourseAnalyticsContainer>
  );
};

export default CourseAnalytics;
