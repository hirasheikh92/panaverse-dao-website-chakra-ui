//import './globals.css'

import ChakraWrapper from "./components/chakra/ChakraWrapper";
import Footer from "./components/footer/Footer";

import Header from "./components/Navbar/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>
          <Header />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
