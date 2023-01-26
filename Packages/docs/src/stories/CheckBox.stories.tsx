import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Forms/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    /* componente react desestruturado!, recebe algo e retorna um JSX */
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size={'sm'}>Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>
export const Primary: StoryObj<CheckBoxProps> = {}
