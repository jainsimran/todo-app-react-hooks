import React, {useState} from 'react';

export default function TodoList() {

    const [list, addItem] = useState([]);
    const [item, addInput] = useState();

    let onSubmit = event => {
        event.preventDefault();
        addItem(list.concat(item));
    }

    console.log(list);
    return (
        <div>
            <form>
                <label>
                    Add item
                    <input type="text" name='item' onChange={(event) => addInput(event.target.value)}/>
                </label>
                <button type="submit" onClick={onSubmit}> Submit </button>
            </form>
        </div>
    )
}
