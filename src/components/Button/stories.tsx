import { Story, Meta } from '@storybook/react/types-6-0'
import { Donate } from '@styled-icons/fa-solid/Donate'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Contribuir'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Contribuir',
  icon: <Donate />
}
