import classNames from 'classnames';
import register from 'preact-custom-element';

const STYLES = {
	default: 'btn-secondary',
	cta: 'btn-primary'
};

const Button = ({children, type = 'default', additionalClasses='', ...customAttributes}) => {
	let cls = classNames('btn', STYLES[type] || STYLES.default, additionalClasses);
	return <button class={cls} {...customAttributes}>{children}</button>;
}

export default register(Button, 'preact-button', ['type', 'additional-classes', 'caption']);