import layoutStyles from "@styles/Menu.module.css";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Menu = () => {
  return (
    <Grid container spacing={0} className={layoutStyles["navbar"]}>
      <Grid item xs={3} className={layoutStyles["menu-category-title"]}>
        <MenuIcon className={layoutStyles["margin-10"]} />
        <span>Danh mục sản phẩm</span>
      </Grid>
      <Grid item xs={4}>
        <div className={layoutStyles["menu-info"]}>
          <Button href="#">TIN TỨC</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#">KIẾN THỨC</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#">LIÊN HỆ</Button>
          <Divider orientation="vertical" flexItem />
        </div>
      </Grid>
      <Grid item xs={5} className={layoutStyles["order-section"]}>
        <Button
          variant="outlined"
          size="small"
          className={layoutStyles["order-tracking"]}
        >
          TRA CỨU ĐƠN HÀNG
        </Button>
      </Grid>
      <Grid item xs={3} className={layoutStyles["menu-category-content"]}>
        <Paper elevation={3}>
          <MenuList>
            <MenuItem className={layoutStyles["menu-item"]}>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
            <MenuItem className={layoutStyles["menu-item"]}>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
            <MenuItem className={layoutStyles["menu-item"]}>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
            <MenuItem className={layoutStyles["menu-item"]}>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
            <MenuItem className={layoutStyles["menu-item"]}>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={6} className={layoutStyles["menu-category-content"]}>
        <MenuIcon className={layoutStyles["margin-10"]} />
        <span>Danh mục sản phẩm</span>
      </Grid>
      <Grid item xs={3} className={layoutStyles["menu-category-content"]}>
        <MenuIcon className={layoutStyles["margin-10"]} />
        <span>Danh mục sản phẩm</span>
      </Grid>
    </Grid>
  );
};

export default Menu;
