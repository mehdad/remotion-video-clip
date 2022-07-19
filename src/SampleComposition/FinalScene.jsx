import config from '../../input_data/config.json';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import video1 from '../../input_data/footage/mixkit-blue-sea-and-forest-9841-medium.mp4';

export const FinalScene = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const textScale = interpolate(frame, [0,5], [0,1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return <AbsoluteFill>
		<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
			<div style={{transform: `scale(${textScale}, ${textScale}) translateY(${100*(textScale)}px)`,position:'absolute',verticalAlign: 'middle',fontSize: 50,color:'white',background:'#142E54'}}>
				{config.text.end_text}
			</div>
		</div>
	</AbsoluteFill>
}