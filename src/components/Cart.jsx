import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	removeItem,
	addQuantity,
	subtractQuantity,
} from '../store/actions/cartActions'
import Recipe from './Recipe'

const Cart = () => {
	const { addedItems, total } = useSelector(state => state)
	//to remove the item completely
	const handleRemove = id => {
		this.props.removeItem(id)
	}
	//to add the quantity
	const handleAddQuantity = id => {
		this.props.addQuantity(id)
	}
	//to substruct from the quantity
	const handleSubtractQuantity = id => {
		this.props.subtractQuantity(id)
	}

	let renderItems = addedItems.length ? (
		addedItems.map(item => {
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
							<b>Quantity: {item.quantity}</b>
						</p>
						<div className='add-remove'>
							<Link to='/cart'>
								<i
									className='material-icons'
									onClick={() => {
										this.handleAddQuantity(item.id)
									}}>
									arrow_drop_up
								</i>
							</Link>
							<Link to='/cart'>
								<i
									className='material-icons'
									onClick={() => {
										this.handleSubtractQuantity(item.id)
									}}>
									arrow_drop_down
								</i>
							</Link>
						</div>
						<button
							className='waves-effect waves-light btn pink remove'
							onClick={() => {
								this.handleRemove(item.id)
							}}>
							Remove
						</button>
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
			<Recipe total={total} item={addedItems} />
		</div>
	)
}

export default Cart

// const mapStateToProps = state => {
// 	return {
// 		items: state.cart.addedItems,
// 		//addedItems: state.addedItems
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
