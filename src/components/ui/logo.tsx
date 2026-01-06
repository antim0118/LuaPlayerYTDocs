import { useColorPalette } from "./color-mode";

type Props = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 88, height = 118 }: Props) => {
  const { accentColorHex } = useColorPalette();

  return (
    <svg width={width} height={height} viewBox="0 0 88 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 86L41.5 0L48 9.5L15.5 76H27.5L54 23L87.5 86H34L18 117.5L9 113L22.5 86H0ZM55 44.5L39 76H71L55 44.5Z"
        fill={accentColorHex}
      />
    </svg>
  );
};
