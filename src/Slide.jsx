import {Audio, Easing, spring, Video} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

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


	// Animate from 0 to 1 after 25 frames
	const Slide2TranslationProgress = spring({
		frame: frame - 360,
		fps,
		config: {
			damping: 200
		}
	});
	// Move the logo up by 150 pixels once the transition starts
	const slide2Translation = interpolate(
		Slide2TranslationProgress,
		[0, 1],
		[0, -1280]
	);


	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp'
		}
	);


	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white', opacity: opacity}}>
			<Audio
				src={audio}
			/>
			<Sequence from={0} durationInFrames={260}>
				<StartScene />
			</Sequence>
			<Sequence from={220} durationInFrames={170}>
				<VideoSlide video={video2} slideX slideY={'start'} />
			</Sequence>
			<Sequence from={350} durationInFrames={105}>
				<VideoSlide video={video3} slideX={'start'} />
			</Sequence>
			<Sequence from={240} durationInFrames={215}>
				<MiddleScene />
			</Sequence>
			<Sequence from={355} durationInFrames={100}>
				<MiddleText />
			</Sequence>
			<Sequence from={455}>
				<Video src={video4} />
			</Sequence>
			<Sequence from={455}>
				<FinalScene />
			</Sequence>
		</AbsoluteFill>
	);
};
