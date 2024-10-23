import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Strategy = () => {
	return (
		<section className='bg-muted-foreground py-[60px] text-white'>
			<div className='container'>
				<div className='grid grid-cols-[0.35fr_0.65fr] gap-6 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
					<div>
						<Image
							src={'/home/strategy.png'}
							width={519}
							height={418}
							alt='Marketing'
						/>
					</div>
					<div className='w-full'>
						<UnderTitle text='Web3 Fractional CMO & Strategy' className='' />
						<h2 className='uppercase mb-3 text-white'>
							Hire an experienced Web3 marketing executive to run your
							marketing, develop strategy, and more.
						</h2>
						<p className='mb-8 leading-[100%]'>
							Hire a part-time crypto CMO to provide advanced marketing
							leadership, planning, consulting, and execution. With a part-time
							CMO, you’ll have access to the same level of expertise and
							guidance as a full-time executive, without the added expense.
						</p>
						<div className='grid gap-4 mb-8 grid-cols-1'>
							<CardWidget
								dark
								title='Data From 1,250+ Campaigns'
								text='Chainbound’s Fractional CMOs have managed marketing initiatives for 100s of crypto companies. We bring years of Web3 marketing experience to the table.'
							/>
						</div>
						<Button asChild className='md:justify-center md:flex'>
							<Link href={'/'}>Hire a Web3 CMO</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
