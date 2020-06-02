import React from 'react';
import ClassPost from '../Posts/ClassPost';

import getClassesData from '../../PostData/classesData';
import { Link } from 'react-router-dom';

const TrainingPrograms = () => {
    const classesData = getClassesData.slice(0, 2);

    return (
        <>
            {classesData.length !== 0 && <section className="trainingPrograms" id="trainingPrograms">
                <h2>Training <span className="primaryColor">Programs</span></h2>

                <div className="container grid2">
                    {classesData.map(singleClass => <ClassPost classesData={singleClass} key={singleClass.id}></ClassPost>)}
                </div>

                <div style={{ textAlign: "center" }}>
                    <Link to='/our-classes' className="btn btn-primary btnAnimated">More Programs</Link>
                </div>
            </section>}
        </>
    );
};

export default TrainingPrograms;