import { useState, useEffect } from 'react';

import { request } from 'graphql-request';

const API_KEY = process.env.REACT_APP_HYGRAPH_API_KEY;
const API_URL = `https://api-us-east-1.graphcms.com/v2/${API_KEY}/master`;

const App = () => {
	const [output, setOutput] = useState([]);

	const query = `{ 
    shoes {
      id
      name
      price
      slug
    }
  }`;

	useEffect(() => {
		const fetchSneakers = async () => {
			const data = await request(API_URL, query);
			setOutput(data);
		};
		fetchSneakers();
	}, [query]);

	return (
		<div className="container">
			<h2>Data Output</h2>
			<div className="output-container">
				{output && <pre>{JSON.stringify(output, null, 2)}</pre>}
			</div>
		</div>
	);
};

export default App;
