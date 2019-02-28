import styled from 'styled-components';

export const HomeContainer = styled.div`
  left: 40px;
  right: 40px;
  bottom: 40px;
  top: 40px;
  background-color: rgba(100, 100, 100, 0.6);
  padding: 20px;
  border-radius: 8px;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  color: snow;
  text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.8);
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const ImageThumbnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;