import styled from 'styled-components';
import { color, fontSize, fontWeight } from '../styles/themes/@index';

const TopButton = () => {
	return <S.Button onClick={() => window.scrollTo(0, 0)}>top</S.Button>;
};
export default TopButton;

const Button = styled.button`
	border-radius: 50%;
	font-size: ${fontSize.large};
	font-weight: ${fontWeight.bold};
	padding: 2rem;
	background-color: ${color.yellow[200]};
	position: fixed;
	right: 3rem;
	bottom: 3rem;
`;
const S = {
	Button,
};
