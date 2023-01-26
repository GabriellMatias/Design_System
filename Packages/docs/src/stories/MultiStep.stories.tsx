import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Forms/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    /* componente react desestruturado!, recebe algo e retorna um JSX */
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>
export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
