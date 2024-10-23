import { UnderTitle } from '@/components/ui'

export const About = () => {
	return (
		<section className='py-20 container lg:py-[60px]'>
			<UnderTitle text='About Chainbound' className='uppercase' />
			<h2 className='uppercase mb-10'>
				We're an agency built for the speed of Web3
			</h2>
			<p className='mb-2'>
				At Chainbound, we believe in quality results and service. We’ve built a
				client-centric company that delivers industry-leading results.
			</p>
			<p>
				We understand Web3 businesses constantly evolve. That’s why we offer à
				la carte services and month-to-month contracts.
			</p>
		</section>
	)
}
