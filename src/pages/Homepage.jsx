import Navbar from "../components/Navbar";
import LogoWelcomebanner from "../assets/LogoWelcomebanner.png";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto px-3 md:px-0 flex flex-wrap '>
        {/* Block For Text Banner Section */}
        <div
          className={
            "w-screen h-fit md:min-h-[calc(100vh-50vh)]  lg:min-h-[calc(100vh-80px)] md:w-1/2 py-10 flex flex-wrap gap-3 items-center justify-center lg:px-4 lg:py-0"
          }
        >
          <div className={"px-2 md:px-6"}>
            <h2
              className={
                "text-3xl font-bold font-poppins text-left lg:text-5xl"
              }
            >
              Hai,Selamat Datang !
            </h2>
            <p
              className={
                "text-base font-poppins font-normal my-4 lg:my-8 lg:text-lg"
              }
            >
              CleanEarth merupakan solusi dari permasalahan sampah anda. Yuk
              gabung bersama komunitas kami untuk membuat perubahan positif
              dalam menjaga bumi kita tetap hijau dan sehat{" "}
            </p>
            <Button
              type='submit'
              className='bg-[#618264] outline-2 text-white outline outline-black'
            >
              Gabung Yuk
            </Button>
          </div>
        </div>
        {/* Block Code Of Image Banner  */}
        <div
          className={
            "w-screen md:min-h-[calc(100vh-50vh)] lg:min-h-[calc(100vh-80px)] md:w-1/2 flex justify-center items-center"
          }
        >
          <div
            className={
              "w-4/5 md:w-2/3 lg:w-2/3 aspect-square bg-gradient-to-b from-[#D0E7D2] to-transparent rounded-full p-4"
            }
          >
            <img
              src={LogoWelcomebanner}
              alt=''
              className={"bg-center bg-cover"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
