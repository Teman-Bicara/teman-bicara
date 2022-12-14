import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import profil1 from '../profil1.webp';
import profil2 from '../profil2.webp';
import profil3 from '../profil3.webp';
import profil4 from '../profil4.webp';

function TeamProjectInfo() {
  return (
    <section data-aos="fade-up" className="bg-cover bg-no-repeat bg-center pt-8 pb-16" style={{ backgroundImage: 'url(\'assets/image/background-teamproject.webp\')' }} id="about-us">
      <div className="max-w-[85%] mx-auto xl:max-w-[70%]">
        <h2 className="font-bold text-base bg-white text-center text-[#304652] py-2 mb-8 mx-auto  max-w-md shadow-2xl xl:text-4xl xl:py-6 xl:max-w-xl">Our Team</h2>
        <div className="grid gap-20 mt-20 md:grid-cols-2 xl:gap-32">

          <div data-aos="flip-left" className="bg-[#FFFFFFAD] rounded-2xl relative px-11 shadow-2xl">
            <LazyLoadImage src={profil1} alt="Foto profil tim 1 " className="w-[110px] h-[110px] rounded-full bg-cover absolute top-[-3rem] left-4" />
            <h1 className="text-primary font-bold text-2xl mt-20 mb-1">Muhammad Alif Hanafiah</h1>
            <p className="text-[#304652] font-bold mb-4">Universitas Putra Indonesia Yptk Padang</p>
            <p className="text-[#304652] font-bold mb-8">
              Saya adalah seorang mahasiswa yang memiliki passion dalam membangun aplikasi web yang interaktif dan memiliki aksesibilitas yang baik untuk penggunanya.
            </p>
            <ul className="flex gap-8 mb-12">
              <li>
                <a href="https://www.instagram.com/alifff_hanafiah/" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/instagramPersonal.svg" alt="icon instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alifhanafiah/" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/linkedinPersonal.svg" alt="icon linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/alifhanafiah" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/githubPersonal.svg" alt="icon github" />
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="flip-right" className="bg-[#26235CAD] rounded-2xl relative px-11 shadow-2xl">
            <LazyLoadImage src={profil2} alt="Foto profil tim 2" className="w-[110px] h-[110px] rounded-full bg-cover absolute top-[-3rem] left-4" />
            <h1 className="text-[#2DF8BB] font-bold text-2xl mt-20 mb-1">Kresna Satya Nugroho</h1>
            <p className="text-white font-bold mb-4">Universitas Tanjungpura</p>
            <p className="text-white font-bold mb-8">
              Seorang mahasiswa tingkat akhir di Universitas Tanjungpura yang sedang belajar Front-End Development. Hobi ngoding cita-cita jadi fullstuckoverflow developer.
            </p>
            <ul className="flex gap-8 mb-12">
              <li>
                <a href="https://www.instagram.com/kisnaak.ngroho/" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/instagramPersonal.svg" alt="icon instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kresna-satya-nugroho-0bb3b1227/" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/linkedinPersonal.svg" alt="icon linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/kisnak21" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/githubPersonal.svg" alt="icon github" />
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="flip-left" className="bg-[#304652AD] rounded-2xl relative px-11 shadow-2xl">
            <LazyLoadImage src={profil3} alt="Foto profil tim 3 " className="w-[110px] h-[110px] rounded-full bg-cover absolute top-[-3rem] left-4" />
            <h1 className="text-[#2DF8BB] font-bold text-2xl mt-20 mb-1">Muhammad Raihan Ramadhan</h1>
            <p className="text-white font-bold mb-4">Universitas Nusa Mandiri</p>
            <p className="text-white font-bold mb-8">
              Saya seorang Front-end Development Website pemula yang berdomisili di jakarta.
              Sekarang saya adalah mahasiswa semester 7 di Universitas Nusa Mandiri
            </p>
            <ul className="flex gap-8 mb-12">
              <li>
                <a href="https://www.instagram.com/_raihan2k_/?hl=id" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/instagramPersonal.svg" alt="icon instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-raihan-ramadhan-62272b245/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage src="/assets/icons/linkedinPersonal.svg" alt="icon linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Raihan-2k" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/githubPersonal.svg" alt="icon github" />
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="flip-right" className="bg-[#FFFFFFAD] rounded-2xl relative px-11 shadow-2xl">
            <LazyLoadImage src={profil4} alt="Foto profil tim 4 " className="w-[110px] h-[110px] rounded-full bg-cover absolute top-[-3rem] left-4" />
            <h1 className="text-primary font-bold text-2xl mt-20 mb-1">Laida Lavenia. H</h1>
            <p className="text-[#304652] font-bold mb-4">
              Universitas Jember
            </p>
            <p className="text-[#304652] font-bold mb-8">
              Saya merupakan seorang mahasiswa semester 5 dari jurusan Teknologi Informasi. Dan saya juga suka mempelajari hal-hal baru yang bisa menambah skill saya terutama di bidang IT yaitu Front End Web Developer
            </p>
            <ul className="flex gap-8 mb-12">
              <li>
                <a href="https://www.instagram.com/laidalav_/" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/instagramPersonal.svg" alt="icon instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/laidalavenia/" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/linkedinPersonal.svg" alt="icon linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/laidalavenia" target="_blank" rel="noreferrer">
                  <LazyLoadImage src="/assets/icons/githubPersonal.svg" alt="icon github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamProjectInfo;
