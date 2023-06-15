import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/8z0s_imbw_210723.png";
import img1 from "../public/img/kambing-kacang-1024x600.jpg";
import img3 from "../public/img/_kambing_jawa.jpg";
import img2 from "../public/img/kambing.jpeg";
import img4 from "../public/img/7e8dd6904f6a1dab3f7a8b09d674dc0f.jpg";
import img5 from "../public/img/20220203134758-1-kambing-etawa-kaligesing-004-shani-rasyid.jpeg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap " id="daftar">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            SEBAR BERKAH QURBAN (SBQ)
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Mudahkan niat berqurban anda dengan pelayanan yang terorientasi melayani umat islam dalam memenuhi kebutuhan berqurban untuk Lebaran Idhul Adha
            </p>

            <Link href="https://wa.me/+6281319565200?text=Saya ingin membeli kambing" target="_blank" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Chat Via Whatsapp
          </Link>

          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Terdapat Beberapa pilihan untuk memaksimalkan qurban anda
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
             <strong><center>Kambing Class A</center></strong>
              <Image src={img1} width={250} height={80}></Image>
              <strong><center>4.200.000 - 5.500.000</center></strong>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <strong><center>Kambing Class B</center></strong>
              <Image src={img2} height={80} width={205}></Image>
              <strong><center>3.500.000 - 4.000.000</center></strong>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
            <strong><center>Kambing Class C</center></strong>
              <Image src={img3} height={80} width={205}></Image>
              <strong><center>2.500.000 - 3.300.000</center></strong>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
            <strong> <center>Domba</center></strong>
              <Image src={img4} height={80} width={205}></Image>
              <strong><center>2.200.000 - 3.200.000</center></strong>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <strong><center>Kambing Super</center></strong>
              <Image src={img5} height={80} width={205}></Image>
              <strong><center>5.200.000 - 7.000.000</center></strong>

            </div>
            <div className="text-xl text-center text-gray-700 dark:text-white">
              Lokasi alamat :
              <br />
              Jalan Mampang Prapatan XV Jakarta Selatan.
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
 

export default Hero;