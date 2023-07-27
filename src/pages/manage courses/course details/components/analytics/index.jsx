import {
  CourseAnalyticsContainer,
  CourseAnalyticsChartWrapper,
  CourseAnalyticsChartsSection,
  CourseAnalyticsChartsHeader,
  CourseAnalyticsSkillsList,
  CourseAnalyticsSkillsItem,
} from "./index.styled";
import Graph from "../../../../../components/graph";
import { graphSideData } from "../../../../../exports/dashboardExports";
import {
  general,
  analyticsMain,
  analyticsGraph,
} from "../../../../../assets/images/charts";
import {
  performanceDetail,
  stillsPerformanceData,
} from "../../../../../exports/courseExports";

const CourseAnalytics = () => {
  return (
    <CourseAnalyticsContainer>
      <CourseAnalyticsChartWrapper>
        <div className="graph__wrapper">
          <Graph />
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
      <CourseAnalyticsChartsSection>
        <CourseAnalyticsChartsHeader>
          <div className="left">
            <p>Average Grades</p>
            <img src={general} alt="" />
          </div>
          <div className="right">
            <div className="performance_wrapper">
              <p className="header">Class Performance</p>
              <ul>
                {performanceDetail.map((item, idx) => (
                  <li key={idx} className="skill_item">
                    <div className="box">
                      <span style={{ background: item.color }}></span>
                    </div>
                    <p>
                      {item.value} <span>({item.count})</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="chart_wrap">
              <p>
                Total in class: <span>5000</span>
              </p>
              <img src={analyticsMain} alt="" />
            </div>
          </div>
        </CourseAnalyticsChartsHeader>
        <CourseAnalyticsSkillsList>
          {stillsPerformanceData?.map((data, idx) => (
            <SkillsItem
              key={idx}
              title={data?.title}
              bgColor={data.bgColor}
              list={data.skills}
            />
          ))}
        </CourseAnalyticsSkillsList>
      </CourseAnalyticsChartsSection>
    </CourseAnalyticsContainer>
  );
};

const SkillsItem = ({ bgColor, title, list }) => {
  return (
    <CourseAnalyticsSkillsItem bgColor={bgColor}>
      <div className="graph_box">
        <img src={analyticsGraph} alt="" />
      </div>
      <div className="content">
        <p className="content_header">{title}</p>
        <ul>
          {list.map((item, idx) => (
            <li key={idx} className="skill_item">
              <div className="box">
                <span style={{ background: item.color }}></span>
              </div>
              <p>
                {item.value} <span>({item.count})</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </CourseAnalyticsSkillsItem>
  );
};

export default CourseAnalytics;
