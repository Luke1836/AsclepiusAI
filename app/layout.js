import "./globals.css";


export const metadata = {
  title: "AsclepiusAI - Hypercholesterolemia Predictor",
  description: "AI tool used to predict the ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}
