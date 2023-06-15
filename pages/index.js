import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { useRef } from "react";



const Home = () => {
  return (
    <>
      <Head>
        <title>[Husni Qurban]</title>
        <meta
          name="description"
          content="Personal Web"
        />
        <link rel="icon" href="/goat.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Keuntungan Berqurban"
        title=" PILIH HEWAN SEBAR QURBAN ANDA ">
        Anda tidak akan kecewa dengan kambing atau domba pilihan kami. Dijamin!.
      </SectionTitle>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
       
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
       Beberapa review pembeli yang telah merasakan kepuasan berbelanja hewan qurban disini.
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;