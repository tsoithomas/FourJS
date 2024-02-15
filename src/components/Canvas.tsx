import { useRef, useEffect } from 'react';

interface CanvasProps {
	width: number;
	height: number;
	size: number;
}


export function Canvas(props: CanvasProps) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const c = canvasRef.current;
		const ctx = c.getContext('2d');
		ctx.fillStyle = 'red';

		ctx.rect(0, 0, props.width, props.height);


		for (let y=0; y<props.size; y++) {
			for (let x=0; x<props.size; x++) {
				const slotRadius = (props.width / (props.size+1)) / 2;
				const padding = (2*slotRadius) / (props.size+1);
				
				const slotY = padding+slotRadius + (2*slotRadius+padding)*y;
				const slotX = padding+slotRadius + (2*slotRadius+padding)*x;

				ctx.moveTo(slotY, slotX);
				ctx.arc(slotY, slotX, slotRadius, 0, 2*Math.PI, 0);
			}
		}

		

		ctx.fill("evenodd");

	}, []);

	return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}