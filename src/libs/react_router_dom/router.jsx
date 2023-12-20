import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../components/layout';
import BoardPage from '../../pages/board_page';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
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
