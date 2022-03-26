import CategoryMenu from "./CategoryMenu";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import layoutStyles from "@styles/Layout.module.css";
import useDimensions from "react-cool-dimensions";

const GlobalSearch = () => {
  const { observe: containerObserve, width: containerWidth } =
    useDimensions<HTMLDivElement | null>();
  const { observe: categoryMenuObserve, width: categoryMenuWidth } =
    useDimensions<HTMLDivElement | null>();
  const { observe: searchBtnObserve, width: searchBtnWidth } =
    useDimensions<HTMLDivElement | null>();

  return (
    <div className={layoutStyles["global-search-btn"]} ref={containerObserve}>
      <div ref={categoryMenuObserve}>
        <CategoryMenu />
      </div>
      <div>
        <SearchField
          width={containerWidth - (categoryMenuWidth + searchBtnWidth)}
        />
      </div>
      <div ref={searchBtnObserve}>
        <SearchButton />
      </div>
    </div>
  );
};

export default GlobalSearch;
