import React from 'react';
import './task-list.scss';
import Card from '../../components/card/card';
import NextButton from '../../components/next-button/next-button';

const excited = {
  title: 'Excited About',
  content: [
    'Plan new product features based on feedback from customers',
    'Recruit a new team member'
  ]
};

const learn = {
  title: 'Want to Learn',
  content: [
    'Create a video tutorial on how to set up a campaign element',
    'Running a training session with a customer to set up their unique campaign'
  ]
};

const lessKeen = {
  title: 'Less Keen About',
  content: [
    'Updating the developer docs to cover a new release',
    `Change the fonts and background colour on someone's campaign`
  ]
};

const TaskList = ({ sectionID }) => {
  return (
    <div className="task-list" id={sectionID}>
      <h2>Raisely Tasks</h2>
      <div className="task-list__wrapper">
        <Card {...excited} />
        <Card {...learn} />
        <Card {...lessKeen} />
      </div>
      <NextButton sectionID="platform" />
    </div>
  );
};

export default TaskList;
