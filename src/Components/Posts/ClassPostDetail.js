import React from 'react';
import HeroPage from '../Hero/HeroPage';
import { Link } from 'react-router-dom';

const ClassPostDetail = props => {
    const { thumb, title, classSchedule, content } = props.classesData;

    return (
        <>
            <HeroPage title={title}></HeroPage>
            <section className="classDetail">
                <div className="container">
                    <div className="left">
                        <img src={thumb} alt={title} />

                        {content}
                    </div>

                    <div className="right">
                        <h2><span className="primaryColor">Class</span> Schedule</h2>

                        <div className="schedule">
                            {Object.entries(classSchedule).map(data => <div className="card" key={data[0]}>
                                <h5>{data[0]}</h5>
                                <p className="primaryColor">{data[1]}</p>
                            </div>)}
                        </div>

                        <Link to="/pricing" className="btn btn-primary">Join Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClassPostDetail;