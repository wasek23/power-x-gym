import React from 'react';
import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';
import ClassPost from '../Posts/ClassPost';

import classesData from '../../PostData/classesData';

const Classes = () => {
    document.title = "Our Classes | " + WebsiteName;

    return (
        <>
            <HeroPage title="Our Classes"></HeroPage>

            <main>
                {classesData.length !== 0 && <section className="classes">
                    <div className="container grid3">
                        {classesData.map(singleClass => <ClassPost classesData={singleClass} key={singleClass.id}></ClassPost>)}
                    </div>
                </section>}
            </main>
        </>
    );
};

export default Classes;