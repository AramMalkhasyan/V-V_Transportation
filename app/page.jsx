import HomeImage from './comp/HomeImage/HomeImage';
import HomeService from "./comp/homeService/HomeService";
import ProvideHome from "./comp/provideHome/ProvideHome";
import Partners from "./comp/partners/Partners";
import PartnerFeedBack from './comp/partnerFeedBack/PartnerFeedBack';
import MapLocation from "./comp/mapLocation/MapLocation";
import Footer from "./comp/footer/Footer";

export default function Home() {
  return (
    <div>
      <HomeImage />
      <ProvideHome />
        <Partners />
        {/* <PartnerFeedBack /> */}
        <MapLocation />
    </div>
  );
}
