import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	articleStyleOptions,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageStyles, setPageStyles] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	} as CSSProperties);
	const handleChange = (styles: ArticleStateType) => {
		setPageStyles({
			'--font-family': styles.fontFamilyOption.value,
			'--font-size': styles.fontSizeOption.value,
			'--font-color': styles.fontColor.value,
			'--container-width': styles.contentWidth.value,
			'--bg-color': styles.backgroundColor.value,
		} as CSSProperties);
	};
	return (
		<main className={clsx(styles.main)} style={pageStyles}>
			<ArticleParamsForm
				onChange={handleChange}
				articleStyleOptions={articleStyleOptions}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
