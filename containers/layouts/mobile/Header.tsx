import Image from "next/image";
import layoutStyles from "@styles/Layout.module.css";
import useDimensions from "react-cool-dimensions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  const { observe: bannerTopObserve, width: bannerTopWidth } =
    useDimensions<HTMLDivElement | null>();
  const [leftToggle, setLeftToggle] = useState(false);

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setLeftToggle(open);
    };

  const list = (anchor: string) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={layoutStyles["mobile-menu-item"]}
    >
      <List>
        <ListItem button key={"TIN TỨC LÀM ĐẸP"}>
          <ListItemText primary={"TIN TỨC LÀM ĐẸP"} />
        </ListItem>
        <ListItem button key={"KIẾN THỨC"}>
          <ListItemText primary={"KIẾN THỨC"} />
        </ListItem>
        <ListItem button key={"LIÊN HỆ"}>
          <ListItemText primary={"LIÊN HỆ"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={layoutStyles["header"]}>
      <div ref={bannerTopObserve}>
        <Image
          src="/banner-top.jpeg"
          alt="banner-top"
          layout="responsive"
          quality={100}
          width={bannerTopWidth}
          height={50}
        />
      </div>
      <div className={layoutStyles["mobile-inner-header"]}>
        <Grid
          container
          className={layoutStyles["mobile-item-contents"]}
          spacing={0}
        >
          <Grid item xs={3}>
            <React.Fragment key={"left"}>
              <IconButton
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={"left"}
                open={leftToggle}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </React.Fragment>
          </Grid>
          <Grid item xs={6}>
            <Image
              src="/inner-header-logo.jpeg"
              alt="inner-header-logo"
              layout="fixed"
              width={175}
              height={45}
            />
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button>
              <Image
                src="/cart.png"
                alt="cart"
                layout="fixed"
                height="40"
                width="42"
              />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
