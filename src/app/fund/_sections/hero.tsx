import { UnderTitle } from '@/components/ui'

export const Hero = () => {
	return (
		<section className='bg-muted-foreground h-[682px] pt-[327px] -mt-[110px] md:pt-[250px] md:h-[600px]'>
			<div className='container'>
				<UnderTitle text='Chainbound Growth Fund' className='uppercase' />
				<h2 className='uppercase text-white-text mb-3 max-w-[900px]'>
					We're a growth and acquisition partner for ambitious digital
					businesses.
				</h2>
			</div>
		</section>
	)
}
