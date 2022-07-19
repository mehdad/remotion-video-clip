import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const MiddleText = ({product_id,quantity,textColor='#142E54',backgroundColor='white'}) => {
	const frame = useCurrentFrame();
	const {fps,width} = useVideoConfig();
	const SlideTranslationProgress = spring({
		frame: frame - 5,
		fps,
		config: {
			damping: 200,
		},
	});
	const slideTranslation = interpolate(
		SlideTranslationProgress,
		[0,1],
		[0, -width]
	);

	return <AbsoluteFill style={{transform: `translateX(${-width-slideTranslation}px)`}} >
		<div className={'main-container'}>
			<div className={'text text-main'} style={{fontSize: 55,color:textColor,background:backgroundColor}}>
				{product_id}
			</div>
			<div className={'text text-secondary'}  style={{fontSize: 35,top:'55%'}}>
				{quantity}
			</div>
		</div>
	</AbsoluteFill>
}