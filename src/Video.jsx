import {Composition} from 'remotion';
import {Slider} from './Slider';
// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="slide1"
				component={Slider}
				durationInFrames={900}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
