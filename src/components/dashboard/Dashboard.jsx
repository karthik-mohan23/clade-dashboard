import Content from "./Content";
import Sections from "./Sections";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <section>
      <Sections />
      <main className=" flex justify-between border-t border-border-100 ">
        <Content />
        <Sidebar />
      </main>
    </section>
  );
}
export default Dashboard;
