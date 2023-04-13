import React from 'react';

import './index.css';

function Post(props) {
	return (
		<article>
			<h1>{props.title}</h1>
			<p>{props.date}</p>
			<p>{props.author}</p>
			<p>{props.text}</p>
			<ul>
				{props.highlights.map((highlight, index) => (
					<li key={index}>{highlight}</li>
				))}
			</ul>
			<img
				src={props.image.link}
				alt={props.image.alt}
				style={{ width: 275, height: 275 }}
			/>
		</article>
	);
}

export default Post;
