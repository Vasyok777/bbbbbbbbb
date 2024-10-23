import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const AboutLaser = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.4fr_0.6fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='md:flex md:justify-center'>
					<Image
						src={'/about-laser.png'}
						width={519}
						height={320}
						alt='Laser'
					/>
				</div>
				<div>
					<h2 className='uppercase mb-3 text-[32px]'>
						We’re laser-focused on driving results.
					</h2>
					<p className='mb-2 text-accent leading-[100%]'>
						We understand Web3 businesses constantly evolve. That’s why we offer
						à la carte services and month-to-month contracts.
					</p>
					<p className='mb-8 text-accent leading-[100%]'>
						At Chainbound, we believe in quality results and service. We’ve
						built a client-centric company that delivers industry-leading
						results.
					</p>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/contact'}>Reach out</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
