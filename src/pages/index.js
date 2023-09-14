import React from "react"
import { useState } from "react";

import Twitter from "/src/images/svg/icons8-twitter.svg"
import Youtube from "/src/images/svg/icons8-youtube.svg"
import Whatsapp from "/src/images/svg/whatsapp-121.svg"
import Github from "/src/images/svg/github.svg"
import Linkedin from "/src/images/svg/Linkedin.svg"

import Avatar from "/src/images/avatar.jpg"

import Projects from "/src/images/svg/projects.svg"
import ProjectsPage from "../component/ProjectsPage";

import Services from "/src/images/svg/Services.svg"
import ServicesPage from "../component/ServicesPage";

import Articles from "/src/images/svg/articles.svg"
import ArticlesPage from "../component/ArticlesPage";

// styles

// markup
const IndexPage = () => {
    const [selectedComponent, setSelectedComponent] = useState('services');

  return (
    <div className="bg-slate-950  w-full min-h-screen">
        

        <div className="bg-slate-950 md:fixed md:top-0 md:left-0 w-full text-white p-8 ">
           <div className="flex items-center justify-center flex-col md:flex-row-reverse">
                <div>
                    <img className="md:ml-4 mt-4 h-36 w-36 rounded-full ring-2 ring-white" src={Avatar} alt=""/>
                </div>
                <div className="mt-8 md:mr-8">
                    <div className="p-4">
                        <h1 className="text-4xl font-bold">أحمد خالد</h1>
                        <p className="text-2xl"> مهندس برمجيات</p>
                    </div>
                    <Twitter className="inline-block w-8 h-8 mr-2" />
                    <Youtube className="inline-block w-10 h-10 mr-2" />
                    <Whatsapp className="inline-block w-8 h-8 mr-2 " />
                    <Github className="inline-block w-8 h-8 mr-2" />
                    <Linkedin className="inline-block w-8 h-8 mr-2" />
                   
                
                </div>
            </div>
        </div>

        <div className={`bg-slate-900 flex md:flex-col px-4 md:px-0  fixed translate-x-1/2 md:translate-x-1 right-1/2 md:right-0 bottom-0 md:bottom-1/2 md:translate-y-1/2 rounded-2xl md:rounded-r md:rounded-l-2xl mb-8 md:mb-0 text-white`}>

            <div className="relative flex flex-col items-center p-2 md:p-4">
                <div className={`absolute top-0 md:left-0 left-1/4 md:top-1/4 w-1/2 md:h-1/2 h-1 md:w-1 ${selectedComponent === 'articles' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <Articles className="inline-block w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2 hover:animate-bounce" onClick={() => setSelectedComponent('articles')}/>
                <p className="text-xs mt-1 md:text-sm"> مقالات</p>
            </div>

            <div className="relative flex flex-col items-center p-2 md:p-4">
                <div className={`absolute top-0 md:left-0 left-1/4 md:top-1/4 w-1/2 md:h-1/2 h-1 md:w-1 ${selectedComponent === 'projects' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <Projects className="inline-block w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2 hover:animate-bounce " onClick={() => setSelectedComponent('projects')}/>
                <p className="text-xs mt-1 md:text-sm"> المشاريع</p>
            </div>

            <div className="relative flex flex-col items-center p-2 md:p-4">
                <div className={`absolute top-0 md:left-0 left-1/4 md:top-1/4 w-1/2 md:h-1/2 h-1 md:w-1 ${selectedComponent === 'services' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <Services className="inline-block w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2 hover:animate-bounce" onClick={() => setSelectedComponent('services')}/>
                <p className="text-xs mt-1 md:text-sm"> الخدمات</p>
            </div>
         



        </div>


        <div className="content-area md:mt-56 ">
        {selectedComponent === 'projects' && <ProjectsPage />}
        {selectedComponent === 'services' && <ServicesPage />}
            {selectedComponent === 'articles' && <ArticlesPage />}
      </div>


       
    </div>
  )
}

export default IndexPage
