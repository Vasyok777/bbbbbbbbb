import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui'
import { cn } from '@/lib/utils'

export const Asked = () => {
	return (
		<section className='py-10 pb-20 md:pb-10 container'>
			<h2 className='mb-[60px] lg:mb-10 md:mb-10 text-center mb:mb-10'>
				Frequently asked questions
			</h2>
			<Accordion
				type='single'
				defaultValue='item-1'
				collapsible
				className='border'
			>
				{DATA.map(({ id, title, text }) => (
					<AccordionItem
						value={`item-${id}`}
						className={cn(id === 11 && 'border-b-0')}
						key={id}
					>
						<AccordionTrigger className='px-5'>{title}</AccordionTrigger>
						<AccordionContent className='px-5'>{text}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	)
}

const DATA = [
	{
		id: 1,
		title:
			'What makes Chainbound different from other crypto marketing agencies?',
		text: 'With clients like Gala, Cosmos, Litecoin, Immutable, and more, Chainbound is the most established agency specialized exclusively in the cryptocurrency and web3 industry. Marketing in the crypto industry is very different than marketing in other industries and since 2018, we’ve been the leaders in the space. Our roots run deep.',
	},
	{
		id: 2,
		title: 'What is crypto and Web3 marketing?',
		text: 'Crypto/Web3 marketing is the process of attracting new users, investors, community members, and more to blockchain-related products and services. Chainbound has been managing crypto marketing campaigns for the largest brands in the industry since 2018.',
	},
	{
		id: 3,
		title: 'How much does crypto marketing cost?',
		text: 'The answer is it depends! We create custom solutions based on client needs. For a proposal please contact us!',
	},
	{
		id: 4,
		title:
			'Why should I choose Chainbound for our crypto marketing and advertising?',
		text: 'Chainbound has been in the business of crypto marketing and advertising longer than anyone else. We’ve built a custom suite of tailor-made crypto advertising solutions and made them available to all of our clients.',
	},
	{
		id: 5,
		title: 'How can I learn crypto marketing?',
		text: 'The best places to learn about crypto marketing would be Chainbound’s podcast: Crypto Marketing with Ty Smith.',
	},
	{
		id: 6,
		title: 'How do you measure success?',
		text: 'We measure success based on our clients’ goals and objectives. We use data-driven metrics such as website traffic, token/NFT sales, conversion rates, and engagement rates to measure the effectiveness of our strategies. We provide regular reporting and analysis to our clients to ensure that they are achieving their goals.',
	},
	{
		id: 7,
		title: 'Can Chainbound help with tokenomics consulting?',
		text: 'Yes, Chainbound offers expert tokenomics consulting services. Our team provides guidance on designing sustainable and effective tokenomics models, ensuring best practices and helping you save time while achieving your project’s goals.',
	},
	{
		id: 8,
		title: 'Can Chainbound handle PR and earned media for my crypto project?',
		text: 'Absolutely! Chainbound offers comprehensive PR and earned media services, helping your project gain visibility in top-tier publications and news outlets. Our team has strong relationships with journalists and editors in the crypto space, ensuring your story gets the attention it deserves.',
	},
	{
		id: 9,
		title: 'How is crypto marketing different from traditional marketing?',
		text: 'Due to the unique characteristics of Web3 technology and its audience, crypto marketing requires a specialized approach. It involves understanding tokenomics, building communities on platforms like Discord and Telegram, and leveraging the influence of crypto thought leaders.',
	},
	{
		id: 10,
		title: 'Do you offer ongoing support?',
		text: 'Yes, we offer ongoing support to our clients. We provide regular reporting and analysis to ensure that our clients are achieving their goals. We also provide ongoing support and recommendations for improving their digital marketing strategies.',
	},
	{
		id: 11,
		title: 'How long does it take to see results?',
		text: 'The time it takes to see results varies depending on the service and the client’s goals. SEO and content marketing can take several months to see significant results, while influencer marketing and paid advertising can produce immediate results. We provide regular reporting and will communicate with our clients throughout the process to ensure expectations are met.',
	},
]
