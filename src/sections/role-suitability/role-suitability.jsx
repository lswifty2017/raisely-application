import React from 'react';
import NextButton from '../../components/next-button/next-button';
import './role-suitability.scss';

const RoleSuitability = ({ sectionID }) => {
  return (
    <div className="role-suitability" id={sectionID}>
      <div class="role-suitability__content">
        <h2>Why I am Suited to the Role</h2>
        <ul>
          <li>
            I'm definitely the go getter type. I can't stand needless
            inefficiency and repetition. I get my hands dirty when I can!
          </li>
          <li>
            I'm technically minded. I've had experience developing frontend and
            backend solutions in industry. I'm also a qualified mechanical
            engineer in background.
          </li>
          <li>
            I'm trained as an educator, and therefore a communicator. Previously
            a high school teacher, I've gained valuable skills in working with
            people of various ages and backgrounds. I enjoy breaking down
            complexities into simple, understandable concepts.
          </li>
          <li>
            I'm resilient and work with my ego constraints. I have a tendency to
            be drawn towards uncomfortable situations - I'm currently learning
            salsa dancing and surfing as an adult!
          </li>
          <li>
            I'm sick of having jobs that lack meaning. I want to make an impact
            and connect with my values whilst using my skills in technology. I'm
            already excited about the product that Raisely offers the world.
          </li>
        </ul>
      </div>
      <NextButton linkId="task-list"></NextButton>
    </div>
  );
};

export default RoleSuitability;
