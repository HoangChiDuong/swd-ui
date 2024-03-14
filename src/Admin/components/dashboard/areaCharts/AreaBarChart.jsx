import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
    {
        month: "Jan",

        profit: 100,
    },
    {
        month: "Feb",

        profit: 85,
    },
    {
        month: "Mar",

        profit: 90,
    },
    {
        month: "April",

        profit: 70,
    },
    {
        month: "May",

        profit: 80,
    },
    {
        month: "Jun",

        profit: 50,
    },
    {
        month: "Jul",

        profit: 75,
    },
    {
        month: "Aug",

        profit: 86,
    },
    {
        month: "Sep",

        profit: 78,
    },
];

const AreaBarChart = () => {
    const { theme } = useContext(ThemeContext);

    const formatTooltipValue = (value) => {
        return `${value}k`;
    };

    const formatYAxisLabel = (value) => {
        return `${value}k`;
    };

    const formatLegendValue = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };

    return (
        <div className="bar-chart">
            <div className="bar-chart-info">
                <h5 className="bar-chart-title">Total Revenue</h5>
                <div className="chart-info-data">
                    <div className="info-data-value">$50.4K</div>
                    <div className="info-data-text">
                        <FaArrowUpLong />
                        <p>5% than last month.</p>
                    </div>
                </div>
            </div>
            <div className="bar-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 5,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis
                            padding={{ left: 10 }}
                            dataKey="month"
                            tickSize={0}
                            axisLine={false}
                            tick={{
                                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                                fontSize: 14,
                            }}
                        />
                        <YAxis
                            padding={{ bottom: 10, top: 10 }}
                            tickFormatter={formatYAxisLabel}
                            tickCount={6}
                            axisLine={false}
                            tickSize={0}
                            tick={{
                                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                            }}
                        />
                        <Tooltip
                            formatter={formatTooltipValue}
                            cursor={{ fill: "transparent" }}
                        />
                        <Legend
                            iconType="circle"
                            iconSize={10}
                            verticalAlign="top"
                            align="right"
                            formatter={formatLegendValue}
                        />
                        <Bar
                            dataKey="profit"
                            fill="#475be8"
                            activeBar={false}
                            isAnimationActive={false}
                            barSize={24}
                            radius={[4, 4, 4, 4]}
                        />
                        {/* <Bar
                            dataKey="loss"
                            fill="#e3e7fc"
                            activeBar={false}
                            isAnimationActive={false}
                            barSize={24}
                            radius={[4, 4, 4, 4]}
                        /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaBarChart;