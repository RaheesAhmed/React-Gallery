import React from 'react';
import Header from './Header';
import GalleryList from './GalleryList';
import Footer from './Footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<GalleryList title={'Mountains'} imagesrc={require('./img/portfolio_item_1.png')} />
			<GalleryList title={'Roads'} imagesrc={require('./img/portfolio_item_2.png')} />
			<GalleryList title={'Trees'} imagesrc={require('./img/portfolio_item_3.png')} />

			<Footer />
		</div>
	);
};

export default App;
