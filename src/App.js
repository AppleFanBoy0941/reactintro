/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Button from './components/Button/Button';

function App() {
	const styles = {
		content: css`
			max-width: 600px;
			margin: 40px auto;
			padding: 20px;
		`,
	};
	return (
		<div className="App">
			<Navbar />
			<div css={styles.content}>
				<Home />
				<Button />
			</div>
		</div>
	);
}

export default App;
