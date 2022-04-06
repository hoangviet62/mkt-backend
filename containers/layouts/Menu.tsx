import layoutStyles from "@styles/Menu.module.css";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Carousel from "@components/Carousel";
import useDimensions from "react-cool-dimensions";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Menu = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    {
      src: "/banner-1.jpeg",
      name: "banner-1",
      description: "banner-1",
    },
    {
      src: "/banner-2.jpeg",
      name: "banner-2",
      description: "banner-2",
    },
    {
      src: "/banner-1.jpeg",
      name: "banner-1",
      description: "banner-1",
    },
    {
      src: "/banner-2.jpeg",
      name: "banner-2",
      description: "banner-2",
    },
  ];

  const {
    observe: bannerObserve,
    height: bannerHeight,
    width: bannerWidth,
  } = useDimensions<HTMLDivElement | null>();

  return matches ? (
    <div ref={bannerObserve}>
      <Grid container spacing={0}>
        <Grid item xs={12} className={layoutStyles["menu-category-content"]}>
          <Carousel items={items} height={200} width={bannerWidth} />
        </Grid>
      </Grid>
    </div>
  ) : (
    <>
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
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={3} className={layoutStyles["menu-category-content"]}>
          <Paper elevation={3}>
            <div ref={bannerObserve}>
              <MenuList className={layoutStyles["menu-list"]}>
                <MenuItem className={layoutStyles["menu-item"]} divider>
                  <ListItemText inset>Mỹ phẩm lão hóa da</ListItemText>
                </MenuItem>
                <MenuItem className={layoutStyles["menu-item"]} divider>
                  <ListItemText inset>Mỹ phẩm chăm sóc da</ListItemText>
                </MenuItem>
                <MenuItem className={layoutStyles["menu-item"]} divider>
                  <ListItemText inset>Thực phẩm tăng cân</ListItemText>
                </MenuItem>
                <MenuItem className={layoutStyles["menu-item"]} divider>
                  <ListItemText inset>Thực phẩm giảm cân</ListItemText>
                </MenuItem>
                <MenuItem className={layoutStyles["menu-item"]}>
                  <ListItemText inset>Sức khỏe</ListItemText>
                </MenuItem>
              </MenuList>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} className={layoutStyles["menu-category-content"]}>
          <Carousel
            items={items}
            height={bannerHeight}
            width={bannerWidth * 2}
          />
        </Grid>
        <Grid item xs={3} className={layoutStyles["menu-category-content"]}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  border: "1px dashed grey",
                }}
              >
                <Image
                  src={"/target_1.jpeg"}
                  layout={"fixed"}
                  height={70}
                  width={70}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  Thanh toán khi nhận hàng
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderTop: "1px dashed grey",
                  borderRight: "1px dashed grey",
                  borderBottom: "1px dashed grey",
                }}
              >
                <Image
                  src={"/target_2.jpeg"}
                  layout={"fixed"}
                  height={70}
                  width={70}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  Giao hàng dưới 120 phút
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderRight: "1px dashed grey",
                  borderBottom: "1px dashed grey",
                  borderLeft: "1px dashed grey",
                }}
              >
                <Image
                  src={"/target_3.jpeg"}
                  layout={"fixed"}
                  height={70}
                  width={70}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  14 ngày đổi trả miễn phí
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderRight: "1px dashed grey",
                  borderBottom: "1px dashed grey",
                }}
              >
                <Image
                  src={"/target_4.jpeg"}
                  layout={"fixed"}
                  height={70}
                  width={70}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  Sản phẩm chính hãng
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
