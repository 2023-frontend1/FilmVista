/**
 * @component
 * @param {Object} data reactQuery, useInfiniteQuery 반환 결과
 * @param {JSX.Element} renderComponent 반복 호출,Rendering 할 컴포넌트
 * @returns {JSX.Element}
 *
 * @must_read
 * - data(Object) 는 다음의 구조를 가져야 합니다.
 * 	- data = { pages: [ results: [ {...} , ... ], ... ], ... }
 * - renderComponent 의 모든 props 이름은 `results` 내부 객체의 key 이름과 같아야 합니다.
 */
const InfiniteList = ({ data, renderComponent: RenderComponent }) => {
	const items = data?.pages?.map((page) => page.results).flat();
	return (
		<>
			{items?.map((item, idx) => {
				/** order 라는 props 를 두어, 반복되는 순서를 전달합니다.*/
				return <RenderComponent key={idx} order={idx} {...item} />;
			})}
		</>
	);
};

export default InfiniteList;
