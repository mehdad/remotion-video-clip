import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';

export const StartScene = ({video,start_text}) => {
	const frame = useCurrentFrame();
	const {height, durationInFrames, fps} = useVideoConfig();

	const SliceUpProgress = spring({
		frame: frame - (durationInFrames - fps),
		fps,
		config: {
			damping: 200,
		},
	});
	const SliceUp = interpolate(
		SliceUpProgress,
		[0,1],
		[0, -height]
	);

	const textScale = interpolate(frame, [0,10], [0,1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const springValue = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 40,
	});

	return <AbsoluteFill style={{transform: `translateY(${SliceUp}px)`}}>
		<div className={'main-container'}>
			<div className={'text-main text'} style={{transform: `scale(1, ${textScale}) translateY(${200*(1-springValue)}px)`,fontSize: 45}}>
				{start_text}
			</div>
			<Video style={{width:'100%',height:'100%'}} src={video} />
		</div>
	</AbsoluteFill>
}