import React, { useMemo } from 'react';

const Pagination = ({
	totalPages,
	setSettingsPagination,
	settingsPagination,
}) => {
	const stepStart = 1;
	const stepTo = 2;

	const arrShowPage = useMemo(() => {
		let arrShowPage = [];

		if (
			settingsPagination.currentPage + stepTo <=
			settingsPagination.totalPages
		) {
			console.log(totalPages);
			arrShowPage = totalPages.slice(
				settingsPagination.currentPage - stepStart,
				settingsPagination.currentPage + stepTo
			);
		} else {
			return totalPages.slice(totalPages.length - 3, totalPages.length);
		}
		return arrShowPage;
	}, [settingsPagination.currentPage]);

	const previos = (e) => {
		if (settingsPagination.currentPage <= stepStart) {
			setSettingsPagination({
				...settingsPagination,
				currentPage: settingsPagination.currentPage,
			});
		} else {
			setSettingsPagination({
				...settingsPagination,
				currentPage: settingsPagination.currentPage - stepStart,
			});
		}
	};

	const next = (e) => {
		if (settingsPagination.currentPage >= settingsPagination.totalPages) {
			setSettingsPagination({
				...settingsPagination,
				currentPage: settingsPagination.currentPage,
			});
		} else {
			setSettingsPagination({
				...settingsPagination,
				currentPage: settingsPagination.currentPage + stepStart,
			});
		}
	};

	return (
		<>
			<div>
				<button onClick={previos}>Previous</button>

				{arrShowPage.map((p, idx) => (
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
				<button onClick={next}>Next</button>
			</div>
		</>
	);
};

export default Pagination;
