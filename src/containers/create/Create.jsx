import React, { useState } from 'react';
import axios from 'axios';
import './create.css';

const Create = () => {
	const [udata, setUdata] = useState({
		email: "",
		OrganizationName: "",
		TestName: "",
		QuestionPaperLink: "",
		TotalExpectedCandidates: "",
		StartDateTimeFormat: "",
		EndDateTimeFormat: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUdata((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Send formData to the backend endpoint '/createtest'
			await axios.post('http://localhost:5000/createtest', udata);
			// console.log("test created successfully!");
		} catch (err) {
			console.log("Error during creating test:", err);
			// Handle error, e.g., show an error message to the user
		}
	};

	return (
		<div className="client-create">
			<div className="create-form">
				<h1 className="title-heading">Create a test</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-fields">
						<input
							type="text"
							onChange={handleChange}
							value={udata.email}
							placeholder="Email ID"
							name="email"
							id="email"
						/>
						<input
							type="text"
							onChange={handleChange}
							value={udata.OrganizationName}
							placeholder="Organization Name"
							name="OrganizationName"
							id="OrganizationName"
						/>
						<input
							type="text"
							onChange={handleChange}
							value={udata.TestName}
							placeholder="Test Name"
							name="TestName"
							id="TestName"
						/>
						<input
							type="text"
							onChange={handleChange}
							value={udata.QuestionPaperLink}
							placeholder="Question Paper Link"
							name="QuestionPaperLink"
							id="QuestionPaperLink"
						/>
						<input
							type="text"
							onChange={handleChange}
							value={udata.TotalExpectedCandidates}
							placeholder="Total Expected Candidates"
							name="TotalExpectedCandidates"
							id="TotalExpectedCandidates"
						/>
						<input
							type="text"
							onChange={handleChange}
							value={udata.StartDateTimeFormat}
							placeholder="Start Date-Time Format"
							name="StartDateTimeFormat"
							id="StartDateTimeFormat"
						/>
						<input
							type="text"
							onChange={handleChange}
							value={udata.EndDateTimeFormat}
							placeholder="End Date-Time Format"
							name="EndDateTimeFormat"
							id="EndDateTimeFormat"
						/>
					</div>
					<button type="submit">Create</button>
				</form>
			</div>
		</div>
	);
};


export default Create;
