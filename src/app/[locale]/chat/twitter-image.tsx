export const dynamic = "force-static";
export const revalidate = 31536000;
import { LANGUAGES } from "@/constants/languages";
import Image, {
  alt as _alt,
  contentType as _contentType,
  size as _size,
} from "./opengraph-image";

export const alt = _alt;
export const size = _size;
export const contentType = _contentType;

export default Image;

export const generateStaticParams = () =>
  LANGUAGES.map((l) => ({ locale: l.code }));
