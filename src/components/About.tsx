import { FC } from 'react';
import { TMode } from '../types';

interface Props {
  theme: TMode;
}

export const About: FC<Props> = ({ theme }) => {
  return (
    <section>
      <h1>Undraw Illustrations</h1>
      <div className="about-container">
        <div className="image-container">
          <h2>Web Innovation</h2>
          <img
            src={`img/undraw_proud_coder_${theme}.svg`}
            alt="Proud Coder"
            id="image1"
          />
        </div>
        <div className="image-container">
          <h2>Problem Solving</h2>
          <img
            src={`img/undraw_feeling_proud_${theme}.svg`}
            alt="Feeling Proud"
            id="image2"
          />
        </div>
        <div className="image-container">
          <h2>High Concept</h2>
          <img
            src={`img/undraw_conceptual_idea_${theme}.svg`}
            alt="Conceptual Idea"
            id="image3"
          />
        </div>
      </div>
    </section>
  );
};
