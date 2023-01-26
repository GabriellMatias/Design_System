import { keyframes, styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  "&[data-state='checked']": {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})
const slideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
})

/* exibe ou nao o conteudo de acordo com o checkbox selecionado ou nao */
export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  "&[data-state='checked']": {
    animation: `${slideIn} 200ms ease-out`,
  },
  "&[data-state='unchecked']": {
    animation: `${slideOut} 200ms ease-out`,
  },
})
