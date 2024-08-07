import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMenu from "./components/headerMenu";
import { WhatsAppImg } from "./components/whatsapp";
import { findAllcategory } from "./consult/fetching";
import Provider from "./context/provider";


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
        <Provider>
          <HeaderMenu list={categorys}/>
          {children}
        </Provider>
        <WhatsAppImg/>
      </body>
    </html>
  );
}
