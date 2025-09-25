import CtaSection from "../UI/components/landing_pages/cta_section";
import FeaturLandingPages from "../UI/components/landing_pages/fieatur_landing_pages";
import FooterLandingPages from "../UI/components/landing_pages/footer";
import HeroSection from "../UI/components/landing_pages/hero_section";
import NavbarLandingPages from "../UI/components/landing_pages/navbar_landing_pages";
import VisiMisiComponen from "../UI/components/landing_pages/visi-misi";

const LandingPages = () => {
  return (
    <div className="bg-unicoin-dark text-white overflow-x-hidden">
      <NavbarLandingPages />
      <HeroSection />
      <VisiMisiComponen />
      <FeaturLandingPages />
      <CtaSection />
      <FooterLandingPages />
    </div>
  );
};

export default LandingPages;
