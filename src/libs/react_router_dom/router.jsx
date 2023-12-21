import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../components/layout';
import { BoardPage, HomePage } from '../../pages/@index';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/home',
				element: <HomePage />,
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
