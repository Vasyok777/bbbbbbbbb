import { Check } from '@/components/icons'
import Image from 'next/image'

export const Content = () => {
	return (
		<div>
			<h1 className='mb-10 text-[title] text-[52px] md:text-[42px] md:mb-8 font-bold font-roboto uppercase leading-[100%]'>
				Let's Get <br />
				Growing.
			</h1>
			<h6 className='mb-5 uppercase text-muted-foreground font-roboto font-bold'>
				First, we’ll do a few things:
			</h6>
			<ul className='flex flex-col gap-2 mb-11'>
				<li className='text-accent flex items-center gap-2'>
					<Check /> Deep-dive into your business and growth goals.
				</li>
				<li className='text-accent flex items-center gap-2'>
					<Check /> Discuss strategies and options.
				</li>
				<li className='text-accent flex items-center gap-2'>
					<Check /> Introduce you to your growth team.
				</li>
				<li className='text-accent flex items-center gap-2'>
					<Check /> Outline expectations and budget requirements.
				</li>
			</ul>
			<h3 className='font-roboto font-bold text-[32px] md:text-[24px] text-primary mb-4 leading-[100%]'>
				You're in good company
			</h3>
			<div
				className='flex items-center justify-center
			flex-wrap gap-2.5'
			>
				{DATA.map(({ id, img }) => (
					<div
						key={id}
						className='flex-[0_1_19%] bg-card h-16 flex items-center justify-center grow lg:flex-[0_1_20%] md:flex-[0_1_48%] md:grow p-1'
					>
						<Image
							src={`/contact/${img}`}
							width={100}
							height={25}
							alt='Join'
							className='object-contain'
						/>
					</div>
				))}
			</div>
		</div>
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
	{
		id: 8,
		img: '8.png',
	},
]
