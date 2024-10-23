import { CardWidget } from '@/components/ui'

export const AboutValues = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<h2 className='uppercase mb-4 text-[32px]'>About our values</h2>
			<p className='text-accent mb-8'>
				We’re a values-driven company. Here’s what ticks our boxes.
			</p>
			<div
				className='flex items-center justify-center
			flex-wrap gap-2.5'
			>
				{DATA.map(({ id, title, text }) => (
					<CardWidget
						key={id}
						text={text}
						title={title}
						className={'flex-[0_1_32%] grow h-full lg:flex-[0_1_49%] md:flex-1'}
					/>
				))}
			</div>
		</section>
	)
}

const DATA = [
	{
		id: 1,
		title: 'We commit obsessively to our mission and metrics',
		text: 'We believe our team and our client succeed best with clear, quantifiable metrics of success that move us in alignment with our mission.',
	},
	{
		id: 2,
		title: 'We solve for the client (SFTC)',
		text: 'We don’t want to just satisfy clients, we want to delight them. Our number one goal is to help clients succeed.',
	},
	{
		id: 3,
		title: 'We`re lifelong learners',
		text: 'We’re always hungry to learn more, and we embrace new ideas and technologies with enthusiasm. Marketing never stops growing or evolving, neither do we.',
	},
	{
		id: 4,
		title: 'We value authentic, trust-based relationships',
		text: 'We believe that honesty and transparency are key to building trust with clients and each other.',
	},
	{
		id: 5,
		title: 'Teamwork makes the dream work',
		text: 'We know that great work comes from great teamwork, so we value a culture of open communication and mutual support.',
	},
]
