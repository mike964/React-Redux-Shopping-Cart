import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import {
	ADD_TO_CART,
	REMOVE_ITEM,
	SUB_count,
	ADD_count,
	ADD_SHIPPING,
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
	addedItems: [],
	shippingAddress: '',
	total: 0,
}

const cartReducer = (state = initState, action) => {
	switch (action.type) {
		// * INSIDE HOME COMPONENT
		case ADD_TO_CART:
			let addedItem = state.items.find(item => item.id === action.id)
			//check if the action id exists in the addedItems
			// * If item already exists, just increase count by 1 : update item
			let item_existed = state.addedItems.find(item => action.id === item.id)

			let newItem = {
				...addedItem,
				count: 1,
			}

			if (item_existed) {
				// * If
				return {
					...state,
					addedItems: state.addedItems.map(item =>
						item.id === action.id ? { ...item, count: item.count + 1 } : item
					),
				}
			} else {
				return {
					...state,
					addedItems: [...state.addedItems, newItem],
					total: state.total + addedItem.price,
				}
			}
		// }

		// if (action.type === REMOVE_ITEM) {
		// 	let itemToRemove = state.addedItems.find(item => action.id === item.id)
		// 	let new_items = state.addedItems.filter(item => action.id !== item.id)

		// 	//calculating the total
		// 	let newTotal = state.total - itemToRemove.price * itemToRemove.count
		// 	console.log(itemToRemove)
		// 	return {
		// 		...state,
		// 		addedItems: new_items,
		// 		total: newTotal,
		// 	}
		// }
		// //INSIDE CART COMPONENT
		// if (action.type === ADD_count) {
		// 	let addedItem = state.items.find(item => item.id === action.id)
		// 	addedItem.count += 1
		// 	let newTotal = state.total + addedItem.price
		// 	return {
		// 		...state,
		// 		total: newTotal,
		// 	}
		// }
		// if (action.type === SUB_count) {
		// 	let addedItem = state.items.find(item => item.id === action.id)
		// 	//if the qt == 0 then it should be removed
		// 	if (addedItem.count === 1) {
		// 		let new_items = state.addedItems.filter(item => item.id !== action.id)
		// 		let newTotal = state.total - addedItem.price
		// 		return {
		// 			...state,
		// 			addedItems: new_items,
		// 			total: newTotal,
		// 		}
		// 	} else {
		// 		addedItem.count -= 1
		// 		let newTotal = state.total - addedItem.price
		// 		return {
		// 			...state,
		// 			total: newTotal,
		// 		}
		// 	}
		// }

		// if (action.type === ADD_SHIPPING) {
		// 	return {
		// 		...state,
		// 		total: state.total + 6,
		// 	}
		// }

		// if (action.type === 'SUB_SHIPPING') {
		// 	return {
		// 		...state,
		// 		total: state.total - 6,
		// 	}
		// } else {
		// 	return state
		// }
		default:
			return state
	}
}

export default cartReducer
