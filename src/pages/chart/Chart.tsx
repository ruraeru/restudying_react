import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    registerables,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables
);

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: white;
    color: black;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

const ChartWrapper = styled.div`
    /* background-color: gray; */
    width: 100%;
`;

enum ChartType {
    "line" = "line",
    "bubble" = "bubble",
    "bar" = "bar",
    "doughnut" = "doughnut",
    "pie" = "pie",
    "polarArea" = "polarArea",
    "radar" = "radar",
    "scatter" = "scatter"
};

export default function ChartPage() {
    console.log(faker.date.anytime());
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: "",
            data: []
        }]
    });

    const labels = ["쇼핑", "식비", "여가", "공과금"];
    const dummyData = {
        labels: [...Array(10).map(() => faker.number.int({ min: 0, max: 10 }))],
        datasets: [
            // {
            //     label: "소비",
            //     data: labels.map(() =>
            //         faker.number.int(({ min: 0, max: 10000000 }))
            //     ),
            // },
            // {
            //     label: "저번 달 소비",
            //     data: labels.map(() =>
            //         faker.number.int(({ min: 0, max: 10000000 }))
            //     ),
            // },

        ]
    }
    return (
        <Container>
            <Wrapper>
                <Div>
                    <ChartWrapper>
                        <Chart type="line" data={dummyData} />
                    </ChartWrapper>
                </Div>
            </Wrapper>
            {/* <Wrapper>
                <Div>
                    <ChartWrapper>
                        <Chart
                            type={"line"} data={dummyData} options={{
                                responsive: true,
                            }} />
                    </ChartWrapper>
                    <Div>
                        <Chart type="doughnut" data={dummyData} />
                    </Div>
                </Div>
            </Wrapper>
            <ChartWrapper>
                <Chart type="bar" data={dummyData} />
            </ChartWrapper> */}
        </Container>
    )
}