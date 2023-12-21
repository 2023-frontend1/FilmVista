import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../components/layout';
import { DetailPage, BoardPage, HomePage } from '../../pages/@index';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{
				path: '/detail/:movieId',
				element: <DetailPage />,
			},
			{
				path: '/:sortMethod',
				element: <BoardPage />,
			},
		],
	},
	{
		path: '*',
		element: <div>🖕</div>,
	},
]);

export default router;
