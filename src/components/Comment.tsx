import React, { useState } from 'react';
import styled from 'styled-components';
import { Star, StarFill } from 'react-bootstrap-icons';

interface Comment {
  name: string;
  photo: string;
  review: string;
  rating: number;
  productPhotos: string[];
}

const CommentSection: React.FC = () => {
  const initialComments: Comment[] = [
    {
      name: 'Amelia John',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: 'Este produto é excelente! Iniciei o uso imediatamente, comprarei novamente.',
      rating: 5,
      productPhotos: [
        'https://plus.unsplash.com/premium_photo-1670584258172-102db20b1da3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ]
    },
    {
      name: 'John Doe',
      photo: 'https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: 'Muito bom! Atendeu todas as minhas expectativas.',
      rating: 4,
      productPhotos: [
        'https://plus.unsplash.com/premium_photo-1681420616267-5a320d33da70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://via.placeholder.com/150'
      ]
    },
    {
      name: 'Jane Smith',
      photo: 'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: 'Produto de qualidade mediana. Poderia ser melhor.',
      rating: 3,
      productPhotos: [
        'https://images.unsplash.com/photo-1573575155376-b5010099301b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1573575154488-f88a60e170df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ]
    },
    {
      name: 'Alice Johnson',
      photo: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: 'Não gostei do produto. Não recomendo.',
      rating: 2,
      productPhotos: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    }
  ];

  const [comments, setComments] = useState<Comment[]>(initialComments);
  return (
    <Container>
      <Title>Comentários</Title>
      <CommentList>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <Photo src={comment.photo} alt={comment.name} />
            <div>
              <CommentName>{comment.name}</CommentName>
              <CommentText>{comment.review}</CommentText>
              <Rating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} isFilled={star <= comment.rating}>
                    {star <= comment.rating ? <StarFill /> : <Star />}
                  </StarIcon>
                ))}
              </Rating>
              <ProductPhotoList>
                {comment.productPhotos.map((productPhoto, idx) => (
                  <ProductPhoto key={idx} src={productPhoto} alt={`Product ${idx}`} />
                ))}
              </ProductPhotoList>
            </div>
          </CommentItem>
        ))}
      </CommentList>
    </Container>
  );
};

export default CommentSection;

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CommentList = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  background: #fafafa;
  padding: 10px;
  border-radius: 5px;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentName = styled.div`
  font-weight: bold;
`;

const CommentText = styled.div`
  margin: 5px 0;
`;

const Rating = styled.div`
  display: flex;
`;

const StarIcon = styled.div<{ isFilled: boolean }>`
  color: ${(props) => (props.isFilled ? '#ffd700' : '#ccc')};
  cursor: pointer;
`;

const ProductPhotoList = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const ProductPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;
