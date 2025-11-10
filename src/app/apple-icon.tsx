import { SimonCamacho } from "@/components/UI/Icons/Logos";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const revalidate = 31536000;
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    (
      <SimonCamacho
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
    {
      ...size,
    }
  );
};

export default Icon;
