import localFont from "next/font/local";

import "../shared/base.css";
import { Header } from "@/widgets/Header";
import { ThemeProvider, setInitialThemeMode } from "@/entities/theme";
import { Layout } from "@/shared/ui";
import { Footer } from "@/widgets/Footer";

export const pretendard = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <head>
        <title>도로모</title>
        <meta name="description" content="도로모의 블로그" />
      </head>
      <body className={pretendard.className}>
        <script
          dangerouslySetInnerHTML={{ __html: setInitialThemeMode }}
        ></script>
        <ThemeProvider>
          <Header />
          <Layout>{children}</Layout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
