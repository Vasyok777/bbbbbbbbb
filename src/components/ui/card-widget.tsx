import { cn } from '@/lib/utils'
import { TwoIcon } from '../icons'
import { Card } from './card'

export const CardWidget = ({
	title,
	text,
	dark = false,
	className
}: {
	title: string
	text: string
	dark?: boolean
	className?: string
}) => {
	return (
		<Card className={cn('flex gap-5', dark && 'bg-card-foreground', className)}>
			<div
				className={cn(
					'bg-muted-foreground rounded-[4px] p-2 flex justify-center items-center h-10',
					dark && 'bg-white'
				)}
			>
				<TwoIcon isVisible={dark} />
			</div>
			<div>
				<h4
					className={cn(
						'text-muted-foreground mb-2 font-roboto font-bold leading-[100%] uppercase text-[20px]',
						dark && 'text-white text-[16px]'
					)}
				>
					{title}
				</h4>
				<p
					className={cn(
						'text-foreground',
						dark && 'text-white-text text-[14px]'
					)}
				>
					{text}
				</p>
			</div>
		</Card>
	)
}
