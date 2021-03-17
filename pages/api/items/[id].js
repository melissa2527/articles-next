import {items} from '../../../data';

export default function handler({query: {id}}, res) {
    const filtered = items.filter(item => item.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `item with id of ${id} is not found`})
    }
}