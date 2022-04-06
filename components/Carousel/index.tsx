import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "@components/Carousel/types";
import Image from "next/image";
import { Skeleton } from "@mui/material";

const CarouselComponent = ({
  items,
  height,
  width,
}: {
  items: CarouselItem[];
  height: number;
  width: number;
}) => {
  const renderItem = (item: CarouselItem) => {
    return (
      <Image
        key={item.src}
        src={item.src}
        alt={item.src}
        layout="fixed"
        height={height}
        width={width}
      />
    );
  };

  return items.length === 0 ? (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width={width}
      height={height}
    />
  ) : (
    <Carousel>{items.map((item) => renderItem(item))}</Carousel>
  );
};

export default CarouselComponent;
