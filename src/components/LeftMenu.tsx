import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Category from "../models/Category";
import { getCategories } from "../services/DataService";

const LeftMenu = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    const getAsyncCategories = async () => {
      const categoriesData: Array<Category> =
        await getCategories();
      const categoriesList = categoriesData.map((cat) => (
        <li key={cat.id}>{cat.name}</li>
      ));
      setCategories(
        <ul className="category">{categoriesList}</ul>
      );
    };

    getAsyncCategories();
  }, []);

  if (width <= 768) {
    return null;
  }

  return <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;
