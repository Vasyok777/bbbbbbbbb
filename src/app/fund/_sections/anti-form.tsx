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
	website_url: string
	country_or_region?: string
	interested?: any
	onboard?: any
	last_name: string
	first_name: string
	annual_revenue: string | number
}

export const AntiForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const onSubmit = (data: IFormData) => {
		console.log(data)
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
					<div className='mb-4'>
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
					<div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
						<div className='mb-4'>
							<label
								htmlFor='first_name'
								className='mb-1.5 block text-accent text-[16px]'
							>
								First name<span className='text-primary'>*</span>
							</label>
							<Input
								className='bg-[#F7F8FA]'
								{...register('first_name', { required: true })}
							/>
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
							<Input
								className='bg-[#F7F8FA]'
								{...register('last_name', { required: true })}
							/>
							{errors.last_name && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
						<div className='mb-4'>
							<label
								htmlFor='company_name'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Your company name<span className='text-primary'>*</span>
							</label>
							<Input {...register('company_name', { required: true })} />
							{errors.company_name && (
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
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1 mb-4'>
						<div>
							<p className='block text-accent text-[16px] mb-3'>
								What are you interested in?
							</p>
							<div className='flex items-center gap-1 mb-2 '>
								<input
									type='radio'
									value={'Full Acquisition - Selling Your Business'}
									{...register('interested')}
									id='interested-selling'
								/>
								<label
									htmlFor='interested-selling'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									Full Acquisition - Selling Your Business
								</label>
							</div>
							<div className='flex items-center gap-1'>
								<input
									type='radio'
									value={'Investment, Partial Buy and/or Strategic Partnership'}
									{...register('interested')}
									id='interested-investment'
								/>
								<label
									htmlFor='interested-investment'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									Investment, Partial Buy and/or Strategic Partnership
								</label>
							</div>
						</div>
						<div>
							<p className='block text-accent text-[16px] mb-3'>
								Is the leadership team interested in staying onboard?
							</p>
							<div className='flex items-center gap-1 mb-2'>
								<input type='radio' {...register('onboard')} id='onboard-yes' />
								<label
									htmlFor='onboard-yes'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									Yes
								</label>
							</div>
							<div className='flex items-center gap-1 mb-2'>
								<input
									type='radio'
									value={'Unsure'}
									{...register('onboard')}
									id='onboard-no'
								/>
								<label
									htmlFor='onboard-no'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									No
								</label>
							</div>
							<div className='flex items-center gap-1'>
								<input
									type='radio'
									value={'Unsure'}
									{...register('onboard')}
									id='onboard-unsure'
								/>
								<label
									htmlFor='onboard-unsure'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									Unsure
								</label>
							</div>
						</div>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='country_or_region'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Country/region<span className='text-primary'></span>
						</label>
						<Input {...register('country_or_region', { required: true })} />
						{errors.country_or_region && (
							<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
								This field is required
							</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							htmlFor='annual_revenue'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Annual revenue<span className='text-primary'></span>
						</label>
						<Input {...register('annual_revenue', { required: true })} />
						{errors.annual_revenue && (
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
							Your message<span className='text-primary'>*</span>
						</label>
						<Textarea
							className='resize-none'
							{...register('message', { required: true })}
						/>
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
