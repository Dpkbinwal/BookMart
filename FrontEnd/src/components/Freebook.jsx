import React from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card"

const Freebook = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const filterData = list.filter((data) => data.category === "Free")
    console.log(filterData)
    return (
        <>
            <div className='max-w-screen-2xl container mt-5 md:m-auto md:px-20 px-4 '>
                <div className='max-w-screen-2xl container mx-auto md:px-10 px-1'>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequuntur quis s nostrum corrupti deserunt necessitatibus optio, quos alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores laboriosam reprehenderit voluptas!</p>
                </div>
                <div className="mt-10 max-w-screen-2xl container mx-auto md:px-10 px-1">
                    <Slider {...settings}>
                        {
                            filterData.map((item)=>{
                               return <Card item={item} key={item.id}/>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook