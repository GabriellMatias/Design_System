import { Text, TextProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit sint minima est earum facere molestias fugiat, odit officia maiores quia obcaecati voluptatem praesentium quam deleniti ullam explicabo amet. Aut.',
  },
} as Meta<TextProps>
export const Primary: StoryObj<TextProps> = {}
export const CustomText: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
