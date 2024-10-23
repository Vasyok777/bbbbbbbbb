import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const SetUp = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.64fr_0.36fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='md:order-1'>
					<UnderTitle text='Community Management & Set Up' />
					<h2 className='uppercase mb-3 text-[32px]'>
						We help Web3 companies create engaging and vibrant Telegram &
						Discord communities
					</h2>
					<p className='mb-8 text-accent leading-[100%]'>
						When it comes time to build a community on Discord or Telegram, our
						crypto marketing agency is the leader. We will make sure your server
						is set up correctly with the right channels, roles, bots, and more
						and manage your community in a way proven to engage and excite your
						members.
					</p>
					<div className='grid grid-cols-2 gap-4 mb-8 lg:grid-cols-1'>
						<CardWidget
							title='7x more members'
							text='Chainbound’s community management team increased Galaxy Arena’s number of members by 699% and increased the engagement rate of visitors to 80%'
						/>
						<CardWidget
							title='Increased community engagement rate to 60%'
							text='Chainbound increased Metamoose NFT’s community engagement rate from 7.14% to 60%'
						/>
					</div>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/'}>Build Your Community</Link>
					</Button>
				</div>
				<div className='md:flex md:justify-center'>
					<Image
						src={'/home/set-up.png'}
						width={389}
						height={325}
						alt='Set up'
					/>
				</div>
			</div>
		</section>
	)
}
