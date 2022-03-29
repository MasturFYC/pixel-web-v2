import React, { FormEvent, useState } from 'react'
import { useNavigate }  from 'react-router-dom'
import { Form } from '@react-spectrum/form'
import { Flex } from '@react-spectrum/layout'
import { View } from '@react-spectrum/view'
import { NumberField } from '@react-spectrum/numberfield'
import { Button} from '@react-spectrum/button'
import { ButtonGroup } from '@react-spectrum/buttongroup'
import DownloadIcon from '@spectrum-icons/workflow/Download'
import { Text } from '@react-spectrum/text'

type iTokoSentra = {
	start: number
	prefix: number
	since: number
	end: number
}
const TokoSentra = () => {
	let navigate = useNavigate()
	let [data, setData] = useState<iTokoSentra>({ start: 1, prefix: 3, since: 22, end: 100 })

	return (
		<View>
			<View marginBottom={'size-200'}>
			<div className={'div-h2'}>Toko Sentra</div>
			</View>
			<Form onSubmit={handleSubmit}>
				<Flex direction={'column'} rowGap={'size-75'} width={'size-3600'}>
					<NumberField
						flex
						label={<div className='width-60'>Prefix</div>}
						labelAlign={'end'}
						labelPosition={'side'}
						autoFocus
						formatOptions={{ useGrouping: false }}
						hideStepper={true}
						value={data.prefix}
						onChange={(e) => handleChange("prefix", e)}
					/>

					<NumberField
						flex
						label={<div className='width-60'>Since</div>}
						labelAlign={'end'}
						labelPosition={'side'}
						formatOptions={{ useGrouping: false }}
						hideStepper={true}
						value={data.since}
						onChange={(e) => handleChange("since", e)}
					/>
					<NumberField
						flex
						label={<div className='width-60 label-cta'>Start</div>}
						labelAlign={'end'}
						labelPosition={'side'}
						formatOptions={{ useGrouping: false }}
						hideStepper={true}
						value={data.start}
						onChange={(e) => handleChange("start", e)}
					/>
					<NumberField
						flex
						label={<div className='width-60 label-primary'>End</div>}
						labelAlign={'end'}
						labelPosition={'side'}
						formatOptions={{ useGrouping: false }}
						hideStepper={true}
						value={data.end}
						onChange={(e) => handleChange("end", e)}
					/>
				</Flex>
				<ButtonGroup marginTop={'size-200'}>
					<Button type={'submit'} variant={'cta'}>
						<DownloadIcon size='S' /><Text>Download</Text></Button>
					<Button variant={'primary'} onPress={() => navigate("/")}>Cancel</Button>
				</ButtonGroup>

			</Form>
		</View>
	)

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
	}
	function handleChange(fieldName: string, value: string | number | boolean | undefined | null) {
		setData(o => ({ ...o, [fieldName]: value }))
	}
}

export default TokoSentra