import { Flex, FormatByte, Slider, Text, useSlider, type UseSliderProps } from "@chakra-ui/react";
import { useColorPalette } from "../ui/ColorMode";

const getSwizzledValue = (val: number) => {
  for (let i = 1; i <= 9; i++) {
    const pow = Math.pow(2, i);
    if (val <= pow) return pow;
  }
  return 512;
};

export const TextureCalcLayout = () => {
  const params: UseSliderProps = {
    defaultValue: [256],
    thumbAlignment: "center",
    min: 16,
    max: 512,
    step: 16,
  };

  const widthSlider = useSlider(params),
    heightSlider = useSlider(params);
  const width = widthSlider.value,
    height = heightSlider.value;
  const size = getSwizzledValue(width[0]) * getSwizzledValue(height[0]) * 4;

  const { accentColorPalette } = useColorPalette();

  return (
    <Flex h="full" direction="column" alignItems="center" mt={6} gap={6} colorPalette={accentColorPalette}>
      <Slider.RootProvider value={widthSlider} width="300px">
        <Slider.Label>Width: {width}</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.RootProvider>

      <Slider.RootProvider value={heightSlider} width="300px">
        <Slider.Label>Height: {height}</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.RootProvider>

      <Text>
        {size} bytes = <FormatByte value={size} />
      </Text>
    </Flex>
  );
};
