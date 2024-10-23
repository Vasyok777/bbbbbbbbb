import { Button, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Leader = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.6fr_0.4fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='md:order-1'>
					<UnderTitle text='Influencer & Thought Leader Marketing' />
					<h2 className='uppercase mb-3 text-[32px]'>
						Tap a team of experienced Web3 marketers to solve your toughest
						marketing challenges.
					</h2>
					<p className='mb-8 text-accent leading-[100%]'>
						Make our marketing insights your competitive advantage. Access a
						team of professionals experienced in Web3 strategy, community
						growth, pricing, tokenomics, content strategy, SEO, PR, influencer
						negotiations, pricing, and more. 
					</p>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/'}>Consulting services</Link>
					</Button>
				</div>
				<div className='md:flex md:justify-center'>
					<Image
						src={'/home/leader.png'}
						width={389}
						height={325}
						alt='Set up'
					/>
				</div>
			</div>
		</section>
	)
}
