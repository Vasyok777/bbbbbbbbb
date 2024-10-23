import Image from 'next/image'

export const WhyAgency = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<h2 className='mb-8 text-center'>
				We've won more marketing awards than any agency in the world
			</h2>
			<div className='flex justify-center items-center gap-6 flex-wrap'>
				{DATA.map(item => (
					<Image
						src={`/agency/${item}`}
						alt='Agency'
						width={154}
						height={154}
						key={item}
					/>
				))}
			</div>
		</section>
	)
}
const DATA = ['1.png', '2.png', '3.png', '4.png', '5.png']
