import classNames from 'classnames';
import register from 'preact-custom-element';

const TYPES = {
	danger: "bg-danger",
	default: "bg-secondary"
};

const Badge = ({ type, caption, children }) => {
	let cls = classNames("badge", TYPES[type] || TYPES['default']);
	return <span class={cls}>{caption || children}</span>;
}

export default register(Badge, 'preact-badge', ['type', 'caption']);
