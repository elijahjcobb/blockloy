/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

import { Block, Value, Field, Shadow } from "./index";
import {BlocklyComponent} from "./BlocklyComponent";
// import './blocks/customblocks';
// import './generator/generator';

export interface BlocklyProps {

}

export interface BlocklyState {

}

export class Blockly extends React.Component<BlocklyProps, BlocklyState> {

	public constructor(props: BlocklyProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		// @ts-ignore
		return (<div className={"Blockly"}><BlocklyComponent /*ref={this.simpleWorkspace}*/ readOnly={false} trashcan={true} media={'media/'}
							  move={{
								  scrollbars: true,
								  drag: true,
								  wheel: true
							  }}
							  initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}>
				<Block type="test_react_field" />
				<Block type="test_react_date_field" />
				<Block type="controls_ifelse" />
				<Block type="logic_compare" />
				<Block type="logic_operation" />
				<Block type="controls_repeat_ext">
					<Value name="TIMES">
						<Shadow type="math_number">
							<Field name="NUM">10</Field>
						</Shadow>
					</Value>
				</Block>
				<Block type="logic_operation" />
				<Block type="logic_negate" />
				<Block type="logic_boolean" />
				<Block type="logic_null" disabled="true" />
				<Block type="logic_ternary" />
				<Block type="text_charAt">
					<Value name="VALUE">
						<Block type="variables_get">
							<Field name="VAR">text</Field>
						</Block>
					</Value>
				</Block>
			</BlocklyComponent>
		</div>);
	}

}
