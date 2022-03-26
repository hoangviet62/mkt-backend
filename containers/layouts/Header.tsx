import Image from "next/image";
import layoutStyles from "@styles/Layout.module.css";
import Grid from "@mui/material/Grid";
import useDimensions from "react-cool-dimensions";
import GlobalSearch from "@components/GlobalSearch";
import Button from "@mui/material/Button";

const Header = () => {
  const { observe: bannerTopObserve, width: bannerTopWidth } =
    useDimensions<HTMLDivElement | null>();

  const { observe: logoObserve, width: logoWidth } =
    useDimensions<HTMLDivElement | null>();

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
      <div className={layoutStyles["inner-header"]}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <div ref={logoObserve}>
              <Image
                src="/inner-header-logo.jpeg"
                alt="inner-header-logo"
                layout="responsive"
                width={logoWidth}
                height={89}
              />
            </div>
          </Grid>
          <Grid item xs={6} className={layoutStyles["global-search-outter"]}>
            <GlobalSearch />
          </Grid>
          <Grid item xs={3} className={layoutStyles["cart-info-outter"]}>
            <Button>
              <Image
                src="/call-center.png"
                alt="call-center"
                layout="fixed"
                height="40"
                width="42"
              />{" "}
              &nbsp;Hỗ trợ khách hàng
            </Button>
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
