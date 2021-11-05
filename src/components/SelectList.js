const SelectList = ({ data, setItems }) => {
	return (
		<div className="select-menu">
			{data.map((el, i) => (
				<div
					className="menu-items"
					key={el.name + el.key}
					onClick={() => {
						setItems(el.subCategory);
					}}>
					{el.name}
					<div>{el.rdmValue}</div>
				</div>
			))}
		</div>
	);
};

export default SelectList;