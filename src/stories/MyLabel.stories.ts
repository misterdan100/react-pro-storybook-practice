import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title: 'UI/labels/My Label',
    tags: ['autodocs'],
    component: MyLabel,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio'},
        allCaps: {control: 'boolean'},
        backColor: {control: "color"}
    }

} satisfies Meta<typeof MyLabel>;

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label',
        allCaps: false,
        size: 'normal',
        color: 'text-primary',
        backColor: '#fff'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        size: 'normal',
        allCaps: true,
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        size: 'normal',
        color: "text-secondary",
    }
}

export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        size: 'normal',
        backColor: '#899098'
    }
}