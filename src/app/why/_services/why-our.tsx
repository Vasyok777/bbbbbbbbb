import { Button, CardWidget } from '@/components/ui'
import Link from 'next/link'

export const WhyOur = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10 md:pt-[60px]	'>
			<div className='grid grid-cols-2 gap-10 lg:grid-cols-1'>
				<div>
					<h6 className='text-primary mb-1 uppercase font-roboto font-bold'>
						Our Approach
					</h6>
					<h2 className='max-w-[500px] uppercase'>
						A Strategy-First Approach to Crypto Marketing
					</h2>
				</div>
				<div>
					<p className='text-accent mb-2'>
						We believe in a unique approach to crypto marketing. Unlike other
						agencies that use a one-size-fits-all approach, we tailor our
						strategies to fit your specific needs and prioritize strategy work
						rather than just execution.
					</p>
					<p className='text-accent mb-6'>
						Our team of experienced marketers will work with you to understand
						your business, your customers, and your goals. From there, we’ll
						develop a customized plan to help you succeed in Web3.
					</p>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1 mb-8'>
						<CardWidget
							title='Comprehensive'
							text='We take a comprehensive approach to client work and will work closely with clients to develop customized plans that will drive success. While other agencies neglect strategy, we prioritize it.'
						/>
						<CardWidget
							title='Customized'
							text='We develop customized plans that will help you achieve success in the ever-evolving world of Web3.'
						/>
					</div>
					<Button asChild>
						<Link href={'/contact'}>View Success Stories</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
