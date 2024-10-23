import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	UnderTitle,
} from '@/components/ui'
import Link from 'next/link'

export const Additional = () => {
	return (
		<section className='container py-20'>
			<div className='grid grid-cols-2 items-center gap-10 lg:grid-cols-1'>
				<div>
					<UnderTitle text='Additional information' className='uppercase' />
					<h2 className='mb-3 uppercase'>
						A suite of services designed to help Web3 companies grow
					</h2>
					<p className='text-accent mb-8'>
						Explore a refined pairing of crypto growth services tailored to
						growing Web3 brands and delivering unparalleled growth for
						blockchain-adjacent products and businesses.
					</p>
					<Button asChild>
						<Link href={'/contact'}>Get Your Free Custom Marketing Plan</Link>
					</Button>
				</div>
				<Accordion type='single' collapsible>
					{DATA.map(({ id, title, text }) => (
						<AccordionItem key={id} value={`item-${id}`}>
							<AccordionTrigger>{title}</AccordionTrigger>
							<AccordionContent>
								<ul className='list-disc pl-5'>
									{text.map(item => (
										<li className='text-accent' key={item}>
											{item}
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
const DATA = [
	{
		id: 1,
		title: 'Influencer Marketing',
		text: [
			'Build top and middle-of-funnel content using respected named in the crypto space.',
			'Leverage a huge network of content creators on YouTube, TikTok, Twitter (X), LinkedIn, Twitch, and more.',
		],
	},
	{
		id: 2,
		title: 'Public Relations',
		text: [
			'Get covered in leading Web3 and business media',
			'Refine your messaging and amplify it to the world',
			'Build thought leadership for your Founders and execs',
			'Get invited to podcasts and interviews to tell your story',
		],
	},
	{
		id: 3,
		title: 'PPC & Paid Ads',
		text: [
			'Build scaleable acquisition channels via paid ads platforms',
			'Attract new customers using Google Ads, LinkedIn Ads, X Ads, and more',
			'Have your ads managed by the pros',
			'Target users across the internet',
		],
	},
	{
		id: 4,
		title: 'SEO',
		text: [
			'Explore the power of added organic traffic',
			'Outrank competitors',
			'Build sustainable and organic growth funnels',
			'Understand what your users are looking for and rank #1 for those terms',
			'Increase site authority',
		],
	},
	{
		id: 5,
		title: 'Lead Generation',
		text: [
			'Add a team of experienced SDRs to your sales team',
			'Outreach to hundreds of prospects a week',
			'Fill up your meetings calendar',
			'Identify prospects based on your specific criteria',
		],
	},
	{
		id: 6,
		title: 'Exchange Listings',
		text: [
			'Get listed on major crypto exchanges',
			'Boost credibility with impressive exchange partnerships',
		],
	},
	{
		id: 7,
		title: 'Design & Development',
		text: [
			'We build brands that resonate with crypto audiences',
			'Build an aligned brand vision for your company',
		],
	},
	{
		id: 8,
		title: 'Fractional CMO',
		text: [
			'Add an experienced crypto CMO to your team on an as-needed basis',
			'Rent our brains',
			'Tap our collective experience managing 1,200+ crypto marketing campaigns',
		],
	},
]
