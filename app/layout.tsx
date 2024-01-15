import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Gaadi Dekho",
  description:
    "Thinking of buying a car? At GaadiDekho.com, buy new and used cars, search by filter and preferences, compare cars, read latest news and updates, see 360 views & more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEVHcEz8dUP/iE/8iV3/h078d0X+gEn8oIL9wKr+3ND8dkP/////7Ob7bjz4YDP5Zjn5YTb5YDZVzrsMAAAAEnRSTlMAOZf7/07/////////////7JeGElHEAAABRklEQVR4AX1RB6KFIAyrokUqLXr/y/4wyn87jqZJKA4iWtawfURYFwL27Qd2rN9+YqH1oWNuN36QVgq84WhGPA7QmGLrm8yBuBOWkM7zFObjPPOh7Dpxh0AHQFKtKfAATb8BG+ZG8gy433FIyJ3lbQSk+uH0gMZ/CgMB3ESSqxmzHJvUBFU/TvGQmCdXgUkior4qMTTzLm/wesB3AH/I5+iBkufMBh75qCNgj4L3DwGFMCfUU58DKja2SKaCo8QZQEuqWg5XSu3mtwwKECY+fD1080MkOKKktbh2Zn9Hn9cDNtVkcWZNW6AoDku+hwWfFqCXoqS1TjkaO6suDiqNWOn6HBatygCVDuv/2YrVmoM11QMeyQmBmFMwmzJd7gMSDDm26vezXHQXa0DbitPSy02L8xEctYxrIdrtB3YClvv67F431v8BCYgn863ErEgAAAAASUVORK5CYII=" type="image/x-icon" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
