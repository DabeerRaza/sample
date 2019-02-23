import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovelCard from './ApprovelCard';

const App = (props) => {
	return(
		<div className="ui container comments">
			<ApprovelCard>
				<CommentDetail 
					author="Dabeer" 
					date="Today at 6:00PM" 
					comment="I've liked it so much." 
					image={faker.image.avatar()}
				/>
			</ApprovelCard>
			<ApprovelCard>
				<CommentDetail 
					author="Dansih" 
					date="Today at 9:00PM" 
					comment="Very Nice!" 
					image={faker.image.avatar()}
				/>
			</ApprovelCard>
			<ApprovelCard>
				<CommentDetail 
					author="Raza" 
					date="Yesterday at 5:00PM" 
					comment="Waoo" 
					image={faker.image.avatar()}
				/>
			</ApprovelCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

