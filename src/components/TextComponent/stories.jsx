import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sequi, possimus incidunt illum officiis voluptatum et.
    Aliquam odio, commodi beatae id aperiam cum, numquam assumenda rem quas eos ipsum consequuntur magnam.,`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
