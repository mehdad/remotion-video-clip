import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const MiddleScene = ({mainText,secondaryText,textColor='#142E54',backgroundColor='white'}) => {
	const frame = useCurrentFrame();
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
		<div className={'main-container'}>
			<div className={'text text-main'} style={{transform: `translateY(${textOffset}px)`,fontSize: textSize2+textSize3}}>
				{mainText}
			</div>
			<div className={'text text-secondary'}
					 style={{
						 transform: `translateY(${textOffset}px)`,top:'55%',
						 fontSize: (textSize2+textSize3)/2,
						 color:textColor,background:backgroundColor
					 }}>
				{secondaryText}
			</div>
		</div>
	</AbsoluteFill>
}