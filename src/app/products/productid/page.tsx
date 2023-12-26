"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { Header } from '../../../../components/Header';
import Link from 'next/link';
import { getSingleProduct } from "@/helpers";


type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Details = ({ searchParams }: Props) => {
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idString = searchParams?.id;
        const id = Number(idString);
        const data = await getSingleProduct(id);

        if (data) {
          setProduct(data);
        } else {
          console.error('Produto não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <>
      <Header />

      {product ? (
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.imageContainer}>
              <Image src={product?.image} alt="" width={500} height={500} />
            </div>

            <div style={styles.detailsContainer}>
              <div style={styles.icon}>
                <Heart size={30} color={'#304918'} />
              </div>
              <div style={styles.icon}>
                <HeartFill size={30} color={'#304918'} />
              </div>

              <div style={styles.item}>
                <div style={styles.productName}>{product?.name}</div>
                <div style={styles.subProductName}>coconut</div>
              </div>

              <div style={styles.priceContainer}>
                <div style={styles.value}> {product?.price}</div>
                <div style={styles.buttonContainer}>
                  <div style={styles.button}>
                    <div style={styles.buttonLabel}> + 1 - </div>
                  </div>
                </div>
              </div>

              <div style={styles.aboutProducts}>
                <div style={styles.aboutProductsDiv}>About Products</div>
                <div style={styles.description}>
                  {product?.description}
                </div>
              </div>
              <Link href={'/products/cart'}>
                <div style={styles.buttonAdd}>
                  <div style={styles.buttonText}>Add To Bag</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
      </>
  );
};


export default Details;


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5rem',
    maxWidth: 800,
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  imageContainer: {
    display: 'flex',
    background: '#ffffff0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  detailsContainer: {
    margin: '1rem',
    position: 'relative',
  },
  icon: {
    marginRight: 20,
    marginTop: 20,
  },
  item: {
    marginLeft: 20,
  },
  productName: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10,
  },
  subProductName: {
    fontSize: 25,
    marginBottom: 20,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  value: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
    marginBottom: 30,
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 45,

    backgroundColor: '#304918',
    borderRadius: 15,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    display: 'flex',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304918',
    borderRadius: 20,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  aboutProductsDiv: {
    fontSize: 25,
    marginBottom: 10,
  },
  aboutProducts: {
    marginLeft: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
};


