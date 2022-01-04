import React from "react"
import Logo from "/src/images/svg/programmer.svg"
import Twitter from "/src/images/svg/icons8-twitter.svg"
import Youtube from "/src/images/svg/icons8-youtube.svg"

//import Programmer from "/src/images/svg/programmer.svg"

// styles

// markup
const IndexPage = () => {
  return (
    <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

      <section className="flex items-center justify-center w-full h-screen bg-gray-300 snap-start ">
          <div className="md:flex flex-row">
              <div>
                  <div className="object-contain h-48 w-96">
                      <p className="text-7xl font-bold">أحمد خالد</p>
                      <p className="text-xl">أبجد هوز أبجد هوز أبجد هوز أبجد هوز أبجد هوز
                          أبجد هوز أبجد هوز أبجد هوز أبجد هوز أبجد هوز
                          أبجد هوز أبجد هوز أبجد هوز أبجد هوز أبجد</p>
                  </div>

                  <div className="flex justify-center">
                        <Twitter  className="ml-8 mr-8"/>
                        <Youtube />
                  </div>
              </div>

              <div className="md:ml-8">
                <Logo className="object-contain h-auto w-96 mt-8" />
              </div>
          </div>
      </section>

      <section className="w-full h-screen bg-gray-400 snap-start">
        <h1>Second Page</h1>
      </section>

      <section className="w-full h-screen bg-gray-500 snap-start">
        <h1>Third Page</h1>
      </section>

      <section className="w-full h-screen bg-gray-600 snap-start">
        <h1>Four Page</h1>
      </section>
    </div>
  )
}

export default IndexPage
