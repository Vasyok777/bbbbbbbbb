'use client'

import { Button, Card, Input, Textarea } from '@/components/ui'
import { SuccessForm } from '@/widget'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IFormData {
	email: string
	company_name: string
	message: string
	first_name: string
	last_name: string
	telegram: string
	website_url: string
	budget: string | number
}

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const onSubmit = (data: IFormData) => {
		setIsSubmitting(true)
		emailjs
			.send(
				'service_lt263yx',
				'template_mp47lcq',
				{
					email: data.email,
					company_name: data.company_name,
					message: data.message,
				},
				'2B8TNoQA0DnBTOdYk'
			)
			.then(
				() => {
					console.log('SUCCESS!')
					reset()
					setIsSubmitting(false)
					setIsSuccess(true)
				},
				error => {
					console.log('FAILED...', error.text)
					setIsSubmitting(false)
				}
			)
	}

	return (
		<>
			<Card className='p-10 bg-[#F7F8FA] md:p-5'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
						<div className=''>
							<label
								htmlFor='first_name'
								className='mb-1.5 block text-accent text-[16px]'
							>
								First name<span className='text-primary'>*</span>
							</label>
							<Input {...register('first_name', { required: true })} />
							{errors.first_name && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
						<div className='mb-4'>
							<label
								htmlFor='last_name'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Last name<span className='text-primary'>*</span>
							</label>
							<Input {...register('last_name', { required: true })} />
							{errors.last_name && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-3 gap-4 md:grid-cols-1'>
						<div className=''>
							<label
								htmlFor='email'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Email<span className='text-primary'>*</span>
							</label>
							<Input type='email' {...register('email', { required: true })} />
							{errors.email && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
						<div className=''>
							<label
								htmlFor='telegram'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Telegram<span className='text-primary'></span>
							</label>
							<Input {...register('telegram')} />
							{errors.telegram && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
						<div className='mb-4'>
							<label
								htmlFor='website_url'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Website URL<span className='text-primary'>*</span>
							</label>
							<Input {...register('website_url', { required: true })} />
							{errors.website_url && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='budget'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Expected Monthly Marketing Budget
							<span className='text-primary'>*</span>
						</label>
						<Input {...register('budget', { required: true })} />
						{errors.budget && (
							<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
								This field is required
							</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							htmlFor='message'
							className='mb-1.5 block text-accent text-[16px]'
						>
							What do you hope to achieve by working with our agency?
							<span className='text-primary'>*</span>
						</label>
						<Textarea className='resize-none' {...register('message')} />
						{errors.message && (
							<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
								This field is required
							</p>
						)}
					</div>
					<p className='text-[14px] text-accent mb-4'>
						By submitting this form, you consent to receive communications from
						Chainbound. You can unsubscribe at any time, and we do not spam.
					</p>
					<Button disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Submit'}
					</Button>
				</form>
			</Card>

			<SuccessForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
		</>
	)
}
