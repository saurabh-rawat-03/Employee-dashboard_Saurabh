import "./App.css";
import Table from "./Table";

function App() {
  return (
    <>
      {/* Line 11 - 21 : Adds the header to the page such as the logo and the title */}
      <div className="dashboard">
        <div className="header">
          <a href="#" target="#">
            <img
              src="https://odoo.koders.in/web/image/317-c5bbf4c5/KodersLogo.png"
              className="logo"
              alt="https://odoo.koders.in/web/image/317-c5bbf4c5/KodersLogo.png"
            />
          </a>
          <h1>Employee Activity Dashboard</h1>
        </div>

        {/* Line 24: calls another component which performs its own task*/}
        <Table></Table>
      </div>
    </>
  );
}

export default App;
