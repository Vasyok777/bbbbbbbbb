import { Card } from '@/components/ui'
import Image from 'next/image'

export const Services = () => {
	return (
		<section className='container pb-20 lg:pb-[60px] md:pb-10'>
			<div className='grid grid-cols-[0.3fr_0.7fr] gap-6 lg:grid-cols-1'>
				<div>
					<h2 className='mb-3'>Our Services</h2>
					<p>
						We help our customers increase their competitiveness helping them
						with these services.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-2.5 lg:grid-cols-3 md:grid-cols-1'>
					{DATA.map(({ id, img, title, text }) => (
						<Card key={id}>
							<div className='w-10 h-10 bg-primary rounded-[8px] mb-4 flex justify-center items-center'>
								<Image src={img} width={24} height={24} alt={title} />
							</div>
							<h4 className='text-muted-foreground font-roboto font-bold mb-3 leading-[100%]'>
								{title}
							</h4>
							<p className='text-[14px] leading-[100%] text-foreground'>
								{text}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
const DATA = [
	{
		id: 1,
		img: '/home/services.svg',
		title: 'Crypto Influencer Marketing',
		text: 'We manage the largest network of crypto, Web3, blockchain, & NFT influencers. If you know them, we probably work with them.',
	},
	{
		id: 2,
		img: '/home/services.svg',
		title: 'Public Relations',
		text: 'We help crypto brands secure insane media coverage. Get featured by the biggest names in crypto​.',
	},
	{
		id: 3,
		img: '/home/services.svg',
		title: 'Search Engine Optimization',
		text: 'We help Web3 companies attract organic traffic via strong content and backlink-building strategies.',
	},
	{
		id: 4,
		img: '/home/services.svg',
		title: 'PPC & Paid Advertising',
		text: 'Web3 PPC is complex. We make it simple. We manage paid ads campaigns on the largest digital platforms, resulting in scaleable and reliable growth and acquisition.',
	},
	{
		id: 5,
		img: '/home/services.svg',
		title: 'Lead Generation',
		text: 'We create powerful outbound sales processes that bring you a steady stream of qualified leads. Our performance-based pricing means you only pay for the results we generate.',
	},
	{
		id: 6,
		img: '/home/services.svg',
		title: 'Community Management',
		text: 'We increase engagement and community size by making sure your server is set up correctly with the right channels, roles, and bots and managing your community in a way proven to engage and excite your members.',
	},
	{
		id: 7,
		img: '/home/services.svg',
		title: 'Social Media Marketing',
		text: 'We help Web3 companies build, refine, and execute their Twitter strategies.',
	},
	{
		id: 8,
		img: '/home/services.svg',
		title: 'Branding',
		text: 'We build unique and authentic Web3 brands that tell your story without saying a word.',
	},
	{
		id: 9,
		img: '/home/services.svg',
		title: 'Tokenomics',
		text: 'We help new token projects create exciting and sustainable tokenomics plans that scale.',
	},
	{
		id: 10,
		img: '/home/services.svg',
		title: 'Fractional CMO / CMO as a Service',
		text: 'Hire an experienced Web3 marketing executive to run your marketing, develop strategy, and more.',
	},
	{
		id: 11,
		img: '/home/services.svg',
		title: 'Web3 Marketing Consultants & Advisory',
		text: 'Refine and execute your Web3 marketing with the help of the experts.',
	},
	{
		id: 12,
		img: '/home/services.svg',
		title: 'Free Marketing Plan',
		text: 'Hire an experienced Web3 marketing executive to run your marketing, develop strategy, and more.',
	},
]
