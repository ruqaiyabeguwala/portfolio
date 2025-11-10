import { LEXEND, MONTSERRAT, OSWALD } from "@/constants/fonts";
import "@/styles/main.css";
import { cn } from "@/utils";

const fontClasses = cn(MONTSERRAT.variable, OSWALD.variable, LEXEND.variable);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}