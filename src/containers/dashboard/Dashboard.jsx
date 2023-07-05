import React from 'react';
import { CopyLink } from '../../components';
import './dashboard.css';

const mockTests = [
	{
		name: 'Internal 1 - DBMS',
		link: 'asd-qwvs-dfs',
		time: '28/06/2023 15:30'
	},
	{
		name: 'Internal 2 - DBMS',
		link: 'pbl-dfse-phd',
		time: '28/06/2023 15:30'
	}
];

const Dashboard = () => {
	return (
		<div className="section-type admin-dashboard">

			<h1 className="title-heading">Admin Dashbaord</h1>

			<div className="test-dashboard">
				<h2 className="title-heading">Tests</h2>

				<div className="test-items">
					{mockTests.map((test) => (
						<div className="test-item">
							<h4 className="test-time">{test.time}</h4>

							<h4 className="test-name">
								<a href="/status">{test.name}</a>
							</h4>

							<CopyLink link={test.link} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
