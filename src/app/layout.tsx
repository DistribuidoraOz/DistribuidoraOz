import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMenu from "./components/headerMenu";
import { findAllcategory } from "./consult/fetching";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ventas Varias",
  description: "Pagina para comprar de todo!",
};


export default async function RootLayout({children}:{children: Readonly<React.ReactNode>}) {

  const categorys = await findAllcategory();

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderMenu list={categorys}/>
        {children}
        </body>
    </html>
  );
}
