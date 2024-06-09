import React from 'react';
import { Title } from './Title';

const ListGroup = ({ data }) => {
	// 모든 가능한 RCP_WAY2 값을 추출하여 중복 없는 카테고리 목록 생성
	const allCategories = [...new Set(data.map((item) => item.RCP_WAY2))];

	return (
		<>
			<Title title='레시피 카테고리' />
			{allCategories.map((category, index) => (
				<div key={index}>
					<h2>{category}</h2>
					{/* 현재 카테고리에 해당하는 데이터 필터링 */}
					{data
						.filter((recipe) => recipe.RCP_WAY2 === category)
						.map((filteredRecipe) => (
							<div key={filteredRecipe.RCP_SEQ}>
								<h3>{filteredRecipe.RCP_NM}</h3>
								{/* 레시피 이미지나 기타 정보를 여기에 표시할 수 있습니다. */}
							</div>
						))}
				</div>
			))}
		</>
	);
};

export default ListGroup;
