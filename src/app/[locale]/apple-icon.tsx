import Icon, {
  contentType as _contentType,
  size as _size,
} from "../apple-icon";
import { LANGUAGES } from "@/constants/languages";
export const dynamic = "force-static";
export const revalidate = 31536000;

export const size = _size;

export const contentType = _contentType;

export default Icon;

export const generateStaticParams = () =>
  LANGUAGES.map((l) => ({ locale: l.code }));
