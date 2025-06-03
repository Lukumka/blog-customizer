import { CSSProperties, useState } from 'react';
import {
	ArticleStateType,
	articleStyleOptions,
	defaultArticleState,
} from 'src/constants/articleProps';
import styles from 'src/styles/index.module.scss';
import { ArticleParamsForm } from 'components/article-params-form';
import { Article } from 'components/article';

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
		<main className={styles.main} style={pageStyles}>
			<ArticleParamsForm
				onChange={handleChange}
				articleStyleOptions={articleStyleOptions}
			/>
			<Article />
		</main>
	);
};

export default App;
