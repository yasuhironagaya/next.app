import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "やっちん",
  description: "やっちんが作った",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body >
        <div className={'container'}>
        {children}
        </div>
      </body>
    </html>
  );
}
