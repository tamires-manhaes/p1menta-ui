import { Meta, StoryFn } from "@storybook/react";
import {Select, SelectItem } from "./index";
import { ISelectProps } from './types';

const StoryInfo: Meta<ISelectProps> = {
	title: "mds/Select",
	component: Select,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			source: { language: "tsx" },
		},
	},
	argTypes: {
		// classes: {
		// 	description: "If true, the input element is focused during the first mount.",
		// 	controls: {
		// 		type: "string",
		// 	},
		// },
		disabled: {
			description: "Styles the select as disabled.",
			controls: {
				type: "boolean",
			},
		},
		defaultValue: {
			description: "The default value. Use when the component is not controlled.",
			controls: {
				type: "any",
			},
		},
		value: {
			description:
				"Currently selected value. Matches the 'value' property of the options objects.",
			type: "string",
		},
		error: {
			description:
				"Triggers error styles on the component. Important for accessibility. If true, the input will indicate an error. The prop defaults to the value (false) inherited from the parent FormControl component.",
			controls: {
				type: "boolean",
			},
			defaultValue: false,
		},
		fullWidth: {
			description: "If true, the input will take up the full width of its container.",
			controls: {
				type: "boolean",
			},
		},
		id: {
			description: "The id of the input element.",
			type: "string",
		},
		// inputProps: {
		// 	description: "Attributes applied to the input element.",
		// 	controls: {
		// 		type: "object",
		// 	},
		// },
		// inputRef: {
		// 	description: "Pass a ref to the input element.",
		// 	controls: {
		// 		type: "ref",
		// 	},
		// },
		name: {
			type: "string",
			description:
				"Callback fired when the input is blurred. Notice that the first argument (event) might be undefined.",
		},
		placeholder: {
			description: "String to show when no selection is made.",
			controls: {
				type: "string",
			},
		},
		required: {
			description:
				"If <i>true</i>, the <i>input</i> element is required. The prop defaults to the value (<i>false</i>) inherited from the parent FormControl component.",
			type: "boolean",
		},
		label: {
			description: "Name of the select form element.",
			type: "string",
		},
	},
};

export default StoryInfo;

const UF = [
	{ nome: "Acre", sigla: "AC" },
	{ nome: "Alagoas", sigla: "AL" },
	{ nome: "Amapá", sigla: "AP" },
	{ nome: "Amazonas", sigla: "AM" },
	{ nome: "Bahia", sigla: "BA" },
	{ nome: "Ceará", sigla: "CE" },
	{ nome: "Distrito Federal", sigla: "DF" },
	{ nome: "Espírito Santo", sigla: "ES" },
	{ nome: "Goiás", sigla: "GO" },
	{ nome: "Maranhão", sigla: "MA" },
	{ nome: "Mato Grosso", sigla: "MT" },
	{ nome: "Mato Grosso do Sul", sigla: "MS" },
	{ nome: "Minas Gerais", sigla: "MG" },
	{ nome: "Pará", sigla: "PA" },
	{ nome: "Paraíba", sigla: "PB" },
	{ nome: "Paraná", sigla: "PR" },
	{ nome: "Pernambuco", sigla: "PE" },
	{ nome: "Piauí", sigla: "PI" },
	{ nome: "Rio de Janeiro", sigla: "RJ" },
	{ nome: "Rio Grande do Norte", sigla: "RN" },
	{ nome: "Rio Grande do Sul", sigla: "RS" },
	{ nome: "Rondônia", sigla: "RO" },
	{ nome: "Roraima", sigla: "RR" },
	{ nome: "Santa Catarina", sigla: "SC" },
	{ nome: "São Paulo", sigla: "SP" },
	{ nome: "Sergipe", sigla: "SE" },
	{ nome: "Tocantins", sigla: "TO" },
];

const Template: StoryFn<ISelectProps> = (args) => {
  console.log(UF)
	return (
		<Select {...args}>
			{UF.map((uf) => {
				return (
					<SelectItem key={uf.nome} value={uf.sigla}>
						{uf.sigla}
					</SelectItem>
				);
			})}
		</Select>
	);
};

export const Default = Template.bind({});
Default.args = {
	error: false,
	label: "Default",
	placeholder: "selecione UF",
  variant: 'primary'
};

