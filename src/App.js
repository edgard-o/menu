import React, { useState } from 'react';
import items from './components/data';
import Categories from './components/categories';
import Menu from './components/menu';
import './style/index.css';

const allCategories = ['all', ...new Set (items.map((item) => item.category))];

const App = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) =>
            item.category === category
        );
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={allCategories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
};

export default App;