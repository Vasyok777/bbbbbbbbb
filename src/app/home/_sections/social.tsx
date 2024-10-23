import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Social = () => {
	return (
		<section className='bg-muted-foreground py-[60px] text-white'>
			<div className='container'>
				<div className='grid grid-cols-[0.65fr_0.35fr] gap-6 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
					<div className='order-1'>
						<Image
							src={'/home/social.png'}
							width={519}
							height={418}
							alt='Marketing'
						/>
					</div>
					<div className='w-full'>
						<UnderTitle text='Social Media Management' className='' />
						<h2 className='uppercase mb-3 text-white'>
							We help Web3 companies build, refine, and execute their social
							media strategies.
						</h2>
						<p className='mb-8 leading-[100%]'>
							Social media is everything in the crypto industry, especially
							Twitter. We take full management of your account and make sure
							your account constantly has amazing content and is using industry
							best practices for growth. <br /> <br />
							Most of our clients see {'>'}400% growth in the first month (as
							measured by engagements.)
						</p>
						<div className='grid grid-cols-2 gap-4 mb-8 lg:grid-cols-1'>
							<CardWidget
								dark
								title='+5x social media engagement'
								text='Chainbound increased Nexo’s social media engagement by over 500%'
							/>
							<CardWidget
								dark
								title='3,500+ new followers'
								text='In one month, we took Ethermail from 0 followers to 3500+ followers organically.'
							/>
						</div>
						<Button asChild className='md:justify-center md:flex'>
							<Link href={'/'}>Our Crypto Social Media Strategy</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
