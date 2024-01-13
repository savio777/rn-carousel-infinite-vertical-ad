import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { Container, Image } from "./styles";

interface ICarouselProps {
  data: ItemImageAdProps[];
}

const Carousel: React.FC<ICarouselProps> = ({ data }) => {
  const flatlistRef = useRef<ScrollView>();

  const { width, height } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex >= data.length - 1) {
        setActiveIndex(0);

        flatlistRef?.current?.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        console.log("add");

        flatlistRef?.current?.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (_, index: number) => ({
    length: height,
    offset: height * index,
    index: index,
  });

  const handleScroll = (event: { nativeEvent: NativeScrollEvent }) => {
    // Get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.y;
    // Get the index of current active item

    const index = scrollPosition / height;

    // Update the index
    setActiveIndex(Math.round(index));
  };

  return (
    <Container>
      <FlatList
        ref={flatlistRef}
        keyExtractor={(item) => item.id}
        data={data}
        getItemLayout={getItemLayout}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <Image width={width} height={height} source={item.image} />
        )}
        pagingEnabled
      />
    </Container>
  );
};

export default Carousel;
