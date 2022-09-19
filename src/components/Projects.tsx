import { FC } from 'react';
import { TMode } from '../types';

interface Props {
  theme: TMode;
}

export const Projects: FC<Props> = ({ theme }) => {
  const backgroundColor =
    theme === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  return (
    <section id="projects">
      <h1>Buttons</h1>
      <div className="buttons">
        <button className="primary">Primary</button>
        <button className="secondary">Secondary</button>
        <button className="primary" disabled>
          Disabled
        </button>
        <button className="outline">Outline</button>
        <button className="secondary outline">Alt Outline</button>
        <button className="outline" disabled>
          Disabled
        </button>
      </div>
      <div
        className="text-box"
        style={{
          backgroundColor,
        }}
      >
        <p>
          Lorem ipsum dolor amet consectetur adipisicing elit. Voluptatibus
          magnam sit alias eos ducimus expedita quam, corporis, blanditiis vel
          facilis, animi adipisci? Nemo enim quisquam maiores minima, qui omnis.
          Accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem magnam accusamus qui, ab voluptates reprehenderit rerum quo
          mollitia libero asperiores doloremque dolores, nihil repellat
          doloribus perspiciatis magni dolore dolorum ipsam!
        </p>
      </div>
    </section>
  );
};
