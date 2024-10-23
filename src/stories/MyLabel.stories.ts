import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title: 'UI/labels/My Label',
    component: MyLabel,
    parameters: {
        layout: 'centered'
    }

} satisfies Meta<typeof MyLabel>;

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {

}