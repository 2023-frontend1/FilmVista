import styled, { keyframes } from 'styled-components';
import color from '../styles/themes/color';
const Skeleton = ({ $width = '100px', $height = '100px' }) => {
	return <Div_Skeleton {...{ $width, $height }} />;
};

export default Skeleton;

const animaBlink = keyframes`
  from { background-color: ${color.black[600]}; }
  to   { background-color: ${color.gray[100]}; }
`;

const Div_Skeleton = styled.div`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	animation: ${animaBlink} 1s infinite linear alternate;
	border-radius: 1rem;
`;
