
import PropTypes from "prop-types"; 
import { IoTimeOutline } from "react-icons/io5";

const Task = ({ task, provided }) => {
	const { title, description, priority, deadline, image, alt, tags } = task;

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="w-full cursor-grab bg-[#343434] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
		>
			{image && alt && (
				<img
					src={image}
					alt={alt}
					className="w-full h-[170px] rounded-lg"
				/>
			)}
			<div className="flex items-center gap-2">
				{tags.map((tag) => (
					<span
						key={tag.title}
						className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
						style={{ backgroundColor: tag.bg, color: tag.text }}
					>
						{tag.title}
					</span>
				))}
			</div>
			<div className="w-full flex items-start flex-col gap-0">
				<span className="text-[15.5px] font-medium text-[#fff]">{title}</span>
				<span className="text-[13.5px] text-slate-400">{description}</span>
			</div>
			<div className="w-full border border-dashed"></div>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center gap-1">
					<IoTimeOutline
						color={"#666"}
						width="19px"
						height="19px"
					/>
					<span className="text-[13px] text-gray-500">{deadline} mins</span>
				</div>
				<div
					className={`w-[60px] rounded-full h-[5px] ${
						priority === "high"
							? "bg-red-500"
							: priority === "medium"
							? "bg-orange-500"
							: "bg-blue-500"
					}`}
				></div>
			</div>
		</div>
	);
};


Task.propTypes = {
	task: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		priority: PropTypes.oneOf(["low", "medium", "high"]).isRequired,
		deadline: PropTypes.number.isRequired,
		image: PropTypes.string,
		alt: PropTypes.string,
		tags: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				bg: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
	provided: PropTypes.object.isRequired,
};

export default Task;
