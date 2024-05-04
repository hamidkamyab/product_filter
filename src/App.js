import * as Vsc from "react-icons/vsc";
import Tabs from "./Tabs";
import Products from "./Products";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main container py-5 d-flex flex-column align-items-center gap-3">
          <h4 className="title position-relative m-0 p-0 pb-2">محصولات ما</h4>
          <Tabs/>
          <Products />
      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
