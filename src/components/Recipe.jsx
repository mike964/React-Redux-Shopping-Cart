import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { toggleShipping } from '../store/actions/cartActions'
// import { connect } from 'react-redux'

// class Recipe extends Component{
const Recipe = ({ total, items }) => {
	const dispatch = useDispatch()
	// componentWillUnmount() {
	//      if(this.refs.shipping.checked)
	//           this.props.substractShipping()
	// }

	const handleChecked = e => {
		dispatch(toggleShipping(e.target.checked))
	}

	return (
		<div className='container'>
			<div className='collection'>
				<li className='collection-item'>
					<label>
						<input
							type='checkbox'
							// ref='shipping'
							onChange={handleChecked}
						/>
						<span>Express Shipping (+6$)</span>
					</label>
				</li>
				<li className='collection-item'>
					<b>Total: {total} $</b>
				</li>
			</div>
			<div className='checkout'>
				<button className='waves-effect waves-light btn'>Checkout</button>
			</div>
		</div>
	)
}

export default Recipe

// const mapStateToProps = (state)=>{
//     return{
//         cartItems: state.cartItems,
//         total: state.total
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         toggleShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
//         substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
