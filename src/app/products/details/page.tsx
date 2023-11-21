import React from 'react';
import Image from 'next/image';
import { EaselFill, Heart, HeartFill } from 'react-bootstrap-icons';
import { Header } from '../../../../components/Header';

interface DetailsScreenProps {
  productName: string;
  image: string;
  value: string;
  description: string;
  buttonLabel: string;
}

const Details: React.FC<DetailsScreenProps> = ({ productName, image, value, description, buttonLabel }) => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.imageContainer}>
            <Image src={image} alt={productName} width={500} height={400} />
          </div>

          <div style={styles.detailsContainer}>
            <div style={styles.icon}>
              <Heart size={30} color={'#304918'} />
            </div>
            <div style={styles.icon}>
              <HeartFill size={30} color={'#304918'} />
            </div>

            <div style={styles.item}>
              <div style={styles.productName}>Creme corporal de Coco</div>
              <div style={styles.subProductName}>EcoBuy</div>
            </div>

            <div style={styles.priceContainer}>
              <div style={styles.value}>R$ 47,99</div>
              <div style={styles.buttonContainer}>
                <div style={styles.button}>
                  <div style={styles.buttonLabel}>+ 1 - </div>
                </div>
              </div>
            </div>

            <div style={styles.aboutProducts}>
              <div style={styles.aboutProductsDiv}>About Products</div>
              <div style={styles.description}>
                Readable content of a page when looking at The point of using Lorem Ipsum is that it has a readable
                content of a page when looking at The point of using Lorem Ipsum is that it has a distribution of
                letters, as opposed The point of using Lorem Ipsum is that it has a readable content of a page when
                looking at The point of using Lorem Ipsum is that it has a
              </div>
            </div>

            <div style={styles.buttonAdd}>
              <div style={styles.buttonText}>Add To Bag</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    marginLeft: 20,
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
    width: '20%', 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304918',
    borderRadius: 15,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignContent:'center',
    justifyContent:'center',
  },
  buttonAdd: {
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

export default Details;
