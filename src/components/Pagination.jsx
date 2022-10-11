import React from 'react';

const Pagination = ({
	totalPages,
	setSettingsPagination,
	settingsPagination,
}) => {
	return (
		<div>
			{totalPages.map((p, idx) => (
				<button
					onClick={(e) =>
						setSettingsPagination({
							...settingsPagination,
							currentPage: p,
						})
					}
					key={idx}
				>
					{p}
				</button>
			))}
		</div>
	);
};

export default Pagination;
