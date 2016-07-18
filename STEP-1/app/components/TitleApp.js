import React, {Component} from 'react';
import config from '../config.json'; 

const TitleApp = () => (
	<div className="title">
		{config.title}
	</div>
);

export default TitleApp;