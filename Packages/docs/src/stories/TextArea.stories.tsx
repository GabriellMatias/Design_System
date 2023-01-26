import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    /* componente react desestruturado!, recebe algo e retorna um JSX */
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size={'sm'}>Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>
export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'add an observation',
  },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
