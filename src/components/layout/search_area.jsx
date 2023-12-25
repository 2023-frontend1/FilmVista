import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { color, flexAlign, fontWeight } from '../../styles/themes/@index';
import { Button } from '../@index';

/**
 * @description
 * 상단에 영화제목을 검색하면 해당영화를 찾아주는 검색창 컴포넌트입니다.
 */
const SearchArea = () => {
	const navigate = useNavigate();
	return (
		<S.Div_Container>
			<S.For_Form>
				<S.Inp_Input
					placeholder="찾고싶은 영화를 검색해주세요 🔍"
					name="subject"
				></S.Inp_Input>
				<Button
					onClick={() => {
						navigate('/search');
					}}
					style={{ height: '4.5rem', fontWeight: '800' }}
					$bgColor={`${color.gray[900]}`}
					$color={`${color.green[500]}`}
				>
					검색
				</Button>
			</S.For_Form>
		</S.Div_Container>
	);
};
export default SearchArea;

const Div_Container = styled.div`
	margin-right: 3rem;
`;
const For_Form = styled.form`
	${flexAlign.alignCenter}
`;
const Inp_Input = styled.input`
	width: 30rem;
	height: 4rem;
	border-radius: 3rem;
	margin-right: 2rem;
	padding: 1rem;
	font-weight: ${fontWeight.bold};
`;
const S = {
	Div_Container,
	For_Form,
	Inp_Input,
};
