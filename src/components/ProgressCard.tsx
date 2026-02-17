import * as Progress from "@radix-ui/react-progress";
import "./progress-card.css";

type ProgressCardProps = {
	current: number;
	total: number;
};

export function ProgressCard({ current, total }: ProgressCardProps) {
	const pct = total <= 0 ? 0 : Math.round((current / total) * 100);

	return (
		<div className="pc-card">
			<div className="pc-row">
				<div className="pc-percent">{pct}%</div>
				<div className="pc-fraction">
					{current} / {total}
				</div>
			</div>

			<Progress.Root className="pc-bar" value={pct}>
				<Progress.Indicator
					className="pc-indicator"
					style={{ transform: `translateX(-${100 - pct}%)` }}
				/>
			</Progress.Root>
		</div>
	);
}
