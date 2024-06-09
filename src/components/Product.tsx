import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import Colors from '@/theme/theme';

interface Products {
  image: string;
  id: number;
}

interface ProductListProps {
  products: Products[];
}

export const products: Products[] = [
  { id: 1, image: '/assets/25.png' },
  { id: 2, image: '/assets/28.png' },
  { id: 3, image: '/assets/33.png' },
  { id: 4, image: '/assets/29.png' },
  { id: 5, image: '/assets/27.png' },
  { id: 6, image: '/assets/24.png' },
  { id: 7, image: '/assets/23.png' },
  { id: 8, image: '/assets/22.png' },
];

export const ProductInitial: React.FC<ProductListProps> = ({ products }) => {

  const displayedProducts = products.slice(0, 8);

  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false, 
        },
      },
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, 
        },
      },
    ],
  };


  return (
    <CarouselContainer>
      <Slider {...settings}> {/* {...settings}*/}
        {displayedProducts.map((product) => (
          <ProductBox key={product.id}>
        
              <ImageContainer>
                <Image src={product.image} alt="produto" width={250} height={200}  />
              </ImageContainer>
      
          </ProductBox>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <ChevronRight className={className} style={{ ...style, display: 'block', right: '10px', zIndex: 1 }} onClick={onClick} />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <ChevronLeft className={className} style={{ ...style, display: 'block', left: '10px', zIndex: 1 }} onClick={onClick} />
    </div>
  );
};

const CarouselContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3.5rem;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots li button:before {
    color: ${Colors.green200};
  }

  .slick-prev, .slick-next {
    color: #089703;
    font-size: 2rem;
    z-index: 1;
 }
`;

const ProductBox = styled.div`
  border: 1px solid #eeeeeecc;
  padding: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export default ProductInitial;

