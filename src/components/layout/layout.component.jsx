import Menu from "../../components/menu/menu.component";
import SearchBar2 from "../../components/search_bar_2/search_bar_2.component";
const Layout = (props) => {
  return (
    <div className="p-2 h-screen border text-white">
      <SearchBar2 />
      <Menu />
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-7xl font-bold">GO TO</h1>
        <h2 className="text-xl font-semibold">{props.name}</h2>
      </div>
      {props.children}
    </div>
  );
};
export default Layout;
