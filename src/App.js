import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnterPage from "./EnterPage/EnterPage";
import Page2 from "./ChatBotPage/Page2";
import ExitPage from "./ExitPage/ExitPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<EnterPage />}>
              <Route path="/Chatbot" element={<Page2 />}></Route>
              <Route path="/Exit" element={<ExitPage />}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
