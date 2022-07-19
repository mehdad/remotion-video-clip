import config from '../../input_data/config.json';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import video1 from '../../input_data/footage/11.mp4';

export const StartScene = () => {
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
		<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
			<div className={'text-main'} style={{transform: `scale(1, ${textScale}) translateY(${200*(1-springValue)}px)`,position:'absolute',verticalAlign: 'middle',fontSize: 45,color:'white'}}>
				{config.text.start_text}
			</div>
			<Video style={{width:'100%',height:'100%'}} src={video1} />
		</div>
	</AbsoluteFill>
}