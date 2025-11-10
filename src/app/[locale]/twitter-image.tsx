export const dynamic = "force-static";
export const revalidate = 31536000;
import Image, {
  alt as _alt,
  contentType as _contentType,
  size as _size,
} from "../twitter-image";
import { LANGUAGES } from "@/constants/languages";

export const alt = _alt;
export const size = _size;

export const contentType = _contentType;

export default Image;

export const generateStaticParams = () =>
  LANGUAGES.map((l) => ({ locale: l.code }));
