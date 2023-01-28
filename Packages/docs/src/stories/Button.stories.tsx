import { Button, ButtonProps } from '@matias-designsystem/react'
import { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'enviar',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>
export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo Passo
        <ArrowRight />
      </>
    ),
  },
}
