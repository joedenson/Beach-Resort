import React, { Component } from 'react';
import Title from '../Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';


class Services extends Component {
    state = {
        services: [
            {
                icons: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                icons: <FaHiking />,
                title: 'endless hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                icons: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                icons: <FaBeer />,
                title: 'strongest beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            }
        ]
    }



    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}



export default Services;