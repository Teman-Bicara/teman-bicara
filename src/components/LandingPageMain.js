import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TeamProjectInfo from './TeamProjectInfo';

function LandingPageMain() {
  return (
    <>
      <div className="max-w-[80%] mx-auto mb-8 mt-8">
        <section className="mb-4 md:grid md:grid-cols-2 md:gap-8 md:mb-24 md:items-center">
          <div data-aos="fade-down" className="font-montserrat lg:grid">
            <h1 className="text-2xl font-bold text-center mt-8 mb-5 md:text-right lg:text-4xl xl:text-6xl">
              Mari bercerita di
              {' '}
              <span className="block text-primary xl:mb-8">Teman Bicara</span>
            </h1>
            <LazyLoadImage data-aos="zoom-in" src="/assets/image/illustration1.svg" alt="orang sedang diskusi" className="mb-2 mx-auto md:hidden" />
            <p className="md:text-xl text-justify">
              Teman Bicara adalah platform yang dapat memfasilitasi remaja sebagai tempat
              bercerita dalam bentuk forum yang dapat diakses melalui website Teman Bicara
              selama ada akses internet.
            </p>
          </div>
          <LazyLoadImage data-aos="fade-left" src="/assets/image/illustration1.svg" alt="orang sedang diskusi" className="hidden mx-auto md:block" />
        </section>

        <section data-aos="fade-up" className="mb-4 md:grid md:grid-cols-2 md:gap-8 md:mb-24 md:items-center">
          <LazyLoadImage src="/assets/image/illustration2.svg" alt="orang sedang berkomunikasi virtual" className="mb-2 mx-auto" />
          <p className="md:text-xl text-justify">
            Kenapa harus menggunakan
            {' '}
            <span className="text-primary font-semibold">Teman Bicara?</span>
            {' '}
            Karena di platform ini menyediakan forum untuk bercerita secara anonim maupun tidak bagi para remaja yang merasa ada gangguan kesehatan mental yang dialami dan bingung untuk menyampaikan apa yang sedang dialaminya.
          </p>
        </section>

        <section className="mb-4 md:grid md:grid-cols-2 md:gap-8 md:mb-24 md:items-center">
          <LazyLoadImage data-aos="fade-left" src="/assets/image/illustration3.svg" alt="orang sedang menelepon teman" className="mb-4 mx-auto md:order-2" />
          <p data-aos="fade-right" className="md:text-xl text-justify">
            Dengan adanya platform forum ini diharapkan para remaja lebih berani untuk menceritakan permasalahan kesehatan mental yang sedang dialami pada orang lain.
          </p>
        </section>

        <div data-aos="fade-up" className="max-w-4xl p-4 text-gray-800 bg-gray-200 rounded-lg shadow mx-auto">
          <div className="mb-2">
            <div className="h-3 text-3xl text-left text-gray-600">“</div>
            <p className="px-4 text-xl text-center text-gray-600 font-inter font-semibold italic">
              Bicarakan apa yang jadi beban, dan kembalikan senyum yang terpendam
            </p>
            <div className="h-3 text-3xl text-right text-gray-600">”</div>
            <p className="px-4 text-xl text-center text-gray-600 font-inter font-semibold italic">
              -Riliv
            </p>
          </div>
        </div>
      </div>
      <TeamProjectInfo />
    </>
  );
}

export default LandingPageMain;
