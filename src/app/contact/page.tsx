import { ContactForm, Content } from './_sections'

export const metadata = {
	title: 'Contact Chainbound | Kickstart Your Web3 Growth',
	description:
		'Start your growth conversation by contacting Chainbound. The leading crypto and Web3 marketing agency.',
}

export default function ContactPage() {
	return (
		<div className='pt-[200px] pb-[150px] lg:pt-[150px] md:pb-[80px] md:pt-[120px] grid grid-cols-2 gap-6 lg:grid-cols-1 container'>
			<Content />
			<ContactForm />
		</div>
	)
}
