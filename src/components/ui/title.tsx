import { cn } from '@/lib/utils'
import { FC } from 'react'

interface ITitle {
	text: string
	className?: string
}

export const Title: FC<ITitle> = ({ text, className }) => {
	return (
		<h1
			className={cn(
				'text-white-text text-[40px] font-bold font-roboto leading-[100%]',
				className
			)}
		>
			{text}
		</h1>
	)
}
