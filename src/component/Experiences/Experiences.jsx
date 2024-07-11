import React from 'react';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Experiences = () => {
  return (
    <section id='experince'>
        <h2>
            Experience
        </h2>
        <div>
            <div>
                {skills.map((skill, id) => {
                    return (
                        <div key={id}>
                            <div>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.id} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
