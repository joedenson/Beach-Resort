import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../Title';

// get all unique values

const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}

const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    // get all unique types
    let types = getUnique(rooms, 'type');

    // add all
    types = [...types, 'all'];

    // map to jsx

    types = types.map((item, index) => {
        return <option value={item} key={index}></option>
    })



    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange} >
                        <option value='single'>single</option>
                        <option value='double'>double</option>
                        <option value='family'>family</option>
                        <option value='presidential'>presidential</option>
                    </select>
                </div>
                {/* end of select type */}
            </form>
        </section>
    );
}


export default RoomFilter;

