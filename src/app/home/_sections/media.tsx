import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Media = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.36fr_0.64fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='order-1'>
					<UnderTitle text='Public Relations & Earned Media' />
					<h2 className='uppercase mb-3 text-[32px]'>
						We help crypto companies secure amazing organic coverage from
						industry media.
					</h2>
					<p className='text-accent leading-[100%] mb-3'>
						Chainbound delivers deep crypto and Web3 PR industry expertise which
						allows us to develop comprehensive communications strategies to
						reach a massively wide audience.
					</p>
					<p className='text-accent leading-[100%] mb-3'>
						With contacts at the largest crypto publishers, influencers, and
						media, Chainbound’s PR team helps clients secure organic coverage
						from the biggest names in the blockchain industry.
					</p>
					<p className='mb-8 text-accent leading-[100%]'>
						Our team will carefully craft coverage-securing releases, pitches,
						announcements, and more that bring eyeballs to your brand.
					</p>
					<div className='grid mb-8 grid-cols-1'>
						<CardWidget
							title='8,250+ Earned Media Pieces Secured'
							text='We’ve secured coverage in CoinTelegraph, Decrypt, TechCrunch, NewsBTC, AMBCrypto, Blockworks, Yahoo Finance, CoinMarketCap, Benzinga, NFT Now, MarketWatch, Forbes, Binance, Entrepreneur, and more.'
						/>
					</div>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/'}>Get Organic Web3 Coverage</Link>
					</Button>
				</div>
				<div className='md:flex md:justify-center'>
					<Image
						src={'/home/media.png'}
						width={389}
						height={325}
						alt='Set up'
					/>
				</div>
			</div>
		</section>
	)
}
