import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})

    console.log('input', inputs)

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.name && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/form-data`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					name: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}
	return (
		<div >
			<form onSubmit={(e) => onSubmitForm(e)}>
				<input
					id='name'
					type='text'
					value={inputs.name}
					onChange={handleChange}
					placeholder='Name'
					required
				/>
				<input
					id='email'
					type='email'
					value={inputs.email}
					onChange={handleChange}
					placeholder='Email'
					required
				/>
				<textarea
					id='message'
					type='text'
					value={inputs.message}
					onChange={handleChange}
					placeholder='Message'
					rows='5'
					required
				/>
				<input type='submit'  />
				{form.state === 'loading' ? (
					<div>Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div>Sent successfully</div>
				)}
			</form>
		</div>
	)
}


export default Contact