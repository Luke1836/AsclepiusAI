import RoutingHeader from "./routeHeader";

export const metadata = {
  title: "Hypercholesterolemia and Your Health",
  description: "Know more about hypercholesterolemia.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RoutingHeader />
        { children }
      </body>
    </html>
  );
}