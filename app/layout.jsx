export const metadata = {
  title: "Textship",
  description: "A 30-day experiment in building an app by text.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
