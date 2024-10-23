export const AboutNumber = () => {
	return (
		<section className='bg-primary py-[50px] md:py-10 text-white'>
			<div className='container'>
				<div className='flex justify-center items-center flex-wrap gap-y-4'>
					{DATA.map(({ id, number, text }) => (
						<div
							key={id}
							className='flex justify-center flex-col items-center text-center flex-[0_1_19%] lg:flex-[0_1_33%] lg:flex-[0_1_50%]'
						>
							<h6 className='text-[32px] text-white-text font-roboto font-bold mb-3 leading-[100%]'>
								{number}
							</h6>
							<p className='text-white-text'>{text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
const DATA = [
	{
		id: 1,
		number: '100+',
		text: 'Satisfied Partners',
	},
	{
		id: 2,
		number: '400+',
		text: 'Media Partners',
	},
	{
		id: 3,
		number: '20+',
		text: 'Amazing Team Members',
	},
	{
		id: 4,
		number: '350+',
		text: 'Successful Campaigns',
	},
	{
		id: 5,
		number: '1',
		text: 'Mission (to grow you!)',
	},
]
