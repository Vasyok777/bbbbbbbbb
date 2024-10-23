import Image from 'next/image'

export const Clients = () => {
	return (
		<section className='py-20 lg:py-[60px] md:py-10	container'>
			<h2 className='text-center mb-8 uppercase'>
				Our clients are backed by the best
			</h2>
			<div
				className='flex items-center justify-center
			flex-wrap gap-2.5'
			>
				{DATA.map(({ id, img }) => (
					<div
						key={id}
						className='flex-[0_1_19%] bg-card h-16 flex items-center justify-center grow lg:flex-[0_1_32%] md:flex-[0_1_48%] md:grow py-1 px-1'
					>
						<Image
							src={`/home/clients/${img}`}
							width={200}
							height={40}
							alt='Join'
							className='h-full w-full object-contain'
						/>
					</div>
				))}
			</div>
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
]
