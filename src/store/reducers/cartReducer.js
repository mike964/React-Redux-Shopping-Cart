import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import {
	ADD_TO_CART,
	REMOVE_ITEM,
	SUB_QUANTITY,
	ADD_QUANTITY,
	SET_SHIPPING,
} from '../actions/action-types/cart-actions'

const initState = {
	items: [
		{
			id: 1,
			title: 'Winter body',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			price: 110,
			img: Item1,
		},
		{
			id: 2,
			title: 'Adidas',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			price: 80,
			img: Item2,
		},
		{
			id: 3,
			title: 'Vans',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			price: 120,
			img: Item3,
		},
		{
			id: 4,
			title: 'White',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			price: 260,
			img: Item4,
		},
		{
			id: 5,
			title: 'Cropped-sho',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			price: 160,
			img: Item5,
		},
		{
			id: 6,
			title: 'Blues',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			price: 90,
			img: Item6,
		},
	],
	cartItems: [],
	shipping: false, // express shipping checkbox
	shippingAddress: '',
	total: 0,
}

const cartReducer = (state = initState, action) => {
	let addedItem = {}
	switch (action.type) {
		// * INSIDE HOME COMPONENT
		case ADD_TO_CART:
			addedItem = state.items.find(item => item.id === action.id)
			//check if the action id exists in the cartItems
			// * If item already exists, just increase count by 1 : update item
			let item_existed = state.cartItems.find(item => action.id === item.id)

			let newItem = {
				...addedItem,
				count: 1,
			}

			if (item_existed) {
				// * If
				return {
					...state,
					cartItems: state.cartItems.map(item =>
						item.id === action.id ? { ...item, count: item.count + 1 } : item
					),
					total: state.total + addedItem.price,
				}
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, newItem],
					total: state.total + addedItem.price,
				}
			}

		case REMOVE_ITEM:
			let itemToRemove = state.cartItems.find(item => action.id === item.id)

			// * Calculate the total
			let newTotal = state.total - itemToRemove.price * itemToRemove.count
			// console.log(itemToRemove)
			return {
				...state,
				cartItems: state.cartItems.filter(item => action.id !== item.id),
				total: newTotal,
			}
		//INSIDE CART COMPONENT
		case ADD_QUANTITY:
			addedItem = state.cartItems.find(item => item.id === action.id)
			// addedItem.count += 1
			return {
				...state,
				cartItems: state.cartItems.map(item =>
					item.id === action.id ? { ...item, count: item.count + 1 } : item
				),
				total: state.total + addedItem.price,
			}

		case SUB_QUANTITY:
			addedItem = state.cartItems.find(item => item.id === action.id)
			console.log(addedItem)
			//if the qt == 0 then it should be removed
			if (addedItem.count === 1) {
				return {
					...state,
					cartItems: state.cartItems.filter(item => action.id !== item.id),
					total: state.total - addedItem.price,
				}
			} else {
				// addedItem.count -= 1
				return {
					...state,
					cartItems: state.cartItems.map(item =>
						item.id === action.id ? { ...item, count: item.count - 1 } : item
					),
					total: state.total - addedItem.price,
				}
			}

		case SET_SHIPPING:
			return {
				...state,
				total: action.payload ? state.total + 6 : state.total - 6,
				shipping: action.payload,
			}
		default:
			return state
	}
}

export default cartReducer
