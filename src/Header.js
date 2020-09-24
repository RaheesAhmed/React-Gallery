import React from 'react';
import Main from './main.jpg';

export default function Header() {
	return (
		<div>
			<nav>
				<div className="logo" style={{ fontSize: '5rem', color: 'white' }}>
					React<em>Gallery</em>
				</div>
				<div className="menu-icon">
					<span />
				</div>
			</nav>

			<div id="video-container">
				<div className="video-overlay" />
				<div className="video-content">
					<div className="inner">
						<h1 id>
							Welcome to <em>Highway</em>
						</h1>
						<p>FREE CSS TEMPLATE by templatemo</p>
						<p>Homepage with full-width image gallery</p>
						<div className="scroll-icon">
							<a className="scrollTo" data-scrollTo="portfolio" href="#">
								<img src="img/scroll-icon.png" alt="" />
							</a>
						</div>
					</div>{' '}
				</div>
				<img src={Main} style={{ height: '700px', width: '100%' }} />
			</div>
		</div>
	);
}
