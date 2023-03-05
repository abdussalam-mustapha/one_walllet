import React from 'react'

import "./feedback.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import p_img from "../../images/Logo_5.png"
import star from "../../images/Logo_3.png"


const Feedbacks = () => {

  const feedbacks = [
    {
      id: 0,
      img: star,
      title: "hola ammigos",
      desc: "the name of my best card is one wallet because it has many utilities features",
      namae: "alicia diamond",
      cover: p_img
    },
    {
      id: 1,
      img: star,
      title: "hola ammigos",
      desc: "the name of my best card is one wallet because it has many utilities features",
      namae: "alicia diamond",
      cover: p_img
    },
    {
      id: 2,
      img: star,
      title: "hola ammigos",
      desc: "the name of my best card is one wallet because it has many utilities features",
      namae: "alicia diamond",
      cover: p_img
    },
    {
      id: 3,
      img: star,
      title: "hola ammigos",
      desc: "the name of my best card is one wallet because it has many utilities features",
      namae: "alicia diamond",
      cover: p_img
    },
    {
      id: 4,
      img: star,
      title: "hola ammigos",
      desc: "the name of my best card is one wallet because it has many utilities features",
      namae: "alicia diamond",
      cover: p_img
    },
    {
      id: 5,
      img: star,
      title: "hola ammigos",
      desc: "the name of my best card is one wallet because it has many utilities features",
      namae: "alicia diamond",
      cover: p_img
    }
  ]

  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    control: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  }
  return (
    <section className='slider_sect'>
      <p className="t_text">TESTIMONIALS</p>
      <p className="t_header">Here's what users have to say</p>
      <Slider {...settings}>
        {feedbacks.map((value, index) => {
          return (
            <section className='card_parent'>
              <div className='card' key={index}>
                <img src={value.img} alt="" className="star" />
                <p className="title">{value.title}</p>
                <p className="desc">{value.desc}</p>
                <div className="card_footer">
                  <img src="value.cover" alt="" className="cover" />
                  <p className="name">{value.name}</p>
                </div>
              </div>
            </section>
          )
        })}
      </Slider>
    </section>
  )
}

export default Feedbacks
