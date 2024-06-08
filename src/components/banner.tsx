import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface BannerProducts {
  image: string;
  id: number;
}

interface ProductListProps {
  products: BannerProducts[];
}

export const bannerProducts: BannerProducts[] = [
  { id: 1, image: '/assets/b-11.png' },
  { id: 2, image: '/assets/b-12.png' },
  { id: 3, image: '/assets/b-11.png' },
  { id: 4, image: '/assets/b-12.png' },
];

export const BannerTest: React.FC<ProductListProps> = ({ products }) => {
  const displayedProducts = products.slice(0, 8);

  const settings = {
    dots: false, // Remover os pontinhos de navegação
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Remover os pontinhos de navegação nos pontos de quebra
        },
      },
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Remover os pontinhos de navegação nos pontos de quebra
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Remover os pontinhos de navegação nos pontos de quebra
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {displayedProducts.map((product) => (
          <ProductBox key={product.id}>
            <ImageContainer>
              <Image src={product.image} alt="produto" width={1000} height={300} layout="responsive" />
            </ImageContainer>
          </ProductBox>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3.5rem;

  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const ProductBox = styled.div`
  padding: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  position: relative;
`;

export default BannerTest;
