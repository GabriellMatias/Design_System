import { Avatar, AvatarProps } from '@matias-designsystem/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabriellmatias.png',
    alt: 'GabriellMatias',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
