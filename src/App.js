import "./App.css";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { defaultItems } from "./db/data";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import SelectList from "./components/SelectList";
import ShowDetailsList from "./components/ShowDetailsList";
import { Layout } from "antd";
import logo from "./img/icon-pabau-blue.png";

const { Footer } = Layout;

const App = () => {
  
  const getSubCategories = (categories) => {
    let out = [];
    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        out = [...out, ...categories[i].subCategory];
      }
    }else{
      out = defaultItems[0].category[0].subCategory;
    }
    return out;
  };
console.log(getSubCategories())
  const getAllCategories = () => {
    let out = [];
    for (let i = 0; i < defaultItems.length; i++) {
      for (let j = 0; j < defaultItems[i].category.length; j++) {
        out = [...out, ...defaultItems[i].category[j].subCategory];
      }
    }
    return out;
  };
  console.log(getAllCategories())
  const getAllMainCategories = () => {
    let out = [];
    for (let i = 0; i < defaultItems.length; i++) {
      out = [...out, ...defaultItems[i].category];
    }
    return out;
  };
  console.log(getAllMainCategories())

  const [data, setData] = useState(getAllMainCategories());
  const [items, setItems] = useState(getSubCategories());

  // useEffect(() => {
  //   if (!data.length) {
  //     setItems(getAllCategories());
  //     setData(getAllMainCategories());
  //   }
  // }, [data]);
  return (
    <div className="App">
      <Navbar />
      <ItemList setData={setData} defaultItems={defaultItems} />
      <div className="main">
        <SelectList data={data} setItems={setItems} />
        <ShowDetailsList items={items} setItems={setItems} />
      </div>
      <Layout>
        <Footer>
          Powered by:{" "}
          <a href="https://www.pabau.com/">
            <img src={logo} alt="img" /> Pabau
          </a>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
