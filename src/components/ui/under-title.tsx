import { cn } from '@/lib/utils'
import { FC } from 'react'

interface IUnderTitle {
	text: string
	className?: string
}

export const UnderTitle: FC<IUnderTitle> = ({ text, className }) => {
	return (
		<h6
			className={cn(
				'text-primary text-[14px] font-bold font-roboto leading-[100%] mb-2',
				className
			)}
		>
			{text}
		</h6>
	)
}
