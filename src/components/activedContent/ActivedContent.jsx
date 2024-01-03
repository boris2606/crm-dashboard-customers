import React from 'react';
import './ActivedContent.scss'
import DataTable from '../dataTable/DataTable';
import { userData } from '../../data/usersData';

const ActivedContent = () => {

    const tableRows = ['Customer Name','Company','Phone Number','Email','Country','Status']

    return (
        <main className='actived_content'>
            <article className="actived_content-greetings">
                <h1 className="login_person">Hello Evano 👋🏼,</h1>
            </article>
            <article className="actived_content-block">
                <section className="actived_content-head">
                    <div className='actived_content-title'>
                        <p>All Customers</p>
                        <p>Active Members</p>
                    </div>
                    <div className='actived_content-search'>
                        <input className='actived_content_search-input' type="search" placeholder='Search' />
                    </div>
                </section>
                <DataTable data={userData} tableRows={tableRows}/>
            </article>
        </main>
    );
};

export default ActivedContent;