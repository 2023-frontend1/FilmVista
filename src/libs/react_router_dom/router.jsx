import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import {
	BoardPage,
	DetailPage,
	HomePage,
	SearchPage,
} from '../../pages/@index';

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
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/:filter',
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
