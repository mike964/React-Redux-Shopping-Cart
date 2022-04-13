// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addToCart } from './actions/cartActions'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const Home = () => {
	// handleClick = id => {
	// 	this.props.addToCart(id)
	// }

	const { items } = useSelector(state => state)

	let itemList = items.map(item => <ProductItem key={item.id} item={item} />)

	return (
		<div className='container'>
			<h3 className='center'>Our items</h3>
			<div className='box'>{itemList}</div>
		</div>
	)
}

export default Home

// const mapStateToProps = state => {
// 	console.log(state)
// 	return {
// 		items: state.cart.items,
// 	}
// }
// const mapDispatchToProps = dispatch => {
// 	return {
// 		addToCart: id => {
// 			dispatch(addToCart(id))
// 		},
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Home)
