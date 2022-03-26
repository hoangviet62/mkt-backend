import Button from "@mui/material/Button";
import layoutStyles from "@styles/Layout.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <Button variant="contained" className={layoutStyles["search-btn"]}>
      <SearchIcon />
    </Button>
  );
};

export default SearchButton;
