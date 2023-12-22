import { Skeleton } from '../../../components/@index';

const SkeletonList = () => {
	return (
		<>
			{Array(10)
				.fill(0)
				.map((_, idx) => {
					return <Skeleton key={idx} $width="35rem" $height="35rem" />;
				})}
		</>
	);
};

export default SkeletonList;
