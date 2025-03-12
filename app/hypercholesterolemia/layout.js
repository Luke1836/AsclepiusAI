
export const metadata = {
  title: "Hypercholesterolemia and Your Health",
  description: "Know more about hypercholesterolemia.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#30493D]">
        { children }
      </body>
    </html>
  );
}