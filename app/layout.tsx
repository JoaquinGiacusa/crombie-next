import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
