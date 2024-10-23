import { UnderTitle } from '@/components/ui'

export const AboutHero = () => {
	return (
		<section className='bg-muted-foreground h-[682px] pt-[327px] -mt-[110px] md:pt-[250px] md:h-[550px]'>
			<div className='container'>
				<UnderTitle text='About Chainbound' className='uppercase' />
				<h2 className='uppercase text-white-text mb-3 max-w-[400px]'>
					We're an agency built for the speed of Web3
				</h2>
			</div>
		</section>
	)
}
