import Video from "./Components/videoLayer"
import AboutPage from "./Components/about"
import HealthPage from "./Components/health"
import ImplementationPage from "./Components/implementation"
import ContactPage from "./Components/contact"
import Header from "./Components/header"

export default function Home()
{
  return (
    <>
      <Header />
      <Video />
      <AboutPage />
      <HealthPage />
      <ImplementationPage />
      <ContactPage />
    </>
  )
}
