import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Layout } from './components/@index.js';
import GlobalStyles from './styles/global_styles.jsx';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60, // 1시간
			cacheTime: 1000 * 60 * 60 * 1.5, // 1시간 30분
		},
	},
});

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [{ path: '/', element: <App /> }],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
