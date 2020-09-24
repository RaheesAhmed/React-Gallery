import React from 'react';

const GalleryList = ({ imagesrc, title }) => {
	return (
		<div className="full-screen-portfolio" Id="portfolio">
			<div className="container-fluId">
				<div className="col-md-4 col-sm-6">
					<div className="portfolio-item">
						<a href={require('./img/service_1.png')} data-lightbox="image-1">
							<div className="thumb">
								<div className="hover-effect">
									<div className="hover-content">
										<h1>{title}</h1>
										<p>Awesome Subtittle Goes Here</p>
									</div>
								</div>
								<div className="image">
									<img src={imagesrc} />
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryList;
