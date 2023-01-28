import { Heading, HeadingProps } from '@matias-designsystem/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'h1 Heading',
  },
  argTypes: {
    options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
    control: {
      type: 'inline-radio',
    },
  },
} as Meta<HeadingProps>
export const Primary: StoryObj<HeadingProps> = {}
export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  parameters: {
    docss: {
      description: {
        story:
          'By default heading will be always a `h2`, but we can change this with `as` propriety',
      },
    },
  },
}
