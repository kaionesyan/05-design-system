import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@kaionesyan/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/10064416?v=4',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
