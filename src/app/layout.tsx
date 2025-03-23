import "@mantine/core/styles.css";
import "@/assets/styles/styles.scss";

import React from "react";
import { Poppins } from 'next/font/google';
import { Layout } from "@/components";
import { MantineProvider } from "@mantine/core";
import theme from "@/assets/theme";

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Akademik",
  description: "Akademik",
}
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body  style={{ background: "var(--academic-background)" }}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Layout>{props.children}</Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
