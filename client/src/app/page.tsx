'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

type User = {
	id: number;
	name: string;
};

// Client component
const Home = () => {
	const [data, setData] = useState<User[]>([]);

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		try {
	// 			const res = await fetch('http://localhost:4000/');
	// 			const resData = await res.json();
	// 			setData(resData.users);
	// 			return resData;
	// 		} catch (error) {
	// 			throw error;
	// 		}
	// 	};
	// 	fetchUsers();
	// }, []);

	return (
		<section className="p-4">
			{/* <div className="mb-10">
				{data.map((user) => (
					<div key={user.id}>
						<h1 className="text-3xl">{user.name}</h1>
					</div>
				))}
			</div>

			<Link href="/sc" className="p-4 border bg-white text-black rounded-md">
				Go to Server comp
			</Link> */}
		</section>
	);
};
export default Home;
