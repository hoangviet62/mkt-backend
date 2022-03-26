import { useState, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import layoutStyles from "@styles/Layout.module.css";
import useDimensions from "react-cool-dimensions";

const CategoryMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { observe: productObserve, width: productWidth } =
    useDimensions<HTMLDivElement | null>();

  return (
    <>
      <div ref={productObserve} className={layoutStyles["category-section"]}>
        <Button
          className={layoutStyles["category-btn"]}
          id="category-button"
          aria-controls={open ? "category-button" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Danh mục sản phẩm
        </Button>
      </div>
      <Menu
        id="category-menu"
        MenuListProps={{
          "aria-labelledby": "category-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: productWidth,
            borderRadius: 0,
          },
        }}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Sản phẩm 1
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Sản phẩm 2
        </MenuItem>
      </Menu>
    </>
  );
};

export default CategoryMenu;
