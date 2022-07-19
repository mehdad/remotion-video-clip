import {Composition} from 'remotion';
import {Slide} from './Slide';
// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="slide1"
				component={Slide}
				durationInFrames={900}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
