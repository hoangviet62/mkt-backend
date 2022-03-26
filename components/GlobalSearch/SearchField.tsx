import TextField from "@mui/material/TextField";
import layoutStyles from "@styles/Layout.module.css";

const SearchField = ({ width }: { width: number }) => {
  return (
    <TextField
      placeholder="Bạn cần tìm gì ..."
      InputProps={{
        className: layoutStyles["search-field"],
        disableUnderline: true,
      }}
      style={{ width }}
      variant="standard"
    />
  );
};

export default SearchField;
