import {
  Navigation,
  Hero,
  FirmDescription,
  PracticeAreas,
  Contact,
  Footer,
} from "@/components/marketing/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FirmDescription />
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
