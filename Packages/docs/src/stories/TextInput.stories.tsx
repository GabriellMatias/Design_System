import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@matias-designsystem/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    /* componente react desestruturado!, recebe algo e retorna um JSX */
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size={'sm'}>Username</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>
export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'calc.com',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
