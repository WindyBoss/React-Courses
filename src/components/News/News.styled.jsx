import styled from 'styled-components';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';


export const RotareIcon = styled(HourglassBottomTwoToneIcon)`
animation: spin 2s infinite;
width: 20px;
height: 20px;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const NewsContainer = styled.div`
  display: inline-block;
  width: 50%;
  border: 1px solid black;
  padding: 20px;
  font-size: 14px;
`;

export const NewsList = styled.ul`
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const NewItem = styled.li`
display: flex;
align-items: center;
`;

export const Link = styled.a`
text-decoration: none;
font-size: 10px;
color: black;
min-width: 50px;
min-height: 50px;
`;

export const LinkButton = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 10px;
:not(:last-child) {
  margin-bottom: 10px;
}
`;

export const LinkTitle = styled.p`
color: black;
font-size: 14px;
`;

export const IdleText = styled.h2`
font-size: 20px;
font-weight: bold;
margin-bottom: 20px;
`;


export const PendingText = styled.p`
font-size: 24px;
display: flex;
align-items: center;
`;
