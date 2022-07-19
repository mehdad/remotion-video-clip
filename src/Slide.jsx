import {Audio, Easing, spring, Video} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

import video1 from './../input_data/footage/11.mp4';
import video2 from './../input_data/footage/2.mp4';
import video3 from './../input_data/footage/1.mp4';
import video4 from './../input_data/footage/5.mp4';
import audio from './assets/music/Believe in Me 30s.webm';
import config from '../input_data/config.json';
import './assets/css/style.css';
import {StartScene} from './SampleComposition/StartScene';
import {VideoSlide} from './SampleComposition/VideoSlide';
import {MiddleScene} from './SampleComposition/MiddleScene';
import {MiddleText} from './SampleComposition/MiddleText';
import {FinalScene} from './SampleComposition/FinalScene';

export const Slide = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - (fps/4), durationInFrames],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp'
		}
	);

	let colors = [...config.color].map(x=>x.startsWith('#')?x:("#"+x))

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white', opacity: opacity}}>
			<Audio
				src={audio}
			/>
			<Sequence from={0} durationInFrames={260}>
				<StartScene video={video1} start_text={config.text.start_text} />
			</Sequence>
			<Sequence from={220} durationInFrames={170}>
				<VideoSlide video={video2} slideX slideY={'start'} />
			</Sequence>
			<Sequence from={350} durationInFrames={105}>
				<VideoSlide video={video3} slideX={'start'} />
			</Sequence>
			<Sequence from={240} durationInFrames={215}>
				<MiddleScene
					mainText={config.text.middle_text[0].main}
					secondaryText={config.text.middle_text[0].secondary}
					textColor={colors[1]}
					backgroundColor={colors[3]}
				/>
			</Sequence>
			<Sequence from={355} durationInFrames={100}>
				<MiddleText
					product_id={config.text.middle_text[1].product_id}
					quantity={config.text.middle_text[1].quantity}
					textColor={colors[0]}
					backgroundColor={colors[2]}
				/>
			</Sequence>
			<Sequence from={455}>
				<FinalScene
					video={video4}
					text={config.text.end_text}
					backgroundColor={colors[3]}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
