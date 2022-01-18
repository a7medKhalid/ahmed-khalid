import Tqyeem from "/src/images/projects/Tqyeem.png"
import Portfolio from "/src/images/projects/Portfolio.png"
import underConstruction from "/src/images/projects/underConstruction.png"



import React from "/src/images/projects/react-1-logo-png-transparent.png"
import Eth from "/src/images/projects/Eth.png"
import Solidity from "/src/images/projects/solidity.png"
import Laravel from "/src/images/projects/laravelpng.png"


export const CarouselProjectData = [
    {
        title:"تقييم",
        desc:"مشروع مبني على البلوكتشين على شبكة ايثريوم مبني بإستخدام لغة سوليدتي الخاصة ببرمجة البلوكتشين وإطار دجانقو الخاص بتطوير الويب",
        image: Tqyeem,
        start:"https://tqyeem.herokuapp.com/",
        code:"https://github.com/a7medKhalid/tqyeem_heroku/tree/master",
        tech1:Eth,
        tech2:Solidity

    },
    {
        title:"موقعي الشخصي",
        desc:"هذا الموقع الذي تتصفحه",
        image: Portfolio,
        start:"",
        code:"",
        tech1:React,

    },
    {
        title:"API",
        desc:" مبني بإستخدام لارافل لمشروع جاري العمل عليه حاليا تم ربطه ببوابة دفع وبناء شات والعديد من المزايا",
        image: underConstruction,
        start:"",
        code:"",
        tech1:Laravel,

    },

];
