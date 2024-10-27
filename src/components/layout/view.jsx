import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

export const LayoutView = ({ children }) => {
  return (
    <section>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </section>
  );
};
