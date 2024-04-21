import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from ".";
import { useState } from "react";

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

interface InputArgs extends InputProps {
  isDisabled?: boolean
}

const Template: StoryFn<InputArgs> = args => {
  const [value, setValue] = useState('')
  return (
    <Input
      {...args}
      onChange={event => setValue(event.target.value)}
      value={value}
      disabled={args.disabled}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
}
