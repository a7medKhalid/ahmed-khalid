import React, { Component } from "react";
import { CarouselProjectData } from "./CarouselProjectData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import Start from "/src/images/projects/start.png";
import Code from "/src/images/projects/showCode.png";

class ProjectCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            paused: false,
        };
    }
    //
    // componentDidMount() {
    //     setInterval(() => {
    //         if (this.state.paused === false) {
    //             let newSlide =
    //                 this.state.currentSlide === CarouselProjectData.length - 1
    //                     ? 0
    //                     : this.state.currentSlide + 1;
    //             this.setState({ currentSlide: newSlide });
    //         }
    //     }, 3000);
    // }

    nextSlide = () => {
        let newSlide =
            this.state.currentSlide === CarouselProjectData.length - 1
                ? 0
                : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    };

    prevSlide = () => {
        let newSlide =
            this.state.currentSlide === 0
                ? CarouselProjectData.length - 1
                : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
    };

    setCurrentSlide = (index) => {
        this.setState({ currentSlide: index });
    };

    render() {
        return (
            <div className="relative px-5">
                <div className="w-full h-2xl flex overflow-hidden relative"
                     onMouseEnter={() => {
                         this.setState({ paused: true });
                     }}
                     onMouseLeave={() => {
                         this.setState({ paused: false });
                     }}>
                    <AiOutlineLeft
                        onClick={this.prevSlide}
                        className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer ml-5"
                    />

                    <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                        <div className="flex items-center justify-center h-screen w-screen">
                            {CarouselProjectData.map((slide, index) => {
                                return (
                                    <div className={index === this.state.currentSlide
                                                ? "flex items-center justify-center w-full h-auto"
                                                : "hidden"}>

                                        <div>
                                            <div className={index === this.state.currentSlide
                                                ? "md:flex flex-row"
                                                : ""}>
                                                <div>
                                                    <div className="object-contain h-48 w-96">
                                                        <div className="flex flex-row-reverse">
                                                            <p className={
                                                                index === this.state.currentSlide
                                                                    ? "text-4xl font-bold"
                                                                    : "hidden"
                                                            }>
                                                                {slide.title}
                                                            </p>


                                                            <div>

                                                            </div>
                                                        </div>

                                                        <p className={index === this.state.currentSlide
                                                            ? "text-xl"
                                                            : "hidden"}>{slide.desc}</p>
                                                    </div>

                                                    <div className="">

                                                        <p>
                                                            التقنيات المستخدمة
                                                        </p>

                                                        <div className="flex flex-row-reverse">
                                                            <img
                                                                src={slide.tech1}
                                                                alt=""
                                                                key={index}
                                                                className={
                                                                    index === this.state.currentSlide
                                                                        ? "h-12 w-auto"
                                                                        : "hidden"
                                                                }

                                                            />

                                                            <img
                                                                src={slide.tech2}
                                                                alt=""
                                                                key={index}
                                                                className={
                                                                    index === this.state.currentSlide
                                                                        ? "h-12 w-auto"
                                                                        : "hidden"
                                                                }

                                                            />

                                                            <img
                                                                src={slide.tech3}
                                                                alt=""
                                                                key={index}
                                                                className={
                                                                    index === this.state.currentSlide
                                                                        ? "h-12 w-auto"
                                                                        : "hidden"
                                                                }

                                                            />
                                                        </div>
                                                        <div className="flex flex-row-reverse mt-5">
                                                            <a href={slide.start} target="blank">
                                                                <img
                                                                    src={Start}
                                                                    alt=""
                                                                    key={index}
                                                                    className={
                                                                        index === this.state.currentSlide
                                                                            ? "h-9 w-auto px-5"
                                                                            : "hidden"
                                                                    }
                                                                />
                                                            </a>
                                                            <a href={slide.code} target="blank">
                                                                <img
                                                                    src={Code}
                                                                    alt=""
                                                                    key={index}
                                                                    className={
                                                                        index === this.state.currentSlide
                                                                            ? "h-9 w-auto"
                                                                            : "hidden"
                                                                    }

                                                                />
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="md:ml-8">
                                                    <img
                                                        src={slide.image}
                                                        alt="This is a carousel slide"
                                                        key={index}
                                                        className={
                                                            index === this.state.currentSlide
                                                                ? "object-contain h-auto w-96 mt-8"
                                                                : "hidden"
                                                        }
                                                        onMouseEnter={() => {
                                                            this.setState({ paused: true });
                                                        }}
                                                        onMouseLeave={() => {
                                                            this.setState({ paused: false });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                    </Swipe>

                    <div className="absolute w-full flex justify-center bottom-0 mb-5">
                        {CarouselProjectData.map((element, index) => {
                            return (
                                <div
                                    className={
                                        index === this.state.currentSlide
                                            ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                            : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                                    }
                                    key={index}
                                    onClick={() => {
                                        this.setCurrentSlide(index);
                                    }}
                                />
                            );
                        })}
                    </div>

                    <AiOutlineRight
                        onClick={this.nextSlide}
                        className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer mr-5"
                    />
                </div>
            </div>
        );
    }
}

export default ProjectCarousel;