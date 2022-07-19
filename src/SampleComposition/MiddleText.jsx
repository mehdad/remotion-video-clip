import config from '../../input_data/config.json';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import video1 from '../../input_data/footage/11.mp4';

export const MiddleText = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	// Animate from 0 to 1 after 25 frames
	const Slide2TranslationProgress = spring({
		frame: frame - 5,
		fps,
		config: {
			damping: 200,
		},
	});
	// Move the logo up by 150 pixels once the transition starts
	const slide2Translation = interpolate(
		Slide2TranslationProgress,
		[0,1],
		[0, -1280]
	);


	return <AbsoluteFill style={{transform: `translateX(${-1280-slide2Translation}px)`}} >
		<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
			<div style={{position:'absolute',verticalAlign: 'middle',fontSize: 55,color:'white'}}>
				{config.text.middle_text[1].product_id}
			</div>
			<div style={{position:'absolute',top:'55%',verticalAlign: 'middle',fontSize: 35,color:'#142E54',background:'white'}}>
				{config.text.middle_text[1].quantity}
			</div>
		</div>
	</AbsoluteFill>
}