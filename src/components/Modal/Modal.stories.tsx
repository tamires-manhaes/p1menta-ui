import { Modal } from ".";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../Button";
import { ModalProps } from "./types";
import { FormEvent, useState } from "react";
import { Input } from "../Input";

const StoryInfo: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      source: { language: 'tsx' },
    },
  },
}

export default StoryInfo;

interface ModalArgs extends ModalProps {
  hasPrimaryAction?: boolean
  hasSecondaryAction?: boolean
  hasNegativeAction?: boolean
}


const TemplateForm: StoryFn<ModalArgs> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const submitForm = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <div
        className="flex content-center justify-center flex-col w-[100%] h-[100%] max-h[550px] relative"
      >
        <p className="font-sans not-italic font-regular font-4 leading-6 mb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      </div>
      <Modal
        {...args}
        open={isOpen}
        title="Título"
        onClose={closeModal}
        primaryActionProps={{
          variant: 'primary',
        }}
        primaryAction={
          args.hasPrimaryAction
            ? () => alert('action primary button')
            : undefined
        }
        secondaryActionProps={{
          variant: 'secondary',
        }}
        secondaryAction={
          args.hasSecondaryAction
            ? () => alert('action secondary button')
            : undefined
        }
        negativeAction={
          args.hasNegativeAction
            ? () => alert('action negative button')
            : undefined
        }
      >
        <p className="font-sans not-italic font-regular font-4 leading-6 mb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form onSubmit={submitForm} className="py-[16px]">
          <Input
            label="nome"
            fullWidth
            placeholder="digite seu nome aqui"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            label="email"
            fullWidth
            placeholder="digite seu email aqui"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </form>
      </Modal>
    </>
  )
}

export const Form = TemplateForm.bind({})
Form.args = {
  title: 'Título',
  primaryActionLabel: 'concluir',
  secondaryActionLabel: 'desfazer',
  negativeActionLabel: 'cancelar',
  hasPrimaryAction: true,
  hasSecondaryAction: true,
  hasNegativeAction: true,
}
