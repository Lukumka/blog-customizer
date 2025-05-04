import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';

import cn from 'classnames';
import React, { useState } from 'react';
import styles from './ArticleParamsForm.module.scss';

import {
	ArticleStateType,
	defaultArticleState,
	OptionType,
	TArticleStyleOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
	onChange: (styles: ArticleStateType) => void;
	articleStyleOptions: TArticleStyleOptions;
};

export const ArticleParamsForm = ({
	onChange,
	articleStyleOptions,
}: ArticleParamsFormProps) => {
	const [pageStyles, setPageStyles] =
		useState<ArticleStateType>(defaultArticleState);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleArrowButton = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const handleReset = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setPageStyles(defaultArticleState);
		onChange(defaultArticleState);
	};

	const handleChanges = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onChange(pageStyles);
	};

	const handleFontStyleChange = (item: OptionType) => {
		setPageStyles({ ...pageStyles, fontFamilyOption: item });
	};

	const handleFontSizeChange = (item: OptionType) => {
		setPageStyles({ ...pageStyles, fontSizeOption: item });
	};

	const handleFontColorChange = (item: OptionType) => {
		setPageStyles({ ...pageStyles, fontColor: item });
	};

	const handleBackgroundColorChange = (item: OptionType) => {
		setPageStyles({ ...pageStyles, backgroundColor: item });
	};

	const handleContentWidthChange = (item: OptionType) => {
		setPageStyles({ ...pageStyles, contentWidth: item });
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={handleArrowButton} />
			<aside
				className={cn(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form
					className={styles.form}
					onReset={handleReset}
					onSubmit={handleChanges}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						selected={pageStyles.fontFamilyOption}
						onChange={handleFontStyleChange}
						options={articleStyleOptions.fontFamilyOptions}
					/>
					<RadioGroup
						title={'Размер шрифта'}
						name={'font-sizes'}
						options={articleStyleOptions.fontSizeOptions}
						selected={pageStyles.fontSizeOption}
						onChange={handleFontSizeChange}
					/>
					<Separator />
					<Select
						title={'Цвет шрифта'}
						selected={pageStyles.fontColor}
						onChange={handleFontColorChange}
						options={articleStyleOptions.fontColors}
					/>
					<Select
						title={'Цвет фона'}
						selected={pageStyles.backgroundColor}
						onChange={handleBackgroundColorChange}
						options={articleStyleOptions.backgroundColors}
					/>
					<Select
						title={'Ширина контента'}
						selected={pageStyles.contentWidth}
						onChange={handleContentWidthChange}
						options={articleStyleOptions.contentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
