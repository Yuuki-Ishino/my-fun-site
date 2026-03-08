import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

function MainVisual() {
  return (
    <section className="h-[800px] w-full no-bg">
      {/* <div className="absolute inset-0 -z-10">
				<img 
				src="/images/top-image.jpg" 
				alt="top-page-bg" 
				className="w-full h-full object-cover fixed top-0 left-0"
				/>
			</div> */}
      <div className="max-w-[1280px] mx-auto h-full relative">
        <div className="absolute w-full text-white bottom-10 bg-black/20">
          <div className="w-[90%] mx-auto">
            <h1 className="text-[70px] font-bold">Kuu</h1>
            

            <div className="flex justify-between items-center w-full">
              {/* 左側 */}
              <p className="text-[24px] font-black">
                #くう
              </p>

              {/* 右側 */}
              <div className="flex space-x-8">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/ku_dredre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:text-pink-400 active:text-pink-400 transition-colors"
                >
                  <FaInstagram />
                </a>

                {/* X */}
                <a
                  href="https://x.com/ku_dredre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:text-blue-400 active:text-blue-400 transition-colors"
                >
                  <FaXTwitter />
                </a>

                {/* Tiktok */}
                <a
                  href="https://www.tiktok.com/@ku_dredre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:text-red-400 active:text-red-400 transition-colors"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainVisual;
