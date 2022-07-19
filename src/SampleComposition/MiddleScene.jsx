import config from '../../input_data/config.json';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import video1 from '../../input_data/footage/mixkit-blue-sea-and-forest-9841-medium.mp4';

export const MiddleScene = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	let textSize2 = interpolate(frame, [0,10], [0,70], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	let textSize3 = interpolate(frame, [68,72], [0,-20], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	let textOffset = interpolate(frame, [68,72], [0,-300], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});


	return <AbsoluteFill>
		<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
			<div style={{transform: `translateY(${textOffset}px)`, position:'absolute',verticalAlign: 'middle',fontSize: textSize2+textSize3,color:'white'}}>
				{config.text.middle_text[0].main}
			</div>
			<div style={{transform: `translateY(${textOffset}px)`,position:'absolute',top:'55%',verticalAlign: 'middle',fontSize: (textSize2+textSize3)/2,color:'#142E54',background:'white'}}>
				{config.text.middle_text[0].secondary}
			</div>
		</div>
	</AbsoluteFill>
}