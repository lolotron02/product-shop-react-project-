import { createContext, useEffect, useState } from "react";
import { productList } from "context/ProductContext/ProductContext";
import { useNavigate } from "react-router-dom";

export const HeadSearchContext = createContext();

function HeadSearchProvider(props) {
  const [searchProduct, setSearchProduct] = useState("");
  const [productCategory, setProductCategory] = useState("All");
  const [filteredSearchProduct, setFilteredSearchProduct] = useState([]);
  const [inputExist, setInputExist] = useState(false);

  const navigator = useNavigate();

  const goShop = () =>
    navigator("/shop", {
      state: { category: productCategory, search: searchProduct },
    });

  useEffect(() => {
    setFilteredSearchProduct(
      productList.filter(
        (product) =>
          product.name
            .toLocaleLowerCase()
            .includes(searchProduct.toLocaleLowerCase()) &&
          (productCategory === "All" || productCategory === product.type)
      )
    );
  }, [searchProduct, productCategory]);
  return (
    <HeadSearchContext.Provider
      value={{
        filteredSearchProduct,
        searchProduct,
        setSearchProduct,
        productCategory,
        setProductCategory,
        inputExist,
        setInputExist,
        goShop
      }}
    >
      {props.children}
    </HeadSearchContext.Provider>
  );
}

export default HeadSearchProvider;
