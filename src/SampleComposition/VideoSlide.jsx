import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';

export const VideoSlide = ({video, slideX, slideY}) => {
	const frame = useCurrentFrame();
	const {height, width, durationInFrames, fps} = useVideoConfig();
	let offset = 0;

	let slideXTranslation = 0;
	if (slideX) {
		offset = slideX === 'start' ? 10 : (durationInFrames - 30);
		console.log(frame - offset);
		const slideXTranslationProgress = spring({
			frame: frame - offset,
			fps,
			config: {
				damping: 200
			}
		});
		slideXTranslation = interpolate(
			slideXTranslationProgress,
			[0, 1],
			[0, width]
		);

		slideXTranslation = (slideY !== 'start' && width) - slideXTranslation;
		console.log('slideXTranslation', slideXTranslation);
	}

	let slideYTranslation = 0;
	if (slideY) {
		offset = slideY === 'start' ? 10 : (durationInFrames - 30);
		const slideYProgress = spring({
			frame: frame - offset,
			fps,
			config: {
				damping: 200
			}
		});
		slideYTranslation = interpolate(
			slideYProgress,
			[0, 1],
			[height, 0]
		);
	}

	return <AbsoluteFill style={{transform: `translate(${slideXTranslation}px,${slideYTranslation}px)`}}>
		<Video src={video} />
	</AbsoluteFill>;
};