/* eslint-disable max-len */
import React from 'react';
import TeamProjectInfo from './TeamProjectInfo';

function LandingPageMain() {
  return (
    <>
      <div className="max-w-[80%] mx-auto mb-8">
        <section className="mb-4 md:grid md:grid-cols-2 md:gap-8 md:mb-24 md:items-center">
          <div className="font-montserrat lg:grid">
            <h1 className="text-2xl font-bold text-center mt-8 mb-5 md:text-right lg:text-4xl xl:text-6xl">
              Mari bercerita di
              {' '}
              <span className="block text-[#8C4AF7] xl:mb-8">Teman Bicara</span>
            </h1>
            <img src="assets/image/illustration1.svg" alt=" " className="mb-2 mx-auto md:hidden" />
            <p className="md:text-xl text-justify">
              Teman Bicara adalah platform yang dapat memfasilitasi remaja sebagai tempat
              bercerita dalam bentuk forum yang dapat diakses melalui website Teman Bicara
              selama ada akses internet.
            </p>
          </div>
          <img src="assets/image/illustration1.svg" alt=" " className="hidden mx-auto md:block" />
        </section>
        <section className="mb-4 md:grid md:grid-cols-2 md:gap-8 md:mb-24 md:items-center">
          <img src="assets/image/illustration2.svg" alt=" " className="mb-2 mx-auto" />
          <p className="md:text-xl text-justify">
            Kenapa harus menggunakan
            {' '}
            <span className="text-[#8C4AF7] font-semibold">Teman Bicara?</span>
            {' '}
            Karena di platform ini menyediakan forum untuk bercerita secara anonim maupun tidak bagi para remaja yang merasa ada gangguan kesehatan mental yang dialami dan bingung untuk menyampaikan apa yang sedang dialaminya.
          </p>
        </section>
        <section className="mb-4 md:grid md:grid-cols-2 md:gap-8 md:mb-24 md:items-center">
          <img src="assets/image/illustration3.svg" alt=" " className="mb-4 mx-auto md:order-2" />
          <p className="md:text-xl text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing...
          </p>
        </section>
      </div>
      <TeamProjectInfo />
    </>
  );
}

export default LandingPageMain;
