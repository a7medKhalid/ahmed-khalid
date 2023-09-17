
import React, { Component } from "react";


class ServicesPage extends Component {
    render() {
        return (
            <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h2 className="mb-4 text-xl font-extrabold tracking-tight  text-white">لديك فكرة مشروع تقني أو ترغب في تطوير مشروعك الحالي؟</h2>
                    <section className="mb-5 font-light  text-gray-400 w-full">
                        <p className={"text-xl"}>🎉 لقد وصلت </p>
                        <p className={"md:text-sm"}>  البداية ستكون باستشارة لتحليل فكرة المشروع وتحديد أنسب الحلول التقنية وخطة التطوير </p>
                    </section>

                    <section className="mb-5 ">
                        <h2 className=" font-extrabold tracking-tight text-white">  التزاماتنا</h2>
                        <ol className="font-light md:text-sm text-gray-400 ">
                            <li className={"after:content-['-']"}>الوصول للعملاء بأسرع وقت لأننا نستخدم منهجية  الإدارة الرشيقة </li>
                            <li className={"after:content-['-']"}>الالتزام بمعايير جودة البرمجيات لتجنب مشاكل الاطلاق وتسهيل التعديلات لاحقًا</li>
                            <li className={"after:content-['-']"}>تجربة مستخدم ممتعة لأننا سننطلق مما يحتاجه المستخدم</li>
                            <li className={"after:content-['-']"}>التزام بالمواعيد والتسليم في الوقت المحدد</li>
                        </ol>
                    </section>
                    <a href="https://wa.me/message/VENQWFYQPBWEN1" className=" bg-green-600 hover:bg-green-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white  focus:ring-green-900"> ابدأ باستشارة مجانية</a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

        

                </div>
                
                
            </div>
            </section>
        );
    }
}


export default ServicesPage;