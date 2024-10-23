import { AntiForm } from './anti-form'

export const ContentAnti = () => {
	return (
		<section className='container py-20 lg:py-[60px] grid grid-cols-2 gap-6 md:gap-8 items-center lg:grid-cols-1'>
			<div className='flex flex-col gap-4 text-accent'>
				<p>Unfortunately, the Web3 space is susceptible to scams.</p>
				<p>
					In recent months and years, a number of bad actors have copied
					Chainbound sales & marketing materials and distributed them in an
					attempt to receive payment from unwitting prospects.
				</p>
				<p>
					As an agency built on the love for Web3, we are committed to fighting
					fraud in all forms, especially so when associated with our brand.
				</p>
				<p>
					If you’ve been contacted by someone claiming to be associated with
					Chainbound but you are not sure you’re talking to an official
					Chainbound representative please complete the form.
				</p>
				<p>Information to include in your message:</p>
				<ul className='list-disc pl-5'>
					<li>The email address or account you’ve been contacted by</li>
					<li>The name of the representative you are speaking to</li>
					<li>
						Links to any resources (decks, proposals, etc) that you have been
						sent
					</li>
					<li>
						<b>Important:</b> Payment addresses you have been asked to send
						payment to
					</li>
				</ul>
				<p>
					Within 48 hours, a Chainbound representative will reply to your email
					verifying if you are speaking to an official representative of
					Chainbound.
				</p>
			</div>
			<AntiForm />
		</section>
	)
}
