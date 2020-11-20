import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
`;

const Avatar = () => {
  const randomSeed = Math.floor(Math.random() * 1000);

  return (
    <StyledAvatar
      src={`https://avatars.dicebear.com/api/human/${randomSeed}.svg`}
    />
  );
};
export default Avatar;
