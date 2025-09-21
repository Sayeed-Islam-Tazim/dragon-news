import { NavLink } from "react-router-dom";
// import categories from "./../../public/demo-data/categories.json";
import { Suspense, use } from "react";

const categoriesPromise = fetch("/demo-data/categories.json").then((res) =>
  res.json()
);

const LeftAside = () => {
  const categories = use(categoriesPromise);
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <h3 className="text-lg font-semibold">All Categories</h3>
        {categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className="flex flex-col text-start m-2 p-2 rounded"
            >
              {category.name}
            </NavLink>
          );
        })}
      </Suspense>
    </div>
  );
};

export default LeftAside;
