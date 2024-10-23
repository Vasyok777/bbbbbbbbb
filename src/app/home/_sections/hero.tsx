import { Button, Title, UnderTitle } from '@/components/ui'

export const Hero = () => {
	return (
		<section className='bg-title text-white-text pt-[185px] -mt-[110px] pb-[60px]'>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5 md:grid-cols-1 md:gap-7'>
					<div>
						<UnderTitle text='A Top Web3 & Crypto Marketing Agency' />
						<Title
							text='We help brands go viral in the media space'
							className='mb-3 uppercase'
						/>
						<p className='mb-8 md:mb-4'>An agency built for rapid growth</p>
						<Button>GET A FREE STRATEGY PLAN</Button>
					</div>
					<div className='flex flex-col gap-5'>
						{DATA.map(({ id, number, text }) => (
							<div
								key={id}
								className='flex items-center w-full h-[44px] md:h-max md:min-h-[44px] rounded-[6px] overflow-hidden'
							>
								<div className='bg-white flex items-center text-muted-foreground font-roboto text-[24px] font-bold h-full justify-center text-muted-foreground w-[100px]'>
									{number}
								</div>
								<div className='text-right text-white flex px-2 items-center justify-end h-full font-roboto uppercase font-bold bg-muted w-full'>
									{text}
								</div>
							</div>
						))}
					</div>
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
		number: '30%+',
		text: 'Top 100 Market Cap Crypto  Companies Represented',
	},
	{
		id: 3,
		number: '4+',
		text: 'Years of Marketing Experience',
	},
	{
		id: 4,
		number: '350+',
		text: 'Successful Campaigns',
	},
]
