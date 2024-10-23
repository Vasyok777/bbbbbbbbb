import { Card } from '@/components/ui'

export const Saying = () => {
	return (
		<section className='py-[60px] bg-muted-foreground'>
			<div className='container'>
				<h2 className='text-white uppercase text-center mb-8'>
					What People Are Saying
				</h2>
				<div className='grid gap-4 grid-cols-4 text-white lg:grid-cols-2 md:grid-cols-1'>
					{DATA.map(({ id, site, name, text }) => (
						<Card className='' dark key={id}>
							<h6 className='uppercase text-[16px] font-roboto font-bold mb-1'>
								{site}
							</h6>
							<div className='text-primary mb-1'>★★★★★</div>
							<h6 className='text-[14px] mb-2.5'>{name}</h6>
							<p className='text-[14px] leading-[130%] text-text-secondary'>
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
		site: 'Principal, itrustcapital',
		star: 5,
		name: 'George Gebran',
		text: '“These guys are hardworking and will get things done. They, in my opinion, are worth every penny and will help you get the results you are looking for. I highly recommend them”',
	},
	{
		id: 2,
		site: 'Ceo, permission io',
		star: 5,
		name: 'George Gebran',
		text: '“Chainbound has been a great resource for helping us grow our social media apparatus. They are expert at helping crypto companies elevate their presence in various channels while at the same time creating more meaningful engagement. We really enjoyed working with Chainbound and definitely recommend them!”',
	},
	{
		id: 3,
		site: 'Ceo. centric foundation',
		star: 5,
		name: 'George Gebran',
		text: '“Thank you Chainbound for the awesome work your team has given us. Execution and transparency are key when working with influencers and advertisements and that’s exactly what we received. We appreciate you guys!”',
	},
	{
		id: 4,
		site: 'CEO, Club Fomo',
		star: 5,
		name: 'George Gebran',
		text: '"Club Fomo has found a true partner, Chainbound! They have a solid understanding of out business and it’s clear they are passionate about Web3. Our business has benefitted though the numerous media opportunities, bylined articles, and speaking and panel discussions Chainbound has secured for us. Ty, Jared, and the team are always one step ahead in the game and have greatly increased our name recognition. As a direct result, we’ve seen an increase in new business. Thank you, Chainbound!"',
	},
	{
		id: 5,
		site: 'Ceo, acorn labs',
		star: 5,
		name: 'George Gebran',
		text: '“6 months later I`m looking at [Chainbound] saying this is one of the most valuable things in my marketing portfolio...We saw consistently the lowest cost per registration of any channel...we were very impressed with the long-term impact of the influencer program."',
	},
	{
		id: 6,
		site: 'startupstash.com',
		star: 5,
		name: 'George Gebran',
		text: '“Chainbound is what you need if you want to start your own cryptocurrency brand or if you already have a token but don’t know how to make it popular. They are the leaders in the world for the amount of influencers in the blockchain and cryptocurrency fields.”',
	},
	{
		id: 7,
		site: 'boxmining.com',
		star: 5,
		name: 'George Gebran',
		text: '“Chainbound has worked with some of the biggest names in web3 such as MetaMask, TRON, and Cosmos. The company specializes in thought leadership marketing and influencer marketing, managing one of the largest network of crypto influencers in the world across Twitter, YouTube, TikTok, Instagram, and more.”',
	},
	{
		id: 8,
		site: 'peertopeermarketing.co',
		star: 5,
		name: 'George Gebran',
		text: '“Many successful brands in the crypto space have used Chainbound, including Cosmos, MetaMask, and Decrypt. You can also rely on this agency to develop a results-driven Twitter marketing strategy, manage your blog and provide networking opportunities. Chainbound is a reliable solution.”',
	},
]
