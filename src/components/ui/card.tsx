import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export const Card = ({
	className,
	children,
	dark,
}: {
	className?: string
	dark?: boolean
	children: ReactNode
}) => {
	return (
		<div
			className={cn(
				'bg-card p-5 rounded-[4px]',
				dark && 'bg-card-foreground',
				className
			)}
		>
			{children}
		</div>
	)
}
