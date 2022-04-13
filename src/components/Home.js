import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import ProductItem from './ProductItem'

class Home extends Component {
	// handleClick = id => {
	// 	this.props.addToCart(id)
	// }

	render() {
		let itemList = this.props.items.map(item => {
			return <ProductItem item={item} />
		})

		return (
			<div className='container'>
				<h3 className='center'>Our items</h3>
				<div className='box'>{itemList}</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	console.log(state)
	return {
		items: state.cart.items,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addToCart: id => {
			dispatch(addToCart(id))
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
