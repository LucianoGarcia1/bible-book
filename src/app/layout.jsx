import { Kanit } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/useContext";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bíblia Sagrada",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ContextProvider>
          <div className="2xl:container w-full mx-auto my-0">{children}</div>
        </ContextProvider>
      </body>
    </html>
  );
}
