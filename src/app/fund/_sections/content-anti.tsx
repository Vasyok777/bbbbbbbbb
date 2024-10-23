import { AntiForm } from './anti-form'

export const ContentAnti = () => {
	return (
		<section className='container py-20 lg:py-[60px] grid grid-cols-2 gap-6 md:gap-8 items-center lg:grid-cols-1'>
			<div className='flex flex-col gap-4 text-accent leading-[150%]'>
				<h2 className='mb-5 uppercase'>
					We work with talented founders looking to grow or move on
				</h2>
				<p className='text-accent'>
					We’ve built a fantastic family of digital companies and our family is
					always looking for new members.
				</p>
				<p className='text-accent'>
					We partner with founders to create straightforward exit options that
					protect their business, their team, and their customers.
				</p>
				<p className='text-accent'>We invest in digital businesses that are:</p>
				<ul className='list-disc pl-5 flex flex-col gap-1'>
					<li>Profitable ($150k-5M per year)</li>
					<li>Digital-based (agencies, SaaS, media, and similar)</li>
					<li>Open to full or partial acquisition</li>
				</ul>
				<p className='text-accent'>
					If you’re looking to sell your business (either fully or just
					partially), you’re in the right place.
				</p>
				<p className='text-accent'>
					Just reach out. Let’s see if we might be a fit.
				</p>
			</div>
			<AntiForm />
		</section>
	)
}
