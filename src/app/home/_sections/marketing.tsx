import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Marketing = () => {
	return (
		<section className='bg-muted-foreground py-[60px] text-white'>
			<div className='container'>
				<div className='grid grid-cols-[0.35fr_0.65fr] gap-6 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
					<div>
						<Image
							src={'/home/marketing.png'}
							width={519}
							height={418}
							alt='Marketing'
						/>
					</div>
					<div className='w-full'>
						<UnderTitle
							text='Influencer & Thought Leader Marketing'
							className=''
						/>
						<h2 className='uppercase mb-3 text-white'>
							We help innovative companies promote their brands with the biggest
							names in Web3.
						</h2>
						<p className='mb-8 leading-[100%]'>
							We’re proud to be the leading crypto influencer marketing agency,
							managing the largest network of cryptocurrency, Web3, blockchain,
							& NFT influencers in the world across Twitter, YouTube, TikTok,
							Instagram, and more. If you know them, we probably work with them.
						</p>
						<div className='grid grid-cols-2 gap-4 mb-8 lg:grid-cols-1'>
							<CardWidget
								dark
								title='2,000+ Pieces of Influencer Content Created'
								text='We’ve helped hundreds of crypto brands launch campaigns that reach millions on social media.'
							/>
							<CardWidget
								dark
								title='500+ Influencers (& Growing)'
								text='We mange a roster of over 500 Web3 influencers, with more added weekly.'
							/>
						</div>
						<Button asChild className='md:justify-center md:flex'>
							<Link href={'/'}>Explore Influencer Marketing</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
