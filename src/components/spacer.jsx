import styled from 'styled-components';
const Spacer = ({ $width = '0px', $height = '0px' }) => {
	console.log($width, $height);
	return <Div_Spacer {...{ $width, $height }} />;
};

export default Spacer;

const Div_Spacer = styled.div`
	width: ${({ $width }) => $width};
	min-width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	min-height: ${({ $height }) => $height};
	background-color: red;
	display: inline-block;
`;
