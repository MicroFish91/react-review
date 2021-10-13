import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";

const DashboardLayout = (props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="Dashboard-Content">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
