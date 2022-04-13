import React from 'react'
import { addToCart } from './actions/cartActions'
import { useDispatch } from 'react-redux'

const ProductItem = ({ item }) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(addToCart(item.id))
	}

	return (
		<div className='card' key={item.id}>
			<div className='card-image'>
				<img src={item.img} alt={item.title} />
				<span className='card-title'>{item.title}</span>
				<span
					to='/'
					className='btn-floating halfway-fab waves-effect waves-light red'
					onClick={handleClick}>
					<i className='material-icons'>add</i>
				</span>
			</div>

			<div className='card-content'>
				<p>{item.desc}</p>
				<p>
					<b>Price: {item.price}$</b>
				</p>
			</div>
		</div>
	)
}

export default ProductItem
