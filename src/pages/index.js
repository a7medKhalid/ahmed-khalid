import React from "react"
import Logo from "/src/images/svg/programmer.svg"

import Twitter from "/src/images/svg/icons8-twitter.svg"
import Youtube from "/src/images/svg/icons8-youtube.svg"
import Whatsapp from "/src/images/svg/whatsapp-121.svg"

import CertCarousel from "/src/component/CertCarousel";
import ProjectCarousel from "/src/component/ProjectCarousel";
// styles

// markup
const IndexPage = () => {
  return (
    <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

      <section className="flex items-center justify-center w-full h-screen bg-gray-300 snap-start ">
          <div className="md:flex flex-row">
              <div>
                  <div className="object-contain h-48 w-96">
                      <p className="text-l px-5">أحمد خالد</p>
                      <p className="text-4xl font-bold px-5">مهندس برمجيات</p>
                      <p className="text-xl px-5">
                          تطوير مشاريع برمجية
                          متخصص في الباك اند وأمن المعلومات
                      </p>
                  </div>

                  <div className="flex flex-row-reverse">
                        <Twitter  className="w-10 h-auto ml-5 px-5"/>
                        <Youtube className="w-10 h-auto ml-5 px-5"/>
                        <Whatsapp className="w-10 h-auto px-5"/>
                  </div>
              </div>

              <div className="md:ml-8">
                <Logo className="object-contain h-auto w-96 mt-8" />
              </div>
          </div>
      </section>

      <section className="flex items-center justify-center w-full h-screen bg-gray-400 snap-start">
          <div className="">
              <ProjectCarousel />
          </div>
      </section>

      <section className="flex items-center justify-center w-full h-screen bg-gray-500 snap-start">
          <div className="">
              <p className="text-7xl font-bold text-center">الشهادات والإنجازات</p>

              <CertCarousel />
          </div>
      </section>

      {/*<section className="w-full h-screen bg-gray-600 snap-start">*/}
      {/*  <h1>Four Page</h1>*/}

      {/*</section>*/}
    </div>
  )
}

export default IndexPage
