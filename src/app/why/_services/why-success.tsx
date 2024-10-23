import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const WhySuccess = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10 md:pt-[60px]	'>
			<h2 className='mb-8 uppercase'>About our success</h2>
			<p className='mb-6 text-accent'>
				Since 2018, we’ve helped over 100 happy clients. From startups just
				beginning their growth journey to $1B+ market cap companies. Chainbound
				builds more in-depth relationships with clients to make sure our teams
				are fully aligned on goals and growth.
			</p>
			<div
				className='flex items-center justify-center
			flex-wrap gap-2.5 mb-8'
			>
				{DATA.map(({ id, img }) => (
					<div
						key={id}
						className='flex-[0_1_24%] bg-card h-16 flex items-center justify-center grow lg:flex-[0_1_32%] md:flex-[0_1_48%] md:grow p-1'
					>
						<Image
							src={`/home/join/${img}`}
							width={200}
							height={40}
							alt='Join'
							className='h-full w-full object-contain'
						/>
					</div>
				))}
			</div>
			<Button asChild className='mx-auto w-max flex'>
				<Link href={'/contact'}>View Success Stories</Link>
			</Button>
		</section>
	)
}
const DATA = [
	{
		id: 1,
		img: '1.png',
	},
	{
		id: 2,
		img: '2.png',
	},
	{
		id: 3,
		img: '3.png',
	},
	{
		id: 4,
		img: '4.png',
	},
	{
		id: 5,
		img: '5.png',
	},
	{
		id: 6,
		img: '6.png',
	},
	{
		id: 7,
		img: '7.png',
	},
]
