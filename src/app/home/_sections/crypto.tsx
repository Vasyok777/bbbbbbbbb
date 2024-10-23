import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Crypto = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.4fr_0.6fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='order-1'>
					<UnderTitle text='Web3 & Crypto Press Release Distribution' />
					<h2 className='uppercase mb-3 text-[32px]'>
						Our partner, Coinscribble, offers guaranteed coverage with top Web3
						media.
					</h2>
					<p className='mb-8 text-accent leading-[100%]'>
						Distribute content to top Web3 sites like CoinTelegraph,
						CoinMarketCap, BeInCrypto, Benzinga, Yahoo Finance, and More.
					</p>
					<div className='grid grid-cols-1 gap-4 mb-8'>
						<CardWidget
							title='300M+ Combined Network Audience'
							text='Access the largest network of crypto media in the world'
						/>
					</div>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/'}>Try Coinscribble</Link>
					</Button>
				</div>
				<div className='md:flex md:justify-center'>
					<Image
						src={'/home/crypto.png'}
						width={448}
						height={418}
						alt='Search'
					/>
				</div>
			</div>
		</section>
	)
}
