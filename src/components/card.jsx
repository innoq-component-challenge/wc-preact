import register from 'preact-custom-element';

const Card = ({ heading, footer, href, children, headingLevel = 1 }) => {
	let Heading = `h${headingLevel}`;

	return <section class="card">
		<div class="card-body">
			<Heading class="card-title">
				{href ? <a href={href}>{heading}</a> : heading}
			</Heading>
			<p class="card-text">{children}</p>
		</div>
		{footer ? <div class="card-footer">{footer}</div> : ''}
	</section>;
}

export default register(Card, 'preact-card', ['heading', 'heading-level', 'footer', 'href', 'children']);