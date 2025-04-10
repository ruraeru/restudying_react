import styled from "@emotion/styled";
import { CounterButton } from "../features/counter";
import { Outlet, Route, Routes } from "react-router";
import Page from "../pages/home/:pid/page";
import Test from "../pages/api/Test";
import ApiTest from "../pages/server/ApiTest";
import ChartPage from "../pages/chart/Chart";

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={
            <CounterButton />
          } />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/api" element={<Test />} />
          <Route path="/api/test" element={<ApiTest />} />
          <Route path="home">
            <Route index element={<div>Home</div>} />
            <Route element={<div>Layout <Outlet /></div>}>
              <Route path=":pid" element={<Page />}
              />
              <Route path=":pid/edit" element={<div>pid edit</div>} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
