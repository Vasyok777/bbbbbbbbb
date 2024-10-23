import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Search = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.35fr_0.65fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='order-1'>
					<UnderTitle text='Search Engine Optimization' />
					<h2 className='uppercase mb-3 text-[32px]'>
						We help crypto companies attract organic traffic via strong content
						and backlink-building strategies.
					</h2>
					<p className='mb-8 text-accent leading-[100%]'>
						Every year it becomes more and more difficult to rank high on
						Google. We make it easier for Web3 marketing. We take a
						content-first approach that provides value to your potential clients
						and gets them into your funnel with as little friction as possible.
					</p>
					<div className='grid grid-cols-2 gap-4 mb-8 lg:grid-cols-1'>
						<CardWidget
							title='350% organic traffic increase'
							text='In 3 months, we took SoulSwap’s new site and ranked it on the first page of Google for 18 of their preferred keywords and increased organic visibility by 350%.'
						/>
						<CardWidget
							title='+24 Ahrefs Domain Rating'
							text='In 1 month, we increased Uphold`s DR by 24 points.'
						/>
					</div>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/'}>Our SEO Strategy for Web3</Link>
					</Button>
				</div>
				<div className='md:flex md:justify-center'>
					<Image
						src={'/home/search.png'}
						width={389}
						height={325}
						alt='Search'
					/>
				</div>
			</div>
		</section>
	)
}
