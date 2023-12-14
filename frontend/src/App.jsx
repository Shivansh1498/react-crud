import "./App.css";
import ClientForm from "./components/ClientForm";
import ClientTable from "./components/ClientTable";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <ClientTable />
        <ClientForm />
      </div>
    </>
  );
}

export default App;
