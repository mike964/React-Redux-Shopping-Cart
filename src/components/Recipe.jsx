import React, { Component } from 'react'
// import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'

// class Recipe extends Component{
const Recipe = ({ total, items }) => {
	// componentWillUnmount() {
	//      if(this.refs.shipping.checked)
	//           this.props.substractShipping()
	// }

	const handleChecked = e => {
		if (e.target.checked) {
			// addShipping()
		} else {
			// substractShipping()
		}
	}

	return (
		<div className='container'>
			<div className='collection'>
				<li className='collection-item'>
					<label>
						{/* <input
							type='checkbox'
							ref='shipping'
						 	onChange={this.handleChecked}
						/> */}
						<span>Shipping(+6$)</span>
					</label>
				</li>
				<li className='collection-item'>
					{/* <b>Total: {this.props.total} $</b> */}
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
//         addedItems: state.addedItems,
//         total: state.total
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
//         substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
