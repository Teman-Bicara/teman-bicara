import React from 'react';

function TeamProjectInfo() {
  return (
    <section className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(\'assets/image/background-teamproject.png\')' }}>
      <div className="max-w-[80%] mx-auto pt-8">
        <h2 className="font-bold text-base bg-white text-center py-2 mb-8 mx-auto  max-w-md shadow-2xl">Team Project</h2>
        <div>
          <div className="bg-white rounded-2xl border-black border-2">
            <img src="assets/image/placeholder.png" alt=" " className="rounded-full" />
            <h1>Muhammad Alif Hanafiah</h1>
            <p>Universitas Putra Indonesia Yptk Padang</p>
            <p>
              Saya seorang Front-end Development Website pemula yang berdomisili di jakarta.
              Sekarang saya adalah mahasiswa semester 7 di Universitas Nusa Mandiri
            </p>
            <ul>
              <li>
                <a href="https://www.instagram.com/alifff_hanafiah/" target="_blank" rel="noreferrer">
                  <img src="assets/icons/instagramPersonal.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alifhanafiah/" target="_blank" rel="noreferrer">
                  <img src="assets/icons/linkedinPersonal.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/alifhanafiah" target="_blank" rel="noreferrer">
                  <img src="assets/icons/githubPersonal.svg" alt="" />
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
