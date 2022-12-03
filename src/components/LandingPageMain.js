import React from 'react';
import TeamProjectInfo from './TeamProjectInfo';

function LandingPageMain() {
  return (
    <>
      <div className="max-w-[80%] mx-auto mb-8">
        <section className="mb-4">
          <div className="font-montserrat">
            <h1 className="text-2xl font-bold text-center mt-8 mb-5">
              Mari bercerita di
              {' '}
              <span className="block text-[#8C4AF7]">Teman Bicara</span>
            </h1>
            <img src="assets/image/illustration1.svg" alt=" " className="mb-2 sm:hidden" />
            <p className="">
              Teman Bicara adalah platform yang dapat memfasilitasi remaja sebagai tempat
              bercerita dalam bentuk forum yang dapat diakses melalui website Teman Bicara
              selama ada akses internet.
            </p>
          </div>
          <img src="assets/image/illustration1.svg" alt=" " className="hidden sm:block" />
        </section>
        <section className="mb-4">
          <img src="assets/image/illustration2.svg" alt=" " className="mb-2" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing...
          </p>
        </section>
        <section>
          <img src="assets/image/illustration3.svg" alt=" " className="mb-4" />
          <p>
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
