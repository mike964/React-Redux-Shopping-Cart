// import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	removeItem,
	addQuantity,
	subtractQuantity,
} from '../store/actions/cartActions'
import Recipe from './Recipe'

const Cart = () => {
	const dispatch = useDispatch()
	const { cartItems, total } = useSelector(state => state)
	//to remove the item completely
	const handleRemove = id => {
		dispatch(removeItem(id))
	}
	//to add the quantity
	const handleAddQuantity = id => {
		dispatch(addQuantity(id))
	}
	//to substruct from the quantity
	const handleSubtractQuantity = id => {
		dispatch(subtractQuantity(id))
	}

	let renderItems = cartItems.length ? (
		cartItems.map(item => {
			return (
				<li className='collection-item avatar' key={item.id}>
					<div className='item-img'>
						<img src={item.img} alt={item.img} className='' />
					</div>

					<div className='item-desc'>
						<span className='title'>{item.title}</span>
						<p>{item.desc}</p>
						<p>
							<b>Price: {item.price}$</b>
						</p>
						<p>
							<b>Quantity: {item.count}</b>
						</p>
						<div className='add-remove'>
							<i
								className='material-icons'
								onClick={() => {
									handleAddQuantity(item.id)
								}}>
								arrow_drop_up
							</i>
							<i
								className='material-icons'
								onClick={() => {
									handleSubtractQuantity(item.id)
								}}>
								arrow_drop_down
							</i>
							<span
								className='remove'
								onClick={() => {
									handleRemove(item.id)
								}}>
								remove
							</span>
						</div>
					</div>
				</li>
			)
		})
	) : (
		<p>Nothing yet</p>
	)

	return (
		<div className='container'>
			<div className='cart'>
				<h5>You have ordered:</h5>
				<ul className='collection'>{renderItems}</ul>
			</div>
			<Recipe total={total} item={cartItems} />
		</div>
	)
}

export default Cart

// const mapStateToProps = state => {
// 	return {
// 		items: state.cart.cartItems,
// 		//cartItems: state.cartItems
// 	}
// }
// const mapDispatchToProps = dispatch => {
// 	return {
// 		removeItem: id => {
// 			dispatch(removeItem(id))
// 		},
// 		addQuantity: id => {
// 			dispatch(addQuantity(id))
// 		},
// 		subtractQuantity: id => {
// 			dispatch(subtractQuantity(id))
// 		},
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
