import { Button } from '@/components/ui'
import Link from 'next/link'

export const AboutJoin = () => {
	return (
		<section className='my-20 mx-5'>
			<div className='container rounded-[4px] py-10 bg-primary text-white text-center'>
				<h2 className='uppercase mb-4 text-white'>Join our awesome team</h2>
				<p className='mb-8'>
					Our amazing people are our competitive advantage.
				</p>
				<Button asChild className='bg-title'>
					<Link href={'/contact'}>Browse Open Positions</Link>
				</Button>
			</div>
		</section>
	)
}
