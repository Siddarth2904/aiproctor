import React from 'react';
import { CommonInput, CtaButton } from '../../components';
import './create.css';

const inputField = [
	'Email ID',
	'Organization Name',
	'Test Name',
	'Question Paper Link',
	'Total Expected Candidates',
	'Start Date-Time Format',
	'Duration'
];

const Create = () => {
	return (
		<div className="client-create">
			<div className="create-form">
				<h1 className="title-heading">Create a test</h1>
				<div className="input-fields">
					{inputField.map((item) => (
						<CommonInput placeholderText={item} />
					))}
				</div>
				<a href='/dashboard'>
					<CtaButton text="Create" />
				</a>
				
			</div>
		</div>
	);
};

export default Create;
