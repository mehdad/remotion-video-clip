import {AbsoluteFill, interpolate,  useCurrentFrame, Video} from 'remotion';

export const FinalScene = ({video,text,backgroundColor='black'}) => {
	const frame = useCurrentFrame();

	const textScale = interpolate(frame, [0,5], [0.5,1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return <AbsoluteFill>
		<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
			<Video src={video} volume={0} />
			<div className={'text text-main'}
					 style={{
						 transform: `scale(${textScale}, ${textScale}) translateY(${100*(textScale)}px)`,
						 fontSize: 50,
						 background:backgroundColor}}>
				{text}
			</div>
		</div>
	</AbsoluteFill>
}