import styled from 'styled-components';
import { AlignContainer, Button, Poster } from '../../../components/@index';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../../styles/themes/@index';

const Preview = ({
	movieId,
	title,
	description = '🚨 미리보기가 없습니다.',
	popularity,
	voteAverage,
	voteCount,
	releaseDate,
	posterPath,
	onClickDetailBtn,
	$isReverse,
	$bgColor,
}) => {
	return (
		<AlignContainer $compressibility="15%" {...{ $bgColor }}>
			<S.Div_BisectionArea {...{ $isReverse }}>
				<S.Div_TextArea>
					<S.H1_Title>{title}</S.H1_Title>
					<S.P_Description>{description}</S.P_Description>
					<S.Sec_AdditionalInfoContainer>
						<S.P_AdditionalInfo>🔥 인기지수: {popularity}</S.P_AdditionalInfo>
						<S.P_AdditionalInfo>
							👍 평점 / 투표수 : {voteAverage} / {voteCount}
						</S.P_AdditionalInfo>
						<S.P_AdditionalInfo>📅 개봉일 : {releaseDate}</S.P_AdditionalInfo>
					</S.Sec_AdditionalInfoContainer>
					<Button onClick={() => onClickDetailBtn(movieId)}>
						자세히 보러가기 〉
					</Button>
				</S.Div_TextArea>
				<S.Div_TextArea>
					<Poster src={posterPath} $width="80%" />
				</S.Div_TextArea>
			</S.Div_BisectionArea>
		</AlignContainer>
	);
};

export default Preview;

const Div_BisectionArea = styled.div`
	width: 100%;
	height: 80vh;
	${flexAlign.justifyBetween}
	flex-direction: ${({ $isReverse }) => ($isReverse ? 'row-reverse' : 'row')};
	align-items: center;
`;
const Div_TextArea = styled.div`
	width: 50%;
	height: 100%;
	${flexAlign.flexCenter}
	flex-direction: column;
	gap: 15px;
	color: ${color.gray[900]};
`;
const H1_Title = styled.h1`
	align-self: start;
`;
const P_Description = styled.p`
	align-self: start;
	color: ${color.gray[900]};
	font-weight: ${fontWeight.normal};

	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
`;
const Sec_AdditionalInfoContainer = styled.section`
	${flexAlign.directionColumn}
	align-self: start;
	gap: 1px;
`;
const P_AdditionalInfo = styled.p`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.light};
`;
const S = {
	Div_BisectionArea,
	Div_TextArea,
	H1_Title,
	P_Description,
	Sec_AdditionalInfoContainer,
	P_AdditionalInfo,
};
